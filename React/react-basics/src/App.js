import './App.css';
import Animal from './Components/Animal';

function App() {
  let a=true;//it will not be shown on browser
  let b=null;//it will not be shown on browser
  let c=undefined;//it will not be shown on browser will not possible to show
  let arr=[1,2,3,4];//will be op as 1234
  let obj={k:9,
  k1:56,}

  for (const [key, value] of Object.entries(obj)) {     //separate key and values of a object
    console.log(`${key}: ${value}`);
  }


  //use JSON.stringify to show it but undefined will not be visible after that also
  return (
    <div >
      {/* <h1>hello {JSON.stringify(a)} {JSON.stringify(b)}{JSON.stringify(c)}</h1> */}
      {/* {arr} */}
      {JSON.stringify(obj)}
      {/* <Animal/> */}
    </div>
  );
}

export default App;
