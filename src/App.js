import LoginForm from "./pages/login";
import SignForm from "./pages/signup";
import DashBoard from "./pages/dashboard";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDes from "./components/productdes";
import LoginAdmin from "./pages/loginadmin";
import DashBoardAdmin from "./pages/dashboardadmin";
import EditModal from "./components/editModal";
import ShoppingCart from "./components/shoppingcart";
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<DashBoard/>}></Route>
      <Route path='/signup' element={<SignForm/>}></Route>
      <Route path='/login' element={<LoginForm/>}></Route>
      <Route path='/loginadmin' element={<LoginAdmin/>}></Route>
      <Route path='/dashboardadmin' element={<DashBoardAdmin/>}></Route>
      <Route path='/productdes' element={<ProductDes/>}></Route>
      <Route path='/shoppingcart' element={<ShoppingCart/>}></Route>
      <Route path='/editmodal' element={<EditModal/>}></Route>
      </Routes>
  </>
  );
}

export default App;
