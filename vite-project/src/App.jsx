import React, { useState, useEffect } from "react";
import axios from "axios";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import Filter from "./components/Filter";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Fetch students from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // Add a student to the backend and update the list
  const addStudent = async (student) => {
    try {
      const response = await axios.post("http://localhost:5000/api/students", student);
      setStudents((prevStudents) => [...prevStudents, response.data]);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  // Delete a student from the backend and update the list
  const deleteStudent = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/students/${id}`);
      if (response.status === 200) {
        setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Filter students based on fee status
  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "All") return true;
    return student.feeStatus === filter;
  });

  // Simple authentication (hardcoded)
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="app-container">
      {!isAuthenticated ? (
        <div className="login-container">
          <h1 className="mainhead">Admin Login</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      ) : (
        <div className="container">
          <h1 className="mainhead">FeeTracker</h1>
          {/* Dashboard showing insights about students */}
          <Dashboard students={students} />
          {/* AddStudent allows adding new students */}
          <AddStudent addStudent={addStudent} />
          {/* Filter allows filtering students by fee status */}
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
          {/* StudentList to display the filtered students */}
          <StudentList students={filteredStudents} deleteStudent={deleteStudent} />
        </div>
      )}
    </div>
  );
};

export default App;
