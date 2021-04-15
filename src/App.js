import './App.css';
import img from './proj3.jpg'; 

function App() {
  return (
<div style={{border:'solid1pxblack',maxWidth:'100wv'}}>
  <h1 className='titlered'> Your name here </h1>
   <br></br>
  <img  className= 'img1'src={img} alt="image2"/>
   <br></br>
   <img className='img2' src ={img} alt="img"/>
<video className='vid' width="320" height="240" controls>
 <source src="myVideo.mp4" type="video/mp4"/> <br></br>
  </video>
  </div> 
  );
}
export default App;