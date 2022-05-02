import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    async function getAllStudentData() {
      try {
        const students = await axios.get("http://localhost:3000/api/student")
        console.log(students.data)
        setStudents(students.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudentData()
  }, [])

  const deleteItem = (index) => {
    const updateItems = students.filter((ele) => {
      return index !== ele._id
    })
    setStudents(updateItems);
  }
  return (
    <div className="App">
      <h1>Connect React JS to Express JS</h1>
      <hr />
      {
        students.map((student, i) => {
          return (
            <center>
              
            <div className="col-10 col-md-4 mt-5">
              <div class="card p-2">
                <div class="d-flex align-items-center">
                  <div class="ml-3 w-100">
                  {student._id}
                    <h4 class="mb-0 mt-0 text-left text-black">Name : {student.name}</h4> <span class="text-left text-black">Age :{student.age}</span>
                    <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                      <div class="d-flex flex-column"><span class="articles">{student.email}</span></div>
                      <div class="d-flex flex-column"><span class="followers">{student.password}</span></div>
                      <button onClick={() => deleteItem(student._id)}>Delete</button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            </center>

          )
        })
      }
    </div>
  );
}

export default App;
