// Node does not have a define function, so we use amdefine.
var define;
let safeStringify;

if (typeof define !== 'function') {
  define = require('amdefine')(module);
}

define(require => {

  let React = require('react');

  class Index extends React.Component {
    render() {
      let compName = this.props.component;
      let Comp = require(`./components/${compName}/${compName}`);
      let title = this.title || 'React ES6 JS Start Template';
      let data = this.data || {};
      let preRendered = React.renderToString(<Comp {...data} />);

      // String of script for client.
      let scriptString = `
        require.config({
          baseUrl: "/js/",
          paths:{
            "react": "https://cdnjs.cloudflare.com/ajax/libs/react/0.13.2/react",
          },
          waitSeconds: 7
        });

        require(["react", "components/${compName}/${compName}"], function(React, page){
          React.render(
            React.createElement(page, ${this.safeStringify(data)}),
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
            <div id="content" dangerouslySetInnerHTML={{__html: preRendered}} />
              <script data-main="Index" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.17/require.js"></script>
              <script dangerouslySetInnerHTML={{__html:scriptString}} />
          </body>
        </html>
      );
    };

    safeStringify (obj) {
      JSON.stringify(obj)
        .replace(/<\/script/g, '<\\/script')
        .replace(/<!--/g, '<\\!--');
    };
  }

  Index.propTypes = {
    component: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    data: React.PropTypes.object
  };

  return Index;

});
