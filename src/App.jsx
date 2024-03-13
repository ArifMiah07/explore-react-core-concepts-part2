import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('btn clicked');
  }
  const handleClick2 = ()=>{
    alert('btn2 clicked');
  }
  const addToFive =(num)=>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third btn clicked')}}>Third</button>
      <button onClick={()=>{addToFive(3)}}>Four</button>
    </>
  )
}

export default App
