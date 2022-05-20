import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";
import { Tag } from "./Tag";

export interface Item {
  readonly name: string;
  readonly description: string;
  readonly tags?: ReadonlyArray<Tag>;
  readonly icon: StaticImageData;
  readonly links?: ReadonlyArray<{
    url: string;
    icon: IconDefinition;
  }>;
  readonly status: "ongoing" | "ended";
}
