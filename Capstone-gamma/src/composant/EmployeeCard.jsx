import React from 'react'

export default function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
            <h4>Informations love</h4>
      <p><strong>Poste:</strong> {employee.position}</p>
      <p><strong>Département:</strong> {employee.department}</p>

      <p>
        <strong>Statut:</strong>{" "}
        <span className={employee.active ? "active" : "inactive"}>
          {employee.active ? "Actif" : "Inactif"}
        </span>
      </p>
    </div>
  )
}