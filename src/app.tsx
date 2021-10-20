import React from 'react';
import LogoText from './components/logo-text/logo-text';
import Main from './features/main';
import background from '../src/assets/images/background.png'

const App = () => {
  return (
    <>
    <div style={{'backgroundImage': `url(${background})`, 'backgroundSize' : 'cover'}}>
      <LogoText/>
      <Main/>
      </div>
      </>
  );
};

export default App;

