import React from "react";
import { ROUTE } from "routes/routes";
import { Container, CustomLink, Wrapper, Text } from "./styles";

export const EmptySearch = () => {
  return (
    <Wrapper>
      <Container>
        {/* <EmptySearchIcon /> */}
      </Container>
      <Text>
        Try again or choose something from{" "}
        <CustomLink to={ROUTE.NEW}> the new movies</CustomLink>
      </Text>
    </Wrapper>
  );
};
