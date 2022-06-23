import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Indonesiapage from "./pages/covid/Indonesiapage";
import Provinsipage from "./pages/covid/Provinsipage";
import Layout from "./Layout";

function App() {
  return (

       <div>
            <Layout>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/covid/Indonesiapage" element={<Indonesiapage/>} />
                <Route path="/covid/Provinsipage" element={<Provinsipage/>} />
            </Routes>
            </Layout>
           
       </div>

  );
}

export default App;
