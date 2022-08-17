import * as React from 'react';
import { ThemeContext } from '../../hooks/ThemeContext';
import "./../../assets/styles/style.scss";

const App: React.FC = () => {
    const theme = React.useContext(ThemeContext);

    if(theme.layout === 'default'){
      return (
        <div className='container'>
        
        <footer>
          <p>Created by <a href="https://chirantonmoy.vercel.app/">chiranSWE</a> - devChallenges.io</p>
        </footer>
        </div>
      );
    }
    
    if(theme.layout === 'extended'){
      return (
        <div className='container'>
        
        <footer>
          <p>Created by <a href="https://chirantonmoy.vercel.app/">chiranSWE</a> - devChallenges.io</p>
        </footer>
        </div>
      );
    }

    return null;
};

export default App;  