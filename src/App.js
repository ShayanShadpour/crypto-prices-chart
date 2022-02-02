import React from 'react';
import './App.scss';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from "./actions/ethereumActions"


function App() {

  const dispatch = useDispatch();
  const state = useSelector(state =>state.ethereum);
  const [num, setNum] = useState(15);

  

  const fetchData = (time) => {
    dispatch(getData({
      time: time,
      number: num
    }));
  }


  return (
    <div className="App">

      <div className="Title">
        <h1>Ethereum(ETH) Historical Price Chart</h1>
      </div>

      <div className={"btns-wrapper"}>
        <button onClick={() => fetchData("1min")}>1 Min</button>
        <button onClick={() => fetchData("5min")}>5 Min</button>
        <button onClick={() => fetchData("15min")}>15 Min</button>

        <input placeholder="Desired number of datapoints (default 15)" onChange={e => setNum(e.target.value)}/>

        {state.loading && <p>Loading...</p>}
        {state.message && <p>Error retrieving data from API</p>}
      </div>

      <div className="chart-wrapper">
      <Line 
        data = {state.data}
        redraw
      />
      </div>
    </div>
  );
}

export default App;
