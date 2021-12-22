import Editor from "./components/Editor/Editor";
import { Container } from "@chakra-ui/react";
import { Route, Routes, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    // <Container>
      // <Routes>
      //   <Route path="/" element={<Navigate to={`/code/${uuidv4()}`} />} />
      //   <Route to="/code/:codeId" element={<Editor />} />
      // </Routes>
    //  </Container>
    <Editor />
  );

}

export default App;
