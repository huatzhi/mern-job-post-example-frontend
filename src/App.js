import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserTypePage from './pages/UserTypePage/UserTypePage.component';
import RecruiterRegistrationPage from './pages/RecruiterRegistrationPage/RecruiterRegistrationPage.component';
import RecruiterLoginPage from './pages/RecruiterLoginPage/RecruiterLoginPage.component';
import CreateJobPage from './pages/CreateJobPage/CreateJobPage.component';
import RecruiterJobListPage from './pages/RecruiterJobListPage/RecruiterJobListPage.component';
import CandidatePage from './pages/CandidatePage/CandidatePage.component';



function App() {
  const isLogin = useSelector(state => Boolean(state.auth.token));
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserTypePage} />
        <Route path="/candidate" component={CandidatePage} />
        <Route path="/recruiter/register" render={() => (
          !isLogin ? <RecruiterRegistrationPage /> : <Redirect to="/recruiter/job-list" />
        )} />
        <Route path="/recruiter/login" render={() => (
          !isLogin ? <RecruiterLoginPage /> : <Redirect to="/recruiter/job-list" />
        )} />
        <Route path="/recruiter/create-job" render={() => (
          isLogin ? <CreateJobPage /> : <Redirect to="/recruiter/login" />
        )} />
        <Route path="/recruiter/job-list" render={() => (
          isLogin ? <RecruiterJobListPage /> : <Redirect to="/recruiter/login" />
        )} />
        <Route path="/" component={(() => (<Redirect to="/" />))} />
      </Switch>
    </div>
  );
}

export default App;
