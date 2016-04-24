var React = require('react');
var Footer = require("../__footer/main-page__footer");
var BlogEntries = require("../__blog-entries/main-page__blog-entries");
var BlogSidebarColumn = require("../__blog-sidebar-column/main-page__blog-sidebar-column");

var MainContainer = React.createClass({
    render: function () {
        return (<div>
            <div className="row">
                <BlogEntries />
                <BlogSidebarColumn />
            </div>
            <hr />
            <Footer />
        </div>)
    }
});

module.exports = MainContainer;