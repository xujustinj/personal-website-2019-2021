import { Item } from "../model/Item";
import { Tags } from "./Tags";

import StairwayConstantsIcon from "../public/assets/stairway-constants-400x400.png";

export const StairwayConstants: Item = {
  name: "Stairway Constants",
  description:
    "A massive guide to every constant featured on the decorative number line in a stairwell in UW campus. Originally published in mathNEWS, now soon to be a website.",
  tags: [Tags.WRITING, Tags.MATH],
  icon: StairwayConstantsIcon,
  link: "https://github.com/xujustinj/stairway-constants/",
};
