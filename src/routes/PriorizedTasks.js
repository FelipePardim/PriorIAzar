
import React, { useEffect, useState } from 'react'
import api from '../service/api';

import './index.css';

export default function PriorizedTasks() {

  const [DNA, setDNA] = useState('');

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setDNA(response.data)})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
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
              <td>{DNA.Dna}</td>
            </tr>
            <tr>Fitness:
              <td>{DNA.Fitness}</td>
            </tr>
            <tr>Generation:
              <td>{DNA.Generation}</td>
            </tr>
            <tr>Found-in:
              <td>{DNA.Found_in}</td>
            </tr>
          </tbody>
          </thead>
        </table>
      </header>
    </div>
  )
}
