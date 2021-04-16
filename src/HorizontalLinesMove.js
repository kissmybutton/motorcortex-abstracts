const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class HorizontalLinesMove extends MotorCortex.HTMLClip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
      }
    ];
  }

  get html() {
    const crossList = [];
    this.array = [];
    for (let i = 0; i < 3; i++) {
      this.array.push(0);
      crossList.push(
        `<div  style="width:${Math.floor(
          Math.random() * this.attrs.maxLineHeight
        )}px;" class="line-wrapper line-wrapper-item-${i}"> <div style="height:${
          this.attrs.maxLineHeight
        }px;width:${Math.floor(
          Math.random() * this.attrs.width
        )}px;"  class="line line-item-${i}"> </div></div> `
      );
    }

    return `
    <div class="wrapper">
      ${crossList.join("")}
    </div>
    

    `;
  }

  get css() {
    return `
    .wrapper{
      width: ${this.attrs.width}px;
      height:${this.attrs.height}px;
      font-family: 'Poppins', sans-serif;
    }
    .line{
      background: ${this.attrs.color};
      position: relative;
    }

    .line-wrapper{
      position: relative;
      overflow: hidden;
    }
 

  `;
  }

  buildTree() {
    for (let i = 0; i <= 3; i++) {
      const lineTop = new Anime.Anime(
        {
          animatedAttrs: {
            width: `${this.attrs.width * 0.6}px`,
            left: `0px`
          },
          initialValues: {
            width: `0px`,
            left: `${this.attrs.width}px`
          }
        },
        {
          duration: 500,
          selector: ".line-wrapper-item-" + i
        }
      );
      this.addIncident(lineTop, 500 * i + 1);
      const lineHeigth = new Anime.Anime(
        {
          animatedAttrs: {
            width: `0px`
          }
        },
        {
          duration: 400,
          selector: ".line-item-" + i
        }
      );
      this.addIncident(lineHeigth, 500 + 500 * i + 1);
    }
  }
}

module.exports = HorizontalLinesMove;
