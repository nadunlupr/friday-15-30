import logo from './logo.svg';
import './App.css';
import React from 'react';
import TabContainer from './components/tab-navigator/TabContainer';
import { Outlet } from 'react-router';


class App extends React.Component {

  render() {
    return (
      <TabContainer >
        <h1>Page Content</h1>
        <Outlet />
      </TabContainer>
    );
  }
}

export default App;