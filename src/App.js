import LoginForm from "./pages/login";
import SignForm from "./pages/signup";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginForm/>}></Route>
      <Route path='/signup' element={<SignForm/>}></Route>
    </Routes>
  </>
  );
}

export default App;
