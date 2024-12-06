import logo from './logo.svg';
import './App.css';
import DataDisplay from './components/DataDisplay';
import MyFile from './components/MyFile';


function App() {
  return (
    <div className="App">
      <img src={logo}></img>
      <MyFile/>
      {/* <DataDisplay/> */}
    </div>
  );
}

export default App;
