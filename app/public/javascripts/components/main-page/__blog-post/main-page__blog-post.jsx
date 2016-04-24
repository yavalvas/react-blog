var React = require('react');
module.exports = React.createClass({
    render: function () {
        return (<div>
            <h2>
                <a href="#">{this.props.title}</a>
            </h2>
            <p className="lead">
                by <a href="index.php">Start Bootstrap</a>
            </p>
            <p><span className="glyphicon glyphicon-time"></span> Posted on {this.props.date}</p>
            <hr />
            <img className="img-responsive" src="http://placehold.it/900x300" alt=""/>
            <hr />
            <p>{this.props.shortinfo}</p>
            <a className="btn btn-primary" href="#">Read More <span
                className="glyphicon glyphicon-chevron-right"></span></a>
        </div>)
    }
});