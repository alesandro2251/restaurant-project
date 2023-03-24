import "./App.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./page/home-page";
import Navigation from '../../frontend/src/components/navigations/navigation'
import AdminPage from "./page/admin-page";

function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Navigation/>} exact>
      <Route index element = {<HomePage/>}/>
      <Route path="/admin-user-info-reservation" element={<AdminPage/>}/>
    </Route>
    </Routes>
    </div>
  );
}

export default App;
