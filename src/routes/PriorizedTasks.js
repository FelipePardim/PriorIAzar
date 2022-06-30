import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './index.css';

const baseURL = "https://localhost:3500";

export default function PriorizedTasks() {

  const [DNA, setDNA] = useState('');

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDNA(response.data);
      console.log(DNA);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Esse é o resultado obitido pela IA:
        </p>
        <table>
          <thead>Resultados Obtidos
          <tbody>
            <tr>DNA:
              <td>MOCK1</td>
              <td>{DNA}</td>
            </tr>
            <tr>Fitness:
              <td>MOCK1</td>
            </tr>
            <tr>Generation:
              <td>MOCK1</td>
            </tr>
            <tr>Found-in:
              <td>MOCK1</td>
            </tr>
          </tbody>
          </thead>
        </table>
      </header>
    </div>
  )
}
