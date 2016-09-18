var React = require("react");
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function () {
        return (<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>)
    }
});