const title = React.createElement(
    'h1',
    {id:'main-title', title:'This is a title'},
    'My first react element, from scratch'
);

const description = React.createElement(
    'p',
    {},
    'text here?'
)

const header = React.createElement(
    'header',
    {},
    title,
    description
)

ReactDOM.render(
    header,document.querySelector('#root')
)