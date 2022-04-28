import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './componentes/Header/Header';
import Navigation from './componentes/Navigation/Navigation';
import Main from './componentes/Main/Main';
import SubContents from './componentes/SubContents/SubContents';
import Advertisment from './componentes/Advertisment/Advertisment';

class App extends React.Component {
  render()
  {
    return (
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div className="content">
          <div className='navigation'>
            <Navigation></Navigation>
          </div>
          <div className='main'>
              <Main></Main>
              <div className='subcontent'>
              <div className='sub'>
                <SubContents></SubContents>
              </div>
              <div className='sub'>
                <SubContents></SubContents>
              </div>
              <div className='sub'>
                <SubContents></SubContents>
              </div>
              </div>

              <div className='ad'>
                <Advertisment></Advertisment>
              </div>

          </div>
        </div>

      </div>
    );
  }

}

export default App;
