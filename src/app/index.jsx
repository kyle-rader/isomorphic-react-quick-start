// Node does not have a define function, so we use amdefine.
let define;

if (typeof define !== 'function') {
  define = require('amdefine')(module);
}

define(require => {
  import React from 'react';

  class Index extends React.Component {
    propTypes: {
      component: React.PropTypes.string.isRequired,
      title: React.PropTypes.string,
      data: React.PropTypes.object
    };

    render: () => {
      let comp = require(`./components/${this.component}/${this.component}`);
      let title = this.title || 'React ES6 JS Start Template';
      let data = this.data || {};
      let preRendered = React.renderToString(<comp {...data} />);

      // String of script for client.
      let scriptString = `
        require.config({
          baseUrl: "/js/",
          paths:{
            "react": "https://cdnjs.cloudfare.com/ajax/libs/react/0.13.2/react",
          },
          waitSeconds: 7
        });

        require(["react", "components/${this.component}/${this.component}"], function(React, page){
          React.render(
            React.createElement(page, ${safeStringify(data)}),
            document.getElementById("content")
          );
        });`;

      return (
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <link rel="stylesheet" href="css/main.css" />
          </head>
          <body>
            <div id="content" dangerouslySetInnerHTML={__html: preRendered} />
              <script data-main="index" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.17/require.js"></script>
              <script dangerouslySetInnerHTML={__html:scriptString} />
          </body>
        </html>
      );
    };
  }

  safeStringify = (obj) => {
    JSON.stringify(obj)
      .replace(/<\/script/g, '<\\/script')
      .replace(/<!--/g, '<\\!--');
  };

  return Index;

});
