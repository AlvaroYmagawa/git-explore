import React from "react";

// CUSTOM IMPORTS
import { Container, Children } from "./styles";

function Tooltip({ className, children, title }) {
  // STATES
  const [visibility, setVisibility] = React.useState(false);

  return (
    <Container visibility={visibility} className={className}>
      <Children
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
        onClick={() => setVisibility(!visibility)}
      >
        {children}
      </Children>

      <span>{title}</span>
    </Container>
  );
}

export default Tooltip;
