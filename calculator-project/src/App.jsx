import { useState } from "react"


function App() {
  const [input, setInput] = useState("")

  const handleInput = (value) =>{
      setInput(input + value)
  }

 const calculateResult = () =>{
  try{
    setInput(eval(input).toString())
  }
  catch{
    setInput("Error")
  }
 }

 const clearInput = () => {
  setInput("")
 }
  return (
    <div className="calculator">
      <div className="display">{input || "0"} </div>
        <div className="buttons">
            <button onClick={()=> handleInput("7")}>7</button>
            <button onClick={()=>handleInput("8")}>8</button>
            <button onClick={() => handleInput("9")}>9</button>
            <button onClick={() => handleInput("/")}>/</button>
            <button onClick={() => handleInput("4")}>4</button>
            <button onClick={() => handleInput("5")}>5</button>
            <button onClick={() => handleInput("6")}>6</button>
            <button onClick={() => handleInput("*")}>*</button>
            <button onClick={() => handleInput("1")}>1</button>
            <button onClick={() => handleInput("2")}>2</button>
            <button onClick={() => handleInput("3")}>3</button>
            <button onClick={() => handleInput("-")}>-</button>
            <button onClick={() => handleInput("0")}>0</button>
            <button onClick={() => handleInput(".")}>.</button>
            <button onClick={calculateResult}>=</button>
            <button onClick={() => handleInput("+")}>+</button>
            <button onClick={clearInput} className="clear">
          C
        </button>

        </div>
    </div>
  )
}

export default App