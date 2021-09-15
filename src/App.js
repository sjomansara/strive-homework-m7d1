import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobDetails from './components/JobDetails';
import MyNavbar from './components/MyNavbar';
import MyJumbotron from './components/MyJumbotron';


function App() {
  return (
    <Router>
    <div className="App">
      <MyNavbar />
      <MyJumbotron />
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/company-detail/:id" component={JobDetails} />
    </div>
    </Router>
  );
}

export default App;
