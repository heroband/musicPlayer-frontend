import React, { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { SideBar } from "components";

function App() {
  

  return (
    <div className="container">
      <SideBar/>
      <div className="content">
        {/* Сюда будет подставляться содержимое правого блока */}
      </div>
    </div>
  );
}

export default App;
