import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from "./modal";
import { Link } from 'react-router-dom';

export default (props) => (
  <Popup
    trigger={<button className="button"> {props.buttonName} </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {props.title} </div>
        <div className="content">
          {' '}
          <br />
          {props.description}
          <br />
          <input
            type="number"
            placeholder={props.placeholder}
          // value={value}
          // onChange={handleChange}
          />
        </div>
        <div className="actions">
          <div>
            {props.nextModalTitle === "Tarefas priorizadas" ? (
              <a href='/priorizedtasks'>
                <button onClick={() => {
                  console.log('1');
                }}>
                  Próximo
                </button>
              </a>
            ) : (
              <Modal
                title={props.nextModalTitle}
                description={props.nextModalDescription}
                placeholder={props.nextModalPlaceholder}
                buttonName={"Próximo"}
                nextModalTitle={"Tarefas priorizadas"}
              />
            )}
          </div>
        </div>
      </div>
    )}
  </Popup>
);