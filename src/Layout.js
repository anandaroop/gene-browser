import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  background: black;
  flex: 0 1 50px;

  a {
    color: white;
  }
`

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  width: 100%;
`

export const Buckets = styled.div`
  flex: 0 1 20%;
  background: #ccc;

  &::after {
    content: "Buckets";
  }
`

export const Genes = styled.div`
  flex: 0 1 20%;
  background: #ddd;

  &::after {
    content: "Genes";
  }
`

export const Gene = styled.div`
  flex: 1 1 auto;
  background: #eee;

  &::after {
    content: "Gene";
  }
`
