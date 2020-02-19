import styled from "styled-components"

export const Sec = styled.div`
  padding: ${props => props.space || "15px 0"};
  background: var(--c-bg-s);
  color: var(--c-txt);
`

export const Card = styled.div`
  background: ${props => props.bg || "var(--c-bg)"};
  padding: ${props => props.space || "0px"};
  border-radius: 5px;
  color: var(--c-txt);
  & > div {
  }

  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0px;
  }

  .card-header {
    border-bottom: 1px solid var(--c-bg-s);
    display: flex;
    align-items: center;
    padding: ${props => props.hSpace || "20px"};
    justify-content: ${props =>
      props.flexHeader ? "space-between" : "inherit"};
    h4 {
      margin-bottom: 0px;
    }
    small {
      color: var(--c-txt-soft);
      line-height: 1rem;
    }
  }
  .card-content {
    padding: ${props => props.cSpace || "20px"};
    .separator {
      margin: 15px 0px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 500;
      color: var(--c-txt);

      span {
        background: var(--c-bg);

        padding: 0px 20px;
        z-index: 1;
        position: relative;
      }

      &::after {
        content: " ";
        display: block;
        height: 1px;
        width: 100%;
        background: var(--c-border);
        position: absolute;
        top: calc(50% - 1px);
      }
    }
  }
  .card-footer {
    padding: ${props => props.fSpace || "20px"};
    text-align: center;
    border-top: 1px solid var(--c-bg-s);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.cols || "1fr"};
  grid-gap: ${props => props.gap || "20px"};

  @media screen and (max-width: 800px) {
    grid-template-columns: ${props => props.mCols || "1fr"};
    grid-gap: ${props => props.mGap || "20px"};
  }
`

export const Wrap = styled.div`
  max-width: ${props => (props.wide ? "1080px" : "900px")};
  width: ${props => (props.full ? "100%" : "90%")};
  margin: 0 auto;
`

export const Input = styled.input`
  outline: none;
  color: var(--c-txt);
  width: 100%;
  padding: 0px;
  &::placeholder {
    color: var(--c-txt-soft);
  }
  &.invisible {
    background: transparent;
    border: none;
  }
  &.h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  &.p {
    font-size: 1rem;
  }
`
export const Textarea = styled.textarea`
  outline: none;
  color: var(--c-txt);
  resize: none;
  min-width: 100% !important;
  max-width: 100% !important;
  padding: 0px;
  font-size: 1rem;

  &::placeholder {
    color: var(--c-txt-soft);
  }
  &.invisible {
    background: transparent;
    border: none;
  }
  &.h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  &.p {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  padding: ${props => (props.large ? "20px 30px" : "10px 15px")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.full ? "100%" : "inherit")};
  text-align: center;
  color: ${props => (props.cta ? "white" : "var(--c-txt-soft)")};
  background: ${props =>
    props.invisible
      ? "transparent"
      : props.cta
      ? "var(--c-pri)"
      : "var(--c-bg-s)"};
  border-radius: 5px;
  font-weight: ${props => (props.cta ? "900" : "500")};
  border: ${props => (props.border ? "2px solid var(--c-txt)" : "none")};
  font-size: ${props => (props.large ? "14px" : "14px")};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    path {
      fill: ${props => (props.cta ? "white" : "var(--c-icon-l)")};
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
  }
`
