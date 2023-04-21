import * as math from 'mathjs'
import './App.css';
import React from 'react';
import Button from './component/Button';
import Input from './component/Input'

function App() {
const [input , setInput] = React.useState(" ")
const[result , setResult] = React.useState(" ")

function addtoInput (symbol) {
  setInput((input) => {
    return [...input , symbol  +  ""]
  })
}

function clear() {
  setInput("")
  setResult("")
}

function calculateResult () {
  const inputs = input.join("")
  setResult(math.evaluate(inputs))
}

const buttonColor = "#f2a33c";
return(
<div className="app">
  <div className="calc-wrap">
  <div className="input-wrap">
  <Input  input = {input} result ={result}/>
  </div>
  <div className="row">
   <Button  symbol = "7" toogle = {addtoInput}/>
   <Button  symbol = "8" toogle = {addtoInput}/>
   <Button  symbol = "9" toogle = {addtoInput}/>
   <Button  symbol = "/" color = {buttonColor} toogle = {addtoInput}/>
  </div>
  <div className="row">
   <Button  symbol = "4" toogle = {addtoInput}/>
   <Button  symbol = "5" toogle = {addtoInput}/>
   <Button  symbol = "6" toogle = {addtoInput}/>
   <Button  symbol = "*" color = {buttonColor} toogle = {addtoInput}/>
  </div>
  <div className="row">
   <Button  symbol = "1" toogle = {addtoInput} />
   <Button  symbol = "2" toogle = {addtoInput}/>
   <Button  symbol = "3" toogle = {addtoInput}/>
   <Button  symbol = "+" color = {buttonColor}  toogle = {addtoInput}/>
  </div>
  <div className="row">
   <Button  symbol = "0" toogle = {addtoInput}/>
   <Button  symbol = "." toogle = {addtoInput}/>
   <Button  symbol = "=" toogle = {calculateResult}/>
   <Button  symbol = "-" color = {buttonColor} toogle = {addtoInput}/>
  </div>
 
  {/* <Button  symbol= "Clear"  color = "red" toogle={clear}/> */}
  <button className='clear-btn' onClick={clear}><h1 className='clear-h1'>Clear</h1></button>

  </div>
</div>
)
}

export default App;
