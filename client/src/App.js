import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/navbar"
import ExercisesList from "./components/ExercisesList/exerciseslist";
import EditExercise from "./components/EditExercise/editexercise";
import CreateExercise from "./components/CreateExercise/createexercise";
import CreateUser from "./components/CreateUser/createuser";
import { BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
      <Router>
   <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
