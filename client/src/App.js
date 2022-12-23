import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./component/Favorite";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Register from "./component/Register";
import TecherList from "./component/TecherList";
function App() {
  return (
    <>
<BrowserRouter>
{/* <Login/> */}
<Routes>
  <Route path="/" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/techer" element={<TecherList/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/favorite" element={<Favorite/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
