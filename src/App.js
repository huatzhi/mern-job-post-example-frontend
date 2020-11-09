import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserTypePage from './pages/UserTypePage/UserTypePage.component';
import RecruiterRegistrationPage from './pages/RecruiterRegistrationPage/RecruiterRegistrationPage.component';
import RecruiterLoginPage from './pages/RecruiterLoginPage/RecruiterLoginPage.component';
import CreateJobPage from './pages/CreateJobPage/CreateJobPage.component';
import RecruiterJobListPage from './pages/RecruiterJobListPage/RecruiterJobListPage.component';



function App() {
  const isLogin = useSelector(state => Boolean(state.auth.token));
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserTypePage} />
        {
          !isLogin ?
            (
              <>
                <Route path="/recruiter/register" component={RecruiterRegistrationPage} />
                <Route path="/recruiter/login" component={RecruiterLoginPage} />
              </>
            ) : (
              <>
                <Route path="/recruiter/create-job" component={CreateJobPage} />
                <Route path="/recruiter/job-list" component={RecruiterJobListPage} />

              </>
            )
        }


      </Switch>
    </div>
  );
}

export default App;
