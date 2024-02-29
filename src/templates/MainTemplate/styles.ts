import styled from "styled-components";
import { Media } from "ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0px 62px 64px;

  ${Media.MD} {
    padding: 0px 40px 56px;
  }

  ${Media.SM} {
    padding: 0px 24px 50px;
  }
`;

const Container = styled.div`
  max-height: 100%;
  margin-left: 300px;

  ${Media.MD} {
    margin-left: 0;
  }

  ${Media.SM} {
    margin-top: 200px;
  }
`;

export { Wrapper, Container };
