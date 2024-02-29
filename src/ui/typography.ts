import { css } from "styled-components";
import { Media } from "./index";

const H1 = css`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }

  ${Media.SM} {
    font-size: 28px;
    line-height: 42px;
  }
`;

const H2 = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  ${Media.SM} {
    font-size: 20px;
    line-height: 36px;
  }
`;

const H3 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const H4 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const H5 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const H6 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const Body = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { H1, H2, H3, H4, H5, H6, Body };
