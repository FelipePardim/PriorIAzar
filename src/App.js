import logo from './logo.svg';
import './App.css';
import 'reactjs-popup/dist/index.css';
import Modal from "./components/modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>
          Priorize as tarefas de desenvolvimento e manutenção do seu time.
        </h2>
        <form>
          Faça o upload do seu arquivo<br />
          <input
            type="file"
            // value={selectedFile}
            // onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <br />
          <button>
            Upload das tarefas
          </button>
        </form>
        <Modal
          title={"Tamanho do time"}
          description={"Qual é o tamanho do seu time?"}
          placeholder={"Ex: 12"}
          buttonName={"Próximo"}
          nextModalButtonName={"Próximo"}
          nextModalTitle={"Horas para a execução"}
          nextModalDescription={"Quantas horas serão disponibilizadas para o desenvolvimento?"}
          nextModalPlaceholder={"Ex: 5"}
        />
      </header>
    </div>
  );
}

export default App;