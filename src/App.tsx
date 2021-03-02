
import './App.css';


//import components
import { Header} from './Components/Header';
import {Balance} from './Components/Balance';
//import {TranscationHistory} from './components/TranscationHistory'
//import { AddTranscation } from './components/AddTranscation';
import { AccountSummary} from './Components/AccountSummary';
import { TranscationHistory } from './Components/TranscationHistory';
import { AddTranscation } from './Components/AddTranscation';
import { GlobalProvider } from './Context/GlobalState';




function App() {

  
  return (
    <GlobalProvider>
    <div className="App">
       Testing Code from github
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TranscationHistory /> 
        <AddTranscation/>
      </div>    
    </div>
  </GlobalProvider>
  );
}

export default App;
