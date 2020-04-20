import React, { useState } from 'react';
import './App.css';
// import SignUp from './features/auth/SignUp';
import SignIn from './features/auth/SignIn';
import CustomersManager from './features/Customers/CustomersManager';

function App() {
  const [appState, setAppState] = useState({ User: {} });
  const [mode, setMode] = useState(0);

  const handleOnSignedIn = (fbUser) => {
    if (fbUser) {
      setAppState(s => s = { ...appState, User: fbUser });
      setMode(1);
    }
  }


  return (
    <div className="App">
      {
        (mode === 0) ? <SignIn onSignedIn={handleOnSignedIn} /> : <CustomersManager fbUser={appState.User}/>
      }
    </div>
  );
}

export default App;
