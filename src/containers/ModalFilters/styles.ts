import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: rgba(16, 16, 16, 0.7);
`;

export { Container };
