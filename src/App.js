import {Routes, Route} from "react-router-dom";
import Test from "./pages/Test";
import Editor from "./pages/CodeEditorPage";

function App() {
  return (
    <Routes >
      <Route path="/test" element={ <Test /> } />
      <Route path="/editor" element={ <Editor /> } />
    </Routes>
  );
}

export default App;