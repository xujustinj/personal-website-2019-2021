const BREAKPOINT = "640px";

export const adapt = (styles: { mobile: string; desktop: string }) => `
  ${styles.mobile ?? ""}
  @media (min-width: ${BREAKPOINT}) {
    ${styles.desktop ?? ""}
  }
`;
