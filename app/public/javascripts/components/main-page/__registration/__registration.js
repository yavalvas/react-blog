import React from 'react';
import _ from "lodash";
// import "./registration.css";
import RegistrationMiddleware from "../../../middleware/middleware_registration";
export default class MainPageRegistration extends React.Component {
    constructor(p_) {
        super(p_);
        this.state = {
            userModel: {}
        };
        this.debouncedUpdate = _.debounce(this.updateValue, 80);
    }

    updateValue({key, value}) {
        this.setState({userModel: Object.assign(this.state.userModel, {[key]: value})});
    }

    validateForm() {
        
    }

    registrateUser() {
        this.validateForm();
        RegistrationMiddleware.registrateUser({payload: this.state.userModel});
    }

    render() {
        const s_ = this.state;
        
        return <div className="container">
            <div className="row main registration__login-form">
                <div className="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="firstname" className="col-sm-2 col-xs-2">First name</label>
                            <div className="input-group col-sm-10 col-xs-10">
                                <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                <input type="text" className="form-control" name="firstname" id="firstname"
                                       placeholder="Enter your first name"
                                       onChange={(value) => this.debouncedUpdate({key: "firstName", value})}
                                       defaultValue={s_.userModel.firstName}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname" className="col-sm-2 col-xs-2">Last name</label>
                            <div className="input-group col-sm-10 col-xs-10">
                                <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Enter your last name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-sm-2 col-xs-2">Email</label>
                            <div className="input-group col-sm-10 col-xs-10">
                                <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                <input type="text" className="form-control" name="email" id="email"
                                       placeholder="Enter your email"
                                       onChange={(value) => this.debouncedUpdate({key: "secondName", value})}
                                       defaultValue={s_.userModel.secondName}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-sm-2 col-xs-2">Password</label>
                            <div className="input-group col-sm-10 col-xs-10">
                                <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password"
                                       onChange={(value) => this.debouncedUpdate({key: "password", value})}
                                       defaultValue={s_.userModel.password}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_repeat" className="col-sm-2 col-xs-2">Confirm password</label>
                            <div className="input-group col-sm-10 col-xs-10">
                                <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                <input type="password" className="form-control" name="password_repeat" id="password_repeat"
                                       placeholder="Repeat your password"
                                       onChange={(value) => this.debouncedUpdate({key: "passwordRetry", value})}
                                       defaultValue={s_.userModel.passwordRetry}
                                />
                            </div>
                        </div>
                        <div className="form-group col-sm-6 col-xs-6 col-lg-6 col-sm-offset-3 col-xs-offset-3 col-lg-offset-3">
                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>this.registrateUser()}>Registrate</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
};

MainPageRegistration.ContextTypes = {
    dialogDispatcher: React.PropTypes.func.isRequired
}