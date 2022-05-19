import { Tag } from "../model/Tag";
import { Colour, Hue } from "../styles/Colours";

const TagCategory = (
  names: Record<string, string>,
  h: Hue
): Record<string, Tag> => {
  const colour = Colour({ h, s: "vibrant" });
  return Object.fromEntries(
    Object.entries<string>(names).map(([id, name]) => [
      id,
      { name, colour } as Tag,
    ])
  );
};

enum Languages {
  CPP = "C++",
  CSS = "CSS",
  HTML = "HTML",
  JAVA = "Java",
  JS = "JavaScript",
  KOTLIN = "Kotlin",
  PYTHON = "Python",
  SWIFT = "Swift",
  TEX = "TeX",
  TS = "TypeScript",
  R = "R",
}

enum Technologies {
  EXPRESS = "Express",
  GOOGLE_SHEETS = "Google Sheets",
  NEXT = "Next.js",
  P5 = "p5.js",
  REACT = "React",
  SVELTE = "Svelte",
}

enum Topics {
  AI = "AI",
  GRAPHICS = "Graphics",
  MATH = "Mathematics",
  WRITING = "Writing",
}

export const Tags = {
  ...TagCategory(Languages, "red"),
  ...TagCategory(Technologies, "orange"),
  ...TagCategory(Topics, "purple"),
} as const;
