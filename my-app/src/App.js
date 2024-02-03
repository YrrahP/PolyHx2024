import logo from './logo.svg';
import './App.css';
import './Components/Map.css'

function App() {
  return (
    <div className="App">
      <h1>Test MAP</h1>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19626.777261253017!2d-73.6227391746846!3d45.50091505723996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919f2a9fc4d71%3A0xda267ca95684133e!2sPolytechnique%20Montr%C3%A9al!5e0!3m2!1sfr!2sca!4v1706998070080!5m2!1sfr!2sca"
      width="600" 
      height="450" 
      allowfullscreen="" 
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="myMap">
      </iframe>
      </div>
    </div>
  );
}

export default App;
