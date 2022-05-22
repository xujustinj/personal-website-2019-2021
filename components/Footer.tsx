import {
  faGithub,
  faLinkedin,
  faTwitter,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import { FontAwesome } from "../data/FontAwesome";
import { Icons } from "../data/Icons";
import { adapt } from "../styles/Adaptive";
import { Section, SectionProps } from "./Section";

const IconTextLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  :hover {
    cursor: pointer;
  }
`;
interface FooterLinkProps {
  href: string;
  icon: IconDefinition;
  children: ReactNode;
}
const FooterLink = (props: FooterLinkProps) => (
  <Link href={props.href} passHref>
    <IconTextLink>
      {/* fa-fw: fixed width */}
      <FontAwesomeIcon icon={props.icon} className={"fa-fw"} />
      {props.children}
    </IconTextLink>
  </Link>
);

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${adapt({
    mobile: `
      gap: 16px;
      font-size: 8pt;
    `,
    desktop: `
      gap: 32px;
      font-size: 10pt;
    `,
  })}

  a {
    color: inherit;
    text-decoration-thickness: 1px;
  }
`;

const FooterColumn = styled.div`
  min-width: 90px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;

  > * {
    margin: 0;
  }
`;

const FooterMessage = styled.p`
  // margin: 0;

  // > a {
  //   color: inherit;
  // }
`;

export const Footer = (props: SectionProps) => (
  <Section {...props}>
    <FooterContainer>
      <FooterColumn>
        <FooterMessage>
          Custom-made by myself using{" "}
          <Link href="https://nextjs.org/">Next.js</Link> and{" "}
          <Link href="https://styled-components.com/">styled-components</Link>.
        </FooterMessage>
        <FooterMessage>
          Hosted using{" "}
          <Link href="https://aws.amazon.com/amplify/">AWS Amplify</Link>.
        </FooterMessage>
        <FooterMessage>Last updated May 18, 2022.</FooterMessage>
      </FooterColumn>
      <FooterColumn>
        <FooterLink
          href={"https://github.com/xujustinj"}
          icon={FontAwesome.GITHUB}
        >
          GitHub
        </FooterLink>
        <FooterLink
          href={"https://www.linkedin.com/in/xujustinj/"}
          icon={FontAwesome.LINKEDIN}
        >
          LinkedIn
        </FooterLink>
        <FooterLink
          href={"https://twitter.com/xujustinj"}
          icon={FontAwesome.TWITTER}
        >
          Twitter
        </FooterLink>
        <FooterLink href={"/resume.pdf"} icon={FontAwesome.RESUME}>
          Résumé
        </FooterLink>
      </FooterColumn>
    </FooterContainer>
  </Section>
);
