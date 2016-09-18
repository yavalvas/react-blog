var React = require("react");

module.exports = React.createClass({
    render: function () {
        return (<div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
            </button>
            <a className="navbar-brand" href="#">Start Bootstrap</a>

            {/*<a className="navbar-brand" href="#"><span className="glyphicon glyphicon-fire"></span>Yavalvas developer blog</a>*/}
        </div>)
    }
});