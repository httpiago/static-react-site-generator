import React from 'react';

export default (props) => (
  <html>
    <head>
      <title>Hello Word</title>
    </head>
    <body>
      {props.children}
    </body>
  </html>
)