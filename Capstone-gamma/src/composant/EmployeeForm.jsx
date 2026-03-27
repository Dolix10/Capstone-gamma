import React, { useState } from 'react'

export default function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [department, setDepartment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEmployee = {
      name: name.trim(),
      position: position.trim(),
      department: department.trim(),
      active: Math.random() < 0.5   // 🎲 aléatoire
    }

    onAddEmployee(newEmployee)

    // reset
    setName('')
    setPosition('')
    setDepartment('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Poste"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <input
        placeholder="Département"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button type="submit">Ajouter</button>
    </form>
  )
}