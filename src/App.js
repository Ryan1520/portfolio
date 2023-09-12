import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  useHistory
} from "react-router-dom";
import {Link} from 'react-scroll'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Post from './pages/Post';

function App() {
  // https://medium.com/@nasir/reset-scroll-position-on-change-of-routes-react-a0bd23093dfe
  const history = useHistory()
  history.listen((location, action) => {
      window.scrollTo(0, 0)
  })

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>  
      
        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/blog'>
          <Blog />
        </Route>

        <Route path='/post/:id'>
          <Post />
        </Route>

        <Route path='/sideprojects/:cat'>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
