const Cross = require("./Cross");
const { CrossValidation } = require("./validation");
module.exports = {
  npm_name: "@kissmybutton/motorcortex-animebanners",
  incidents: [
    {
      exportable: Cross,
      name: "Cross",
      // attributesValidationRules: { ...CrossValidation }
    }
  ]
};
