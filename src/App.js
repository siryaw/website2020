import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '900px', position: 'relative'}}>
    <Layout>
        <Header className="header-color" transparent title="Menu" style={{color: 'white'}}>
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main/>

        </Content>
    </Layout>
    </div>
  );
}

export default App;
