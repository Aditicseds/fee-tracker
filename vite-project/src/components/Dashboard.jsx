// src/components/Dashboard.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Dashboard = ({ students }) => {
  // Calculate fee collection insights
  const totalStudents = students.length;
  const fullyPaid = students.filter(student => student.feeStatus === 'Fully Paid').length;
  const partiallyPaid = students.filter(student => student.feeStatus === 'Partially Paid').length;
  const unpaid = students.filter(student => student.feeStatus === 'Unpaid').length;

  // Calculate the total fee amounts
  const totalFeeAmount = students.reduce((total, student) => total + student.totalFee, 0);
  const totalPaidAmount = students.reduce((total, student) => total + student.paidFee, 0);

  // Pie chart data
  const pieData = [
    { name: 'Fully Paid', value: fullyPaid },
    { name: 'Partially Paid', value: partiallyPaid },
    { name: 'Unpaid', value: unpaid }
  ];

  return (
    <div className="dashboard">
      <h2 className='dashhead'>Fee Collection Overview</h2>
      
      {/* Fee Collection Insights */}
      <div className='dash'>
      <div className="dashboard-stats">
        <div className="stat-item">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>
        <div className="stat-item">
          <h3>Fully Paid</h3>
          <p>{fullyPaid}</p>
        </div>
        <div className="stat-item">
          <h3>Partially Paid</h3>
          <p>{partiallyPaid}</p>
        </div>
        <div className="stat-item">
          <h3>Unpaid</h3>
          <p>{unpaid}</p>
        </div>
        <div className="stat-item">
          <h3>Total Fee Amount</h3>
          <p>${totalFeeAmount}</p>
        </div>
        <div className="stat-item">
          <h3>Total Paid Amount</h3>
          <p>${totalPaidAmount}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="pie-chart">
        <h3>Fee Status Distribution</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={['#00C49F', '#FFBB28', '#FF8042'][index % 3]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
