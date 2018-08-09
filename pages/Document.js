import React from 'react';

export default (props) => (
  <html>
    <head>
      <title>Hello Word</title>
      <link rel="shortcut icon" href="/public/favicon.ico" />
    </head>
    <body>
      {props.children}
    </body>
  </html>
)