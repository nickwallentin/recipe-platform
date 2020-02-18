import styled from "styled-components"

export const Wrap = styled.div`
  max-width: ${props => (props.wide ? "1080px" : "900px")};
  width: ${props => (props.full ? "100%" : "90%")};
  margin: 0 auto;
`
