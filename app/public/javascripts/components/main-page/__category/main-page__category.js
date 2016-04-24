var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div className="col-lg-6">
            <h5>{this.props.categoryTitle}</h5>
            <ul className="list-unstyled">
                {this.props.categoryList.map(function (category) {
                    return <li key={category.key}>
                        <a href={category.subcategoryLink}>{category.subcategoryTitle}</a>
                    </li>
                })}
            </ul>
        </div>
    }
});