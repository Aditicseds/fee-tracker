import React from 'react';

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="student-list">
      <h2 className='list'>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Fee Status</th>
            
            <th>Paid Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.phone}</td>
              <td>{student.feeStatus}</td>
              {/* Format to 2 decimal places */}
              <td>${student.paidFee.toFixed(2)}</td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
