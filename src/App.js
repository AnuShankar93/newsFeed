import { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import Landing from './pages/Landing/Landing';

function App() {

  useEffect(() => {
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/detail' component={Detail} />
        <Route path='/' component={Landing} />
      </Switch>
    </Router>

  );
}

export default App;
