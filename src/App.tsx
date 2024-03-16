import React from "react";
import ProjectsPage from "./projects/ProjectsPage";
import Hello from "./Hello";

function App() {
  return (
    <div className="container">
      {/* <ProjectsPage /> */}
      <Hello name="Mimi" enthusiasmLevel={3}></Hello>
    </div>
  );
}

export default App;
