var React = require('react');
var PageHeader = require("../__page-header/main-page__page-header");
var BlogPost = require("../__blog-post/main-page__blog-post");
var Pager = require("../__pager/main-page__pager");

module.exports = React.createClass({
    render: function () {
        return (<div className="col-md-8">
            <PageHeader />
            <BlogPost
                title={"Blog Post Title"}
                shortinfo={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."}
            />
            <BlogPost
                title={"Blog Post Title"}
                shortinfo={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."}
            />
            <BlogPost
                title={"Blog Post Title"}
                shortinfo={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum."}
            />
            <Pager />
        </div>)
    }
});