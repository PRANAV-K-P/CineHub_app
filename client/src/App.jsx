import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserRoutes from "./Routes/UserRoutes";
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<UserRoutes />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
