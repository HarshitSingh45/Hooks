import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Home";
import Name from "./Name";
import UseCallback from "./UseCallback";
import UseEffectHook from "./UseEffectHook";
import UseMemoHook from "./UseMemoHook"
import UseRefHook from "./UseRefHook";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/memo" element={<UseMemoHook/>} />
          <Route path="/effect" element={<UseEffectHook/>} />
          <Route path="/call" element={<UseCallback/>} />
          <Route path="/ref" element={<UseRefHook/>} />
          <Route path="/hoc" element={<Name/>} />
        </Routes>
      </Router>
      {/* <UseMemoHook /> */}
    </>
  )
  
}

export default App;
