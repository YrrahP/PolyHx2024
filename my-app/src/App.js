import './App.css';
import ButtonDonBox from "./Components/Button/donation_boxes";
import Header from "./Components/Header/header";
import grid from "./Components/LocationGrid/grid";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ButtonDonBox />
      <LocationGrid locations={/*emplacements filtrées*/} />

    </div>
  );
}

export default App;
