var React = require('react');
var Footer = require("../__footer/main-page__footer");
var BlogEntries = require("../__blog-entries/main-page__blog-entries");
var BlogSidebarColumn = require("../__blog-sidebar-column/main-page__blog-sidebar-column");
var Navbar = require("../../navbar/navbar");

var MainContainer = React.createClass({
    render: function () {
        const p_ = this.props;
        return (<div>
            <nav className="navbar navbar-inverse navbar-fixed-top"
                 role="navigation">
                <Navbar/>
            </nav>
            <div className="row">
                {p_.children || <BlogEntries />}
                <BlogSidebarColumn />
            </div>
            <hr />
            <Footer />
        </div>)
    }
});

module.exports = MainContainer;