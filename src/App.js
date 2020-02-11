import React, {useState} from 'react';

function App() {

  let [total, setTotal] = useState(0)
  let [add, setAdd] = useState(0)
  
  return (
    <div className="App">
      <form>
        <input value={total}/>
        <br/>
        <input type='button' value='1' onClick={() => setTotal([total + 1])}/>
        <input type='button' value='2' onClick={() => setTotal([total + 2])}/>
        <input type='button' value='3' onClick={() => setTotal([total + 3])}/>
        <input type="button" value='-' onClick={() => {setAdd((add * -2 / 2) - total); setTotal(0);}}/>
        <br/>
        <input type='button' value='4' onClick={() => setTotal([total + 4])}/>
        <input type='button' value='5' onClick={() => setTotal([total + 5])}/>
        <input type='button' value='6' onClick={() => setTotal([total + 6])}/>
        <input type="button" value='+' onClick={() => {setAdd(add + (add =+ total)); setTotal(0);}}/>
        <br/>
        <input type='button' value='7' onClick={() => setTotal([total + 7])}/>
        <input type='button' value='8' onClick={() => setTotal([total + 8])}/>
        <input type='button' value='9' onClick={() => setTotal([total + 9])}/>
        <input type="button" value='=' onClick={() => {setTotal(total + (total =+ total)); setTotal(0);}}/>
        <br/>
        Total: {add}
      </form>
    </div>
  );
}

export default App;
