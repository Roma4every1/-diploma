import styled from "styled-components";
import { formBackground } from "assets";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: no-repeat url(${formBackground});
  background-size: cover;
`;

export { Wrapper };
