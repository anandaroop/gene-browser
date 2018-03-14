import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background: black;
  flex: 0 1 50px;
`

const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  width: 100%;
`

const Buckets = styled.div`
  flex: 0 1 20%;
  background: #ccc;

  &::after {
    content: "Buckets";
  }
`

const Genes = styled.div`
  flex: 0 1 20%;
  background: #ddd;

  &::after {
    content: "Genes";
  }
`

const Gene = styled.div`
  flex: 1 1 auto;
  background: #eee;

  &::after {
    content: "Gene";
  }
`

export const GeneBrowser = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <Buckets />
        <Genes />
        <Gene />
      </Main>
    </Layout>
  )
}
