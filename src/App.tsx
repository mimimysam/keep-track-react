import React from "react";
import ProjectsPage from "./projects/ProjectsPage";
import Hello from "./Hello";
import LoginForm from "./LoginForm";
import Word from "./Word";

function App() {
  return (
    <div className="container">
      {/* <ProjectsPage /> */}
      {/* <Hello name="Mimi" enthusiasmLevel={3}></Hello> */}
      <LoginForm />
      {/* <Word /> */}
    </div>
  );
}

export default App;
