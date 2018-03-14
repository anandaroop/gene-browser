import React from "react"
import { Link, Route, Redirect } from "react-router-dom"
import { Families } from "./Families"
import { Container, Header } from "./Layout"

export const GeneBrowser = () => {
  return (
    <Container>

      <Header>
        <Link to="/families">By family</Link> <Link to="/types">By type</Link>
      </Header>

      <Route exact path="/" render={props => <Redirect to="/families" />} />
      <Route path="/families" component={Families} />
      <Route path="/types" component={Families} />
    </Container>
  )
}
