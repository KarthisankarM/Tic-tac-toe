import './App.css';
import React, { useState } from 'react';
import _ from 'lodash';


function App() {

  const [currentValue, setCurrentValue] = useState('X');
  const [location, setLocation] = useState([null, null, null, null, null, null, null, null, null]);
  // const value = (event, index) => {
  //   if (value[index] === '') {
  //     event.target.location = currentValue;
  //   }
  // }
  const checkResult = (board) => {
    const winingIndices = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const winCondition = _.some(winingIndices, (position) => {
      // [0,1,2]
      // ['X', null,...]
      return board[position[0]] === board[position[1]] && board[position[0]] === board[position[2]] && board[position[0]] !== null
    })
    return winCondition;
  }


  const handleChange = (idx) => {
    if (location[idx] === null) {
      setLocation((array) => {
        const newArray = [...array];
        newArray[idx] = currentValue;
        if (currentValue === 'X') {
          setCurrentValue(currentValue => 'O');
        } else
          setCurrentValue(currentValue => 'X');
      }
      checkResult(newArray)

          //return answerValue;
      //console.log(answerValue);
    });
  }

  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="row">
            {_.map(location, (el, index) => {
              return (
                <div className="cell" key={index}>
                  <div className="cell-content" onClick={() => handleChange(index)}>
                    <h1>{el}</h1>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
      <h1>Current Player:{currentValue}</h1>

      {/* <h1>setLocation(location[0] => { _.map(arr, (el, idx) => (

<div onClick={e => handleChange(e, el)}>{el}</div>

   ) ) }</h1> */}
    </div>
  );
}
export default App;
