import React from "react";
import LoginPage from "./Page1/LoginPage";
import MainPage  from './Page2/MainPage';
import HistoryPage from'./Page3/HistoryPage';
import StateProvider from './StateProvider';
import { Switch, Route} from 'react-router';
import {BrowserRouter} from "react-browser-router" ;

function App() {



return (
<BrowserRouter>

<StateProvider>

<Switch>
<Route exact path='/' component={LoginPage} />
<Route exact path='/MainPage' component={MainPage} />
<Route exact path='/History' component={HistoryPage} />
</Switch>

</StateProvider>

</BrowserRouter>
  );
}

export default App;
