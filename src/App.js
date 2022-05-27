
import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

function App() {

  useEffect(() => {
  alanBtn({
      key: 'b787c05298627fcc8f655a3d024d77072e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
  });
}, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
