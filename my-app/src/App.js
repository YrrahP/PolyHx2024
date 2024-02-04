import './App.css';
import ButtonDonBox from "./Components/Button/donation_boxes";
import Header from "./Components/Header/header";

const App = () => {
  return (
    <div className="App">
      <Header />
      
      
      
      
      
      
      
      
      
      
      
      
      <div>
        <ButtonDonBox 
        text = "Boîte de dons"
        style={{ 
          position: 'absolute', 
          top: '300px', 
          left: '300px' 
        }}/>
        <ButtonDonBox 
        text = "Boîte de dons"
        style={{ 
          position: 'absolute', 
          top: '300px', 
          left: '600px' 
        }}/>
        <ButtonDonBox 
        text = "Boîte de dons"
        style={{ 
          position: 'absolute', 
          top: '300px', 
          left: '900px' 
        }}/>


      </div>
    </div>
  );
}

export default App;
