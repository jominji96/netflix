import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./component/MainLayout";
import Main from "./component/Main";
import Login from "./component/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;