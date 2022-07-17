import '../App.css'
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Object from './Object';

function GetRenApi() {

  const [todos, setTodos] = useState([]);
  const [tablaTodos, setTablaTodos] = useState([]);
  const [busqueda, setBusqueda] = useState("");



  const peticionGet = async () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
      .then(response => {
        setTodos(response.data);
        console.log("carlo",response.data)

        setTablaTodos(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaTodos.filter((elemento) => {
      if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.userId.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setTodos(resultadosBusqueda);
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th >ID USUARIO</th>
              <th >ID</th>
              <th >TITULO</th>
              <th >¿COMPLETADO?</th>

            </tr>
          </thead>

          <tbody>
            {todos &&
              todos.map((todos) => (
                <tr key={todos.id}>
                  <td>{todos.userId}</td>
                  <td>
                    {/* <a href= {'https://jsonplaceholder.typicode.com/todos/' + todos.id}>{todos.id}</a> */}
                    <NavLink to={`/object/${todos.id}`}>{todos.id}</NavLink>
                  </td>
                  <td>{todos.title}</td>
                  <td>{todos.completed ? '✔' : '❌'}</td>
                </tr>

              ))
              }
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default GetRenApi;
