import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H3, Media } from "ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 75vh;
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

const Text = styled.p`
  margin-top: 15px;
  margin-left: -202px;
  ${H3};
  color: ${Color.Secondary};

  ${Media.MD} {
    margin-left: 0px;
  }
`;

const CustomLink = styled(Link)`
  color: ${Color.Primary};

  &:hover {
    color: ${Color.PrimaryLight};
  }

  &:active {
    color: ${Color.Primary};
  }

  &:disabled {
    color: ${Color.Light};
  }
`;

export { Container, Wrapper, Text, CustomLink };
