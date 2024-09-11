import { styled } from "styled-components";

interface ICss {
  css: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

/**
 ** Responsive breakpoints based on first mobile responsive
 */
const breakpoints = {
  css: "0px", // global
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
};

export const Div = styled.div<Partial<ICss>>`
  ${({ css = "" }) => css}

  @media (min-width: ${breakpoints.xs}) {
    ${({ xs = "" }) => xs}
  }
  @media (min-width: ${breakpoints.sm}) {
    ${({ sm = "" }) => sm}
  }
  @media (min-width: ${breakpoints.md}) {
    ${({ md = "" }) => md}
  }
  @media (min-width: ${breakpoints.lg}) {
    ${({ lg = "" }) => lg}
  }
  @media (min-width: ${breakpoints.xl}) {
    ${({ xl = "" }) => xl}
  }
  @media (min-width: ${breakpoints.xxl}) {
    ${({ xxl = "" }) => xxl}
  }
`;

export const Span = styled.span<Partial<ICss>>`
  ${({ css = "" }) => css}

  @media (min-width: ${breakpoints.xs}) {
    ${({ xs = "" }) => xs}
  }
  @media (min-width: ${breakpoints.sm}) {
    ${({ sm = "" }) => sm}
  }
  @media (min-width: ${breakpoints.md}) {
    ${({ md = "" }) => md}
  }
  @media (min-width: ${breakpoints.lg}) {
    ${({ lg = "" }) => lg}
  }
  @media (min-width: ${breakpoints.xl}) {
    ${({ xl = "" }) => xl}
  }
  @media (min-width: ${breakpoints.xxl}) {
    ${({ xxl = "" }) => xxl}
  }
`;

export const P = styled.p<Partial<ICss>>`
  ${({ css = "" }) => css}

  @media (min-width: ${breakpoints.xs}) {
    ${({ xs = "" }) => xs}
  }
  @media (min-width: ${breakpoints.sm}) {
    ${({ sm = "" }) => sm}
  }
  @media (min-width: ${breakpoints.md}) {
    ${({ md = "" }) => md}
  }
  @media (min-width: ${breakpoints.lg}) {
    ${({ lg = "" }) => lg}
  }
  @media (min-width: ${breakpoints.xl}) {
    ${({ xl = "" }) => xl}
  }
  @media (min-width: ${breakpoints.xxl}) {
    ${({ xxl = "" }) => xxl}
  }
`;
