import Navbar from "./components/Navbar";
import "../src/pages/app.css"
import axios from 'axios';

import Login from "./pages/Login";
import Home from "./pages/Home";
import {BrowserRouter, Routes,Route,Navigate} from "react-router-dom"
import Post from "./pages/Post";
import { useEffect ,useState} from "react";

function App() {
   const [user,setUser] = useState(null);

   useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/login/success', {
          withCredentials: true,
        });

        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          throw new Error('Authentication failed');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);
  return (
    <BrowserRouter>
<div>
      <Navbar user= {user}/>
      <Routes>
        <Route path ='/'  element={<Home/>}/>
        <Route path ='/login'  element={user ?<Navigate to="/"/> :<Login/>}/>
        <Route path ='/post/:id'  element={user ?<Post/>: <Navigate to ="/login"/>}/>
      </Routes>

</div>
    </BrowserRouter>

  );
}

export default App;
