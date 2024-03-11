import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0px 5%;
`;

const Container = styled.div`
  height: 500px;
  padding: 0 100px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: -60px;
  right: 5px;
`;

const NavPrev = styled.button`
  background: inherit;
  margin-right: 20px;
  cursor: pointer;
`;

const NavNext = styled.button`
  background: inherit;
  fill: ${Color.Primary};
  cursor: pointer;
`;

export { Wrapper, Container, NavPrev, NavNext, ArrowContainer };
