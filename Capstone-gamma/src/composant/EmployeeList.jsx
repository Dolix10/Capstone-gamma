import React from 'react'
import EmployeeCard from './EmployeeCard'

export default function EmployeeList({ employees }) {
  if (employees.length === 0) {
    return <p>Aucun employé</p>
  }

  return (
    <div>
      {employees.map((emp, index) => (
        <EmployeeCard key={index} employee={emp} />
      ))}
    </div>
  )
}