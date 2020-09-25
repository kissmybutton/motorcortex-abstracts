const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class Cross extends MotorCortex.API.Clip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
      }
    ];
  }

  get html() {
    let crossList = []
    for (let i = 1; i <= this.attrs.items; i++) {
      crossList.push(` <div style="left: ${(this.attrs.crossSize) * i}px;" class="cross cross-item-${i}"> </div>`)
    }

    // const textlist = (() => {
    //   const list = [];
    //   const n = Math.floor(this.attrs.height / (this.attrs.width * 0.2));
    //   this.n = n;
    //   for (let i = 0; i < n; i++) {
    //     list.push(`<div class="txt-group txt-${i}">brapapa</div>`);
    //   }
    //   return list.join("");
    // })();
    return `
    <div class="wrapper">
      ${crossList.join('')}
	  </div>
    `;
  }

  get css() {

    return `
    .wrapper{
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;
      display:flex;
      font-family: 'Poppins', sans-serif;
    }
    
    .cross {
      background: red;
      height: ${this.attrs.crossSize}px;
      position: relative;
      width: ${this.attrs.crossThiknes}px;
      left: ${this.attrs.crossSize / 2 - this.attrs.crossThiknes / 2}px;
    }
    .cross:after {
      background: red;
      content: "";
      height: ${this.attrs.crossThiknes}px;
      left: -${this.attrs.crossSize / 2 - this.attrs.crossThiknes / 2}px;
      position: absolute;
      top: ${this.attrs.crossSize / 2 - this.attrs.crossThiknes / 2}px;
      width: ${this.attrs.crossSize}px;
    }

  `;
  }

  buildTree() {


    for (let i = 1; i <= this.attrs.items; i++) {
      const box = new Anime.Anime(
        {
          animatedAttrs: {
            transform: { rotate: "197deg" },
            left: `${this.attrs.travelDistance}px`
          },
          initialValues: {

          },
          attrs: {
            transform: { rotate: "0deg" }
          }
        },
        {
          duration: 1000,
          selector: ".cross-item-" + i,
          easing: "easeOutQuart",
          repeats: 1
        }
      );

      this.addIncident(box, 500 + 50 * (i + 1));
    }
  }
}

module.exports = Cross;
