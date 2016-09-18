import MainPageRegistration from './__registration/__registration';
var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var AppContainer = require('./__container/main-page__container');

let MainRouter = <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
        <Route path="about"/>
        <Route path="services"/>
        <Route path="contact"/>
        <Route path="registrate" component={MainPageRegistration}/>
    </Route>
</Router>;

ReactDOM.render(
    MainRouter,
    document.getElementById('content')
);