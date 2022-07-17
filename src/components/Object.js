import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

export default function Object() {

  const { objectId } = useParams();
  const [todos, setTodos] = useState([]);



  const peticionGet = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/todos/${objectId}`)
      .then(response => {
        setTodos(response.data);

      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    peticionGet();
  }, []);

  {
    return (

      <div className="App">


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
              <tr key={todos.id}>
                <td>{todos.userId}</td>
                <td>{todos.id}</td>
                <td>{todos.title}</td>
                <td>{todos.completed ? '✔' : '❌'}</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

    )
  }
}


