import React, { Component } from "react"
import { GeneBrowser } from "./GeneBrowser"
import styled from "styled-components"

const Spinner = styled.div`
  color: gray;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      genes: []
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch("/all_genes.json")
    const allGenes = await response.json()
    this.setState({ isLoading: false, genes: allGenes })
  }

  render() {
    const { isLoading, genes } = this.state
    return isLoading ? (
      <Spinner>loading…</Spinner>
    ) : (
      <GeneBrowser genes={genes} />
    )
  }
}

export default App
