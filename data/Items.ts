import { Item } from "../model/Item";
import { Tags } from "./Tags";
import ProjectCellarIcon from "../public/assets/project-cellar-200x200.png";
import StairwayConstantsIcon from "../public/assets/stairway-constants-400x400.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
  description: "A secret.",
  icon: ProjectCellarIcon,
};
