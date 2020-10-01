exports.CrossMoveRightValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  crossSize: { optional: false, type: "number" },
  crossThickness: { optional: false, type: "number" },
  travelDistance: { optional: false, type: "number" },
  items: { optional: false, type: "number" },
  color: { optional: false, type: "color" }
};

exports.CrossMoveRightOutlineValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  crossSize: { optional: false, type: "number" },
  travelDistance: { optional: false, type: "number" },
  steps: { optional: false, type: "number" },
  color: { optional: false, type: "color" }
};

exports.CrossRandomValidation = {
  width: { optional: false, type: "number" },
  crossSize: { optional: false, type: "number" },
  crossThickness: { optional: false, type: "number" },
  items: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  rows: { optional: false, type: "number" },
  timing: { optional: true, type: "number" }
};

exports.VerticalLinesMoveValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  maxLineWidth: { optional: false, type: "number" },
  color: { optional: false, type: "color" }
};
exports.HorizontalLinesMoveValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  maxLineHeight: { optional: false, type: "number" },
  color: { optional: false, type: "color" }
};
exports.CircleExplosionValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  maxCirlcleSize: { optional: false, type: "number" },
  travelDistance: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  items: { optional: false, type: "number" },
  minR: { optional: false, type: "number" },
  maxR: { optional: false, type: "number" },
  border: { optional: false, type: "boolean" }
};

exports.CircleBubbleUp = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  maxCirlcleSize: { optional: false, type: "number" },
  travelDistance: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  items: { optional: false, type: "number" },
  border: { optional: false, type: "boolean" }
};

exports.DotsValidation = {
  width: { optional: false, type: "number" },
  dotSize: { optional: false, type: "number" },
  items: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  rowGap: { optional: false, type: "number" },
  columnGap: { optional: false, type: "number" },
  rows: { optional: false, type: "number" },
  timing: { optional: false, type: "number" },
  repeats: { optional: false, type: "number" }
};

exports.CrossRowRevealValidation = {
  width: { optional: false, type: "number" },
  crossSize: { optional: false, type: "number" },
  crossThickness: { optional: false, type: "number" },
  items: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  reverse: { optional: false, type: "boolean" },
  timing: { optional: false, type: "number" }
};
