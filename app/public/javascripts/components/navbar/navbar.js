var React = require("react");
var ReactDOM = require("react-dom");
var NavbarHeader = require("./__header/navbar__header");
var NavbarItems = require("./__items/navbar__items");

var Navbar = React.createClass({
    render: function () {
        return (<div className="container">
            <NavbarHeader />
            <NavbarItems />
        </div>)
    }
});

ReactDOM.render(
    <Navbar />,
    document.getElementById('navbar')
);