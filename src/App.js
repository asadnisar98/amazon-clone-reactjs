import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import { auth } from './components/firease';

function App() {

  const[{user}, dispatch] = useStateValue();

  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }

  }, [])

  console.log(user);

  return (
  <BrowserRouter>
    <div className="App">
      <Layout>
      <Routes>

        <Route path="/" element={<Home />} />
     

         
         <Route path="/checkout" element={<Checkout />} />

         <Route path="/login" element={<Login />} />
      
      </Routes>
      </Layout>
    </div>
  </BrowserRouter>
   

  );
}

export default App;
