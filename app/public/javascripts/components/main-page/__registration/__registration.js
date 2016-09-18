import React from 'react';

export default class MainPageRegistration extends React.Component {
    // constructor(p_) {
    //     super(p_);
    //     this.state = {
    //
    //     };
    // }

    render() {
        return <div className="container">
            <div className="row main">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label for="firstname" className="cols-sm-2">First name</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" name="firstname" id="firstname" placeholder="Enter your first name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="lastname" className="cols-sm-2">Last name</label>
                    </div>
                    <div className="form-group">
                        <label for="email" className="cols-sm-2">Email</label>
                    </div>
                    <div className="form-group">
                        <label for="password" className="cols-sm-2">Password</label>
                    </div>
                </form>
            </div>
        </div>
    }
};