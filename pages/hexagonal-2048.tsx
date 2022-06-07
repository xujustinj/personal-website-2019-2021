import { P5, P5Sketch } from "../components/P5";
import { Screen } from "../components/Screen";

export function getServerSideProps() {
  return { props: { title: "Hexagonal 2048" } };
}

const Hexagonal2048 = () => {
  const autoSize = (p5: P5) => {
    const size = Math.floor(
      (7 / 8) * Math.min(p5.windowWidth, p5.windowHeight - 40)
    );
    p5.resizeCanvas(size, size);
  };

  const draw = (p5: P5) => {
    autoSize(p5);
    p5.background(187, 173, 160);
  };

  return (
    <Screen foreground="black" background="white">
      <P5Sketch width={600} height={600} draw={draw} />
    </Screen>
  );
};

export default Hexagonal2048;
