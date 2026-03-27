import React, { useState } from 'react'
import EmployeeList from './composant/EmployeeList'
import EmployeeForm from './composant/EmployeeForm'

export default function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Jean Dupont",
      position: "Développeur",
      department: "IT",
      active: true
    }
  ])

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee])
  }

  return (
    <div>
      <h1>Gestion des employés</h1>

      <EmployeeForm onAddEmployee={addEmployee} />

      <EmployeeList employees={employees} />
    </div>
  )
}