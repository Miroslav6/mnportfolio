import './App.css';
import Header from './Header/Header';
import Welcome from "./Components/Welcome/Welcome";
import Body from './Body/Body'

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <div className="container entry-content cv-page">
        <Body /> 
      </div>
    </>
  );
}

export default App;
