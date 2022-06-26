import { P5, P5Sketch } from "../components/P5";
import { Screen } from "../components/Screen";
import { Color } from "p5";

export function getServerSideProps() {
  return { props: { title: "Hexagonal 2048" } };
}

const baseWidth = 600;
const baseHeight = 600;

type Colours = {
  readonly background: Color;
  readonly score: Color;
  readonly tiles: Record<
    number,
    {
      readonly background: Color;
      readonly text: Color;
    }
  >;
};

const Hexagonal2048 = () => {
  let width: number = baseWidth;
  let height: number = baseHeight;
  let colours: Colours;
  let score: number = 0;

  function scale(x: number) {
    return x * (width / baseWidth);
  }

  function drawScore(p5: P5) {
    p5.push();
    {
      p5.translate(width, height);
      p5.fill(colours.score);
      p5.textSize(scale(30));
      p5.textAlign("right", "bottom");
      p5.text(`Score: ${score}`, -8, -4);
    }
    p5.pop();
  }

  const autoSize = (p5: P5) => {
    width = height = Math.floor(
      (7 / 8) * Math.min(p5.windowWidth, p5.windowHeight - 40)
    );
    p5.resizeCanvas(width, height);
  };

  const postSetup = (p5: P5) => {
    p5.textFont("Clear Sans");

    const lightText = p5.color(249, 246, 242);
    const darkText = p5.color(119, 110, 101);
    colours = {
      background: p5.color(187, 173, 160),
      score: lightText,
      tiles: {
        0: { background: p5.color(205, 193, 180), text: p5.color(0, 0) },
        2: { background: p5.color(238, 228, 218), text: darkText },
        4: { background: p5.color(238, 225, 201), text: darkText },
        8: { background: p5.color(243, 178, 122), text: lightText },
        16: { background: p5.color(246, 150, 100), text: lightText },
        32: { background: p5.color(247, 124, 95), text: lightText },
        64: { background: p5.color(247, 95, 59), text: lightText },
        128: { background: p5.color(237, 208, 115), text: lightText },
        256: { background: p5.color(237, 204, 98), text: lightText },
        512: { background: p5.color(237, 201, 80), text: lightText },
        1024: { background: p5.color(237, 197, 63), text: lightText },
        2048: { background: p5.color(237, 194, 46), text: lightText },
        // Based on the screenshot found at
        // nicosai.wordpress.com/2014/10/31/10-things-i-learned-from-2048/
        4096: { background: p5.color(239, 103, 108), text: lightText },
        8192: { background: p5.color(237, 77, 88), text: lightText },
        16384: { background: p5.color(226, 67, 57), text: lightText },
        32768: { background: p5.color(113, 180, 213), text: lightText },
        65536: { background: p5.color(94, 160, 223), text: lightText },
        131072: { background: p5.color(0, 124, 190), text: lightText },
        // Arbitrarily incrementing by (10,20,-20) hereon.
        262114: { background: p5.color(10, 144, 170), text: lightText },
        524288: { background: p5.color(20, 164, 150), text: lightText },
        1048576: { background: p5.color(30, 184, 130), text: lightText },
      },
    };
  };

  const draw = (p5: P5) => {
    autoSize(p5);
    p5.background(colours.background);

    drawScore(p5);
  };

  return (
    <Screen foreground="black" background="white">
      <P5Sketch width={600} height={600} postSetup={postSetup} draw={draw} />
    </Screen>
  );
};

export default Hexagonal2048;
