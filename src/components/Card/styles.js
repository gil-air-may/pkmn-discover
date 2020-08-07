import styled from "styled-components";

export const CardStyled = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: linear-gradient(
    to bottom right,
    white,
    ${(props) => props.bgColor}
  );
`;
