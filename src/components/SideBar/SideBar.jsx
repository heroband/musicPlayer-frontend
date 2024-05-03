import { useState } from "react";
import { playlists, heart } from "assets";

const SideBar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className={`sidebar ${sidebarExpanded ? "expanded" : ""}`}>
      <button className="sidebarExpansion" onClick={toggleSidebar}>
        {sidebarExpanded ? "<" : ">"}
      </button>
      <div className="sidebarContainer">
        <p className="sidebarTopic">
          <b>Library</b>
        </p>
        <div className="sidebarItems">
          <a href="#" className="sidebarItem">
            <img src={playlists} />
            {sidebarExpanded ? <span>Playlists</span> : ""}
          </a>
          <a href="#" className="sidebarItem">
            <img src={heart} />
            {sidebarExpanded ? <span>Like</span> : ""}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
