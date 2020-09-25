import React, { useState, useEffect } from 'react';
import './App.css';
import TopBanner from './components/TopBanner/index';
import SearchCol from './components/SearchCol/index';
import EmployeeList from './components/EmployeeList/index';
import { Container } from "react-bootstrap"
import api from "./utils/api"



function App() {
  const [employees, setEmployees] = useState({
    list: [],
    originalList: [],
    search: ""
  })

  useEffect(() => {
    api.getRandomPeople()
      .then(response => {
        setEmployees({
          ...employees,
          list: response.data.results,
          originalList: response.data.results
        })
      })
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target

    setEmployees({
      ...employees,
      [name]: value //still not sure of why we need to use [] 
    })

    console.log(value)
    console.log([name])
    const newEmployees = employees.originalList.filter(person => {
      return person.name.first.toLowerCase().includes(value.toLowerCase())
    })

    setEmployees({
      ...employees,
      list: newEmployees
    })
  }

  const handleSubmitClick = e => {

    const sortOption = e.target.getAttribute("sort")
    console.log(sortOption)

    if (sortOption === "first") {
      const newEmployees = employees.list.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first)
      })
  
      setEmployees({
        ...employees,
        list: newEmployees
      })
    }
    else if (sortOption === "last") {
      const newEmployees = employees.list.sort((a, b) => {
        return a.name.last.localeCompare(b.name.last)
      })
  
      setEmployees({
        ...employees,
        list: newEmployees
      })
    }
  }

  return (
    <div><TopBanner />
    <Container>
      <br />
      {console.log(employees.list)}
      <SearchCol handleInputChange={handleInputChange} search={employees.search} /> <br />
      <EmployeeList employees={employees.list} handleSubmitClick={handleSubmitClick} />
    </Container>
    </div>
  )
}

export default App;
