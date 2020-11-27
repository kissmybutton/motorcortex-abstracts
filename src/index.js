const CrossMoveRight = require("./CrossMoveRight");
const CrossMoveRightOutline = require("./CrossMoveRightOutline");
const CrossRandom = require("./CrossRandom");
const VerticalLinesMove = require("./VerticalLinesMove");
const HorizontalLinesMove = require("./HorizontalLinesMove");
const CircleExplosion = require("./CircleExplosion");
const CircleBubbleUp = require("./CircleBubbleUp");
const Dots = require("./Dots");
const CrossRowReveal = require("./CrossRowReveal");
const {
  CrossMoveRightValidation,
  CrossMoveRightOutlineValidation,
  CrossRandomValidation,
  VerticalLinesMoveValidation,
  CircleExplosionValidation,
  CircleBubbleUpValidation,
  HorizontalLinesMoveValidation,
  DotsValidation,
  CrossRowRevealValidation
} = require("./validation");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-abstracts",
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
      name: "CircleBubbleUp",
      attributesValidationRules: { ...CircleBubbleUpValidation }
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
