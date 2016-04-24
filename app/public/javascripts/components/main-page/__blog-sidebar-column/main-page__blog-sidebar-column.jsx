var React = require('react');
var BlogSearch = require("../__blog-search/main-page__blog-search");
var BlogCategories = require("../__blog-categories/main-page__blog-categories.jsx");

module.exports = React.createClass({
    render: function () {
        return (<div className="col-md-4">
            <BlogSearch/>
            <BlogCategories/>
        </div>)
    }
});