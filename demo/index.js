const MotorCortex = require("@kissmybutton/motorcortex");
const Player = require("@kissmybutton/motorcortex-player/");
const AbstractsDefinition = require("../dist/motorcortex-abstracts.umd");
const Plugin = MotorCortex.loadPlugin(AbstractsDefinition);

const css = `.container {
  overflow: hidden;
  display: flex;
  justify-content: center;

  width:1280px;
  height:720px;
}`;

const html = ` <div class="container container1"></div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "100%",
  height: "100%"
};

const clip = new MotorCortex.Clip({
  css,
  html,
  host,
  containerParams,
  id: "root",
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }
  ]
});

const overlayColor = ["#BB00FF91", "#00FFE791", "#FFD70091"];

const Cross = new Plugin.Cross(
  {
    width: 500,
    height: 500,
    crossSize: 90,
    crossThiknes: 10,
    travelDistance: 300,
    items: 3
  },
  {
    selector: ".container1"
  }
);

clip.addIncident(Cross, 0);

new Player({ clip, timeFormat: "ms" });
