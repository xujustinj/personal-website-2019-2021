const BREAKPOINT = "768px";

export const adapt = (styles: { mobile: string; desktop: string }) => `
  ${styles.mobile ?? ""}
  @media (min-width: ${BREAKPOINT}) {
    ${styles.desktop ?? ""}
  }
`;
