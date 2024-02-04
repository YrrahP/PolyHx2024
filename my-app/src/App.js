import './App.css';
import ButtonDonBox from "./Components/Button/donation_boxes";
import ButtonDonFood from "./Components/Button/food_donation";
import ButtonTrashCan from "./Components/Button/Trashcans";
import Header from "./Components/Header/header";

const App = () => {
  const [filterType, setFilterType] = useState(null);
    const ButtonClickDonBox = () => {
      setFilterType("clothesCan");
      // Vous pouvez appeler filterLocationsByDistanceAndType ici si nécessaire
      // Exemple: filterLocationsByDistanceAndType(userLat, userLon, locations, maxDistance, filterType);
    };
    const ButtonClickDonFood = () => {
      setFilterType("foodCan");
      // Vous pouvez appeler filterLocationsByDistanceAndType ici si nécessaire
      // Exemple: filterLocationsByDistanceAndType(userLat, userLon, locations, maxDistance, filterType);
    }
    const ButtonClickTrashCan = () => {
      setFilterType("trashCan");
      // Vous pouvez appeler filterLocationsByDistanceAndType ici si nécessaire
      // Exemple: filterLocationsByDistanceAndType(userLat, userLon, locations, maxDistance, filterType);
    }


  return (
    <div className="App">
      <Header />
      
      <div>
        <ButtonDonBox 
        text = "Boîte de dons"
        onClick = {ButtonClickDonBox}
        style={{ 
          top: '300px', 
          left: '300px' 
        }}/>
        <ButtonDonFood 
        text = "Boîte de dons"
        onClick = {ButtonClickDonFood}
        style={{ 
          top: '300px', 
          left: '600px' 
        }}/>
        <ButtonTrashCan 
        text = "Boîte de dons"
        onClick = {ButtonClickTrashCan}
        style={{ 
          top: '300px', 
          left: '900px' 
        }}/>


      </div>
    </div>
  );
}

export default App;
