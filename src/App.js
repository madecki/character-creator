import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="light-bar" style={{
        background: 'hsl(195deg, 20%, 86%)',
        position: 'fixed',
        bottom: '0',
        height: '40%',
        width: '100%'
      }}/>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
