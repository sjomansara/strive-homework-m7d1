import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux'
import Favorites from './components/Favorites';
import CompanySearchResults from './components/CompanySearchResults'



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path='/:companyName' component={CompanySearchResults} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
