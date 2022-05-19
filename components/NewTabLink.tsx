import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type NewTabLinkProps = Omit<LinkProps, "passHref"> & {
  children?: ReactNode | ReactNode[];
};

export const NewTabLink = (props: NewTabLinkProps) => (
  <Link href={props.href} passHref>
    <a target={"_blank"} rel="noopener noreferrer">
      {props.children}
    </a>
  </Link>
);
