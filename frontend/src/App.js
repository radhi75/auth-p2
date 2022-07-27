import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Alerterrors from "./Alerterrors";
import "./App.css";
import Login from "./Login";
import Navigation from "./Navigation";
import { get_current } from "./redux/Action/authAction";
import Register from "./Register";
import UserProfile from "./UserProfile";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Alerterrors />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
