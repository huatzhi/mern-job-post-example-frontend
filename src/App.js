
import './App.css';
import { Route, Switch } from 'react-router-dom';
import UserTypePage from './pages/UserTypePage/UserTypePage.component';
import RecruiterRegistrationPage from './pages/RecruiterRegistrationPage/RecruiterRegistrationPage.component';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserTypePage} />
        <Route path="/recruiter/register" component={RecruiterRegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
