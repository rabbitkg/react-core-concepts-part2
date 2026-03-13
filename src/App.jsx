import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users';
import './App.css'


function App() {

  function handleClick(){
    alert('I am clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

          <h3>Vite + React</h3>

          <Users></Users>
          
          <Batsman></Batsman>

          <Counter></Counter>
          


          {/* <button onClick="handleClick()">Click Me</button> */}

          <button onClick={handleClick}>Click Me</button>
          <br />
          <button onClick={function handleeClick2(){
            alert('Clicked 2')
          }}>Click Me</button>
          <br />
          <button onClick={handleClick3}>Click Me 3</button>
          <br />
          <button onClick={() => alert('click 4')}
            >Click Me 4</button>
            <br />
            <button onClick={() => handleAdd5(10)}>Click Add 5</button>
          
    </>
  )
}

export default App
