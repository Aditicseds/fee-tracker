import React, { useState } from 'react';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [feeStatus, setFeeStatus] = useState('Unpaid');
  const [totalFee, setTotalFee] = useState('');
  const [paidFee, setPaidFee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
    let feeStatus = 'Unpaid';
    const totalFeeValue = parseFloat(totalFee);
    const paidFeeValue = parseFloat(paidFee);

    if (paidFeeValue > 0 && paidFeeValue < totalFeeValue) {
      feeStatus = 'Partially Paid';
    } else if (paidFeeValue === totalFeeValue) {
      feeStatus = 'Fully Paid';
    }

    const newStudent = {
      id: Math.random(), // Simple ID generation for demonstration
      name,
      course,
      age,
      email,
      phone,
      feeStatus,
      totalFee: parseFloat(totalFee),
      paidFee: parseFloat(paidFee),
    };

    addStudent(newStudent);

    // Reset form fields
    setName('');
    setCourse('');
    setAge('');
    setEmail('');
    setPhone('');
    setFeeStatus('Unpaid');
    setTotalFee('');
    setPaidFee('');
  };

  return (
    <div className="add-student">
      <h2>Add Student Record</h2>
      <form onSubmit={handleSubmit}>
       <div className='field'>
       <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
       </div>
     <div className='field'>
     <label>Course:</label>
        <input 
          type="text" 
          value={course} 
          onChange={(e) => setCourse(e.target.value)} 
          required 
        />
     </div>
        <div className='field'>
        <label>Age:</label>
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          required
        />
        </div>
       <div className='field'>
       <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
       </div>
     <div className='field'>
     <label>Phone:</label>
        <input 
          type="text" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required
        />
     </div>
        {/* <label>Fee Status:</label>
        <select 
          value={feeStatus} 
          onChange={(e) => setFeeStatus(e.target.value)} 
          required
        >
          <option value="Unpaid">Unpaid</option>
          <option value="Partially Paid">Partially Paid</option>
          <option value="Fully Paid">Fully Paid</option>
        </select> */}
        <div className='field'>
        <label>Total Fee:</label>
        <input 
          type="number" 
          value={totalFee} 
          onChange={(e) => setTotalFee(e.target.value)} 
          required
        />
        </div>
   <div className='field'>
   <label>Paid Fee:</label>
        <input 
          type="number" 
          value={paidFee} 
          onChange={(e) => setPaidFee(e.target.value)} 
          required
        /></div>  
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
