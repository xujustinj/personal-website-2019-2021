import { Item } from "../model/Item";
import { Tags } from "./Tags";
import ProjectCellarIcon from "../public/assets/project-cellar-200x200.png";
import StairwayConstantsIcon from "../public/assets/stairway-constants-400x400.png";
import WaterparkIcon from "../public/assets/waterpark-288x288.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const StairwayConstants: Item = {
  name: "Stairway Constants",
  description:
    "A massive guide to every constant featured on a decorative number line in a campus stairwell.",
  tags: [Tags.WRITING, Tags.MATH],
  icon: StairwayConstantsIcon,
  links: [
    {
      url: "https://github.com/xujustinj/stairway-constants/",
      icon: faGithub,
    },
  ],
};

export const ProjectCellar: Item = {
  name: "Project Cellar",
  description: "A well-kept secret.",
  icon: ProjectCellarIcon,
};

export const Waterpark: Item = {
  name: "Waterpark",
  description:
    "Loo Labs' flagship product: a campus wiki. Some of my finest full-stack engineering work, cut short by the collapse of Loo Labs itself.",
  tags: [Tags.TS, Tags.NEXT, Tags.EXPRESS],
  icon: WaterparkIcon,
  links: [
    {
      url: "https://github.com/loolabs/waterpark",
      icon: faGithub,
    },
    {
      url: "https://waterpark-loo-labs.vercel.app/",
      icon: faGlobe,
    },
  ],
};
