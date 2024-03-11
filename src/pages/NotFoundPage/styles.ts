import styled from "styled-components";
import { Media } from "ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 75vh;
  margin-top: 152px;
`;

const Container = styled.div`
  width: 500px;
  height: 500px;
  margin-left: -250px;

  ${Media.MD} {
    margin-left: 0px;
  }

  ${Media.SM} {
    width: 200px;
    height: 200px;
  }
`;

export { Container, Wrapper };
