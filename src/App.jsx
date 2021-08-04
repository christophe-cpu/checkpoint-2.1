import { BrowserRouter as Router,swicht,Route } from 'react-router-dom';
import HeroList from './pages/HeroList';
import HeroDetails  from './components/Herodetails';
import './App.css';


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={HeroList />
                    <Route path='/:id' component={'HeroDetails'} />
                </Switch>
            </Router>
        </div>
    );
}

export default App
