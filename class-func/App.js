import logo from './logo.svg';
import './App.css';
import {Circle,Triangle,Square,Squareper,Rombus} from './Function.js';
import {Circle1,Triangle1,Square1,Squareper1,Rombus1} from './Class1.js';

function App() {
  return (
    <div className="App">
      <div class="fun">
      <h1>FUNCTION</h1>
       <h1>Area of Circle</h1> 
      <h1><Circle /></h1>
      <h1>Area of Triangle
      </h1>
<h1><Triangle /></h1>
<h1>Area of Square</h1>
<h1><Square /></h1>
<h1>Perimeter of Square</h1>
<h1> <Squareper /></h1>
 <h1>Area of Rombus</h1>
<h1> <Rombus /> </h1>
 </div>
 <div class="cls">
  <h1>CLASS</h1>
<h1>Area of Circle</h1>
<h1><Circle1 /></h1>
      <h1>Area of Triangle
      </h1>
<h1><Triangle1 /></h1>
<h1>Area of Square</h1>
<h1><Square1 /></h1>
<h1>Perimeter of Square</h1>
<h1> <Squareper1 /></h1>
 <h1>Area of Rombus</h1>
 <h1> <Rombus1 /></h1>
</div>


    </div>
  );
}

export default App;
