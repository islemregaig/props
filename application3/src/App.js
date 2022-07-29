import './App.css';
import Component from './Profile/Component';
import image from './Profile/img1.jpg';

function App() {
  const handleName = (fullName) => {
    alert(fullName);
    // console.log("the user:",fullName)
  };
  
  return (
    <div className="App">
    
    <div className="comp">
    <img alt="#" className='img' src={image} /> <br/>
      <Component fullName="Islem REGAIG" handleName={handleName}  bio="I am a freshly graduated electrical engineer, looking for a job opportunity to start my professional career, with excellent ability to carry out several tasks. I am interested in the field of embedded development 
       
      "profession="Web developer"> <br/>
      </Component>
      </div>
    </div>
    
  );
}



export default App;