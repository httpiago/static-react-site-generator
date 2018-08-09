import React, { Component, Fragment } from 'react'
import Document from '../Document.js'
import Title from './Title'

class About extends Component {
  static async getInitialProps() {
    return {  }
  }

  render() {
    return (
      <Document>
        <div>
          <Title/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis suscipit vulputate. Nam nisi metus, tristique eu fringilla ac, semper eleifend massa. Duis ante dui, laoreet eu nisi eu, bibendum suscipit lectus. Mauris placerat neque quis sapien mattis volutpat. Fusce neque velit, posuere sit amet cursus quis, tincidunt id enim. Donec et elit ac metus commodo ultricies. Vestibulum semper ligula nec aliquet hendrerit. Pellentesque dignissim velit hendrerit neque tempor, vitae vestibulum purus pharetra. Nunc hendrerit pharetra tortor vulputate congue. Donec ultrices in metus ac dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec sapien non nibh congue mattis. Aliquam aliquam...</p>
          <a href="/">{'<'} Página inicial</a>
        </div>
      </Document>
    )
  }
}
 
export default About;