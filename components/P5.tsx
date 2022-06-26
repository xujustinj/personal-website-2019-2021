import dynamic from "next/dynamic";
import { SketchProps } from "react-p5";

export type P5 = Parameters<SketchProps["setup"]>[0];
export type P5CanvasProps = Omit<SketchProps, "setup"> & {
  width: number;
  height: number;
  postSetup?: (p5: P5) => void;
};
export const P5Sketch = dynamic(
  async () => {
    const Sketch = (await import("react-p5")).default;

    return (props: P5CanvasProps) => {
      const setup: SketchProps["setup"] = (p5, canvasRef) => {
        p5.createCanvas(props.width, props.height).parent(canvasRef);
        if (props.postSetup !== undefined) {
          props.postSetup(p5);
        }
      };
      return <Sketch {...props} setup={setup} />;
    };
  },
  { ssr: false }
);
