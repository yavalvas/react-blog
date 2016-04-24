var React = require('react');
module.exports = React.createClass({
    render: function () {
        return (<ul className="pager">
            <li className="previous">
                <a href="#">&larr; Older</a>
            </li>
            <li className="next">
                <a href="#">Newer &rarr;</a>
            </li>
        </ul>)
    }
});