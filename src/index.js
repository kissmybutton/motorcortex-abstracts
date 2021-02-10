import CrossMoveRight from "./CrossMoveRight";
import CrossMoveRightOutline from "./CrossMoveRightOutline";
import CrossRandom from "./CrossRandom";
import VerticalLinesMove from "./VerticalLinesMove";
import HorizontalLinesMove from "./HorizontalLinesMove";
import CircleExplosion from "./CircleExplosion";
import CircleBubbleUp from "./CircleBubbleUp";
import Dots from "./Dots";
import CrossRowReveal from "./CrossRowReveal";
// import {CrossMoveRightValidation,CrossMoveRightOutlineValidation,CrossRandomValidation} from "./validation"
import {
  CrossMoveRightValidation,
  CrossMoveRightOutlineValidation,
  CrossRandomValidation,
  VerticalLinesMoveValidation,
  CircleExplosionValidation,
  // CircleBubbleUpValidation,
  HorizontalLinesMoveValidation,
  DotsValidation,
  CrossRowRevealValidation
} from "./validation";

import {name,version}  from '../package.json'

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: CrossMoveRight,
      name: "CrossMoveRight",
      attributesValidationRules: { ...CrossMoveRightValidation }
    },
    {
      exportable: CrossMoveRightOutline,
      name: "CrossMoveRightOutline",
      attributesValidationRules: { ...CrossMoveRightOutlineValidation }
    },
    {
      exportable: CrossRandom,
      name: "CrossRandom",
      attributesValidationRules: { ...CrossRandomValidation }
    },
    {
      exportable: VerticalLinesMove,
      name: "VerticalLinesMove",
      attributesValidationRules: { ...VerticalLinesMoveValidation }
    },
    {
      exportable: HorizontalLinesMove,
      name: "HorizontalLinesMove",
      attributesValidationRules: { ...HorizontalLinesMoveValidation }
    },
    {
      exportable: CircleExplosion,
      name: "CircleExplosion",
      attributesValidationRules: { ...CircleExplosionValidation }
    },
    {
      exportable: CircleBubbleUp,
      name: "CircleBubbleUp"
      // attributesValidationRules: { CircleBubbleUpValidation }
    },
    {
      exportable: Dots,
      name: "Dots",
      attributesValidationRules: { ...DotsValidation }
    },
    {
      exportable: CrossRowReveal,
      name: "CrossRowReveal",
      attributesValidationRules: { ...CrossRowRevealValidation }
    }
  ]
};
