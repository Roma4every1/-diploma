import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H3 } from "ui";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  border-radius: 50px;
  background: ${Color.Primary};
`;

const Text = styled.div`
  text-align: center;
  color: ${Color.Black};
  ${H3}
`;

export { Wrapper, Container, Text };
