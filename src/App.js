import React, { Component } from "react"

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
    return (
      <div>
        {this.state.isLoading
          ? "loading…"
          : `${this.state.genes.length} genes loaded`}
      </div>
    )
  }
}

export default App
