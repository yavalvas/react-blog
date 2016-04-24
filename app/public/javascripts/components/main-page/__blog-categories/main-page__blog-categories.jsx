var Category = require('../__category/main-page__category');
var React = require('react');
module.exports = React.createClass({
    render: function () {
        return <div className="well">
            <h4>Blog Categories</h4>
            <div className="row">
                <div className="col-lg-6">
                    <Category
                        categoryTitle="First category"
                        categoryList={[
                            {
                                subcategoryTitle: "Category Name",
                                subcategoryLink: "#",
                                key: 1
                            },
                            {
                                subcategoryTitle: "Category Name1",
                                subcategoryLink: "#",
                                key: 2
                            },
                            {
                                subcategoryTitle: "Category Name2",
                                subcategoryLink: "#",
                                key: 3
                            },
                            {
                                subcategoryTitle: "Category Name3",
                                subcategoryLink: "#",
                                key: 4
                            }
                        ]}
                    />
                </div>
                <div className="col-lg-6">
                    <Category
                        categoryTitle="Second category"
                        categoryList={[
                            {
                                subcategoryTitle: "Category Name",
                                subcategoryLink: "#",
                                key: 1
                            },
                            {
                                subcategoryTitle: "Category Name1",
                                subcategoryLink: "#",
                                key: 2
                            },
                            {
                                subcategoryTitle: "Category Name2",
                                subcategoryLink: "#",
                                key: 3
                            },
                            {
                                subcategoryTitle: "Category Name3",
                                subcategoryLink: "#",
                                key: 4
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    }
});