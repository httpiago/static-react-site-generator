import React, { Component, Fragment } from 'react'
import Document from '../Document.js'

class Home extends Component {
  static async getInitialProps() {
    return {  }
  }

  render() {
    return (
      <Document>
        <h1>Hello World!</h1>

        <a href="/about">Sobre mim {'>'}</a>
      </Document>
    )
  }
}
 
export default Home;