import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import { SidebarData } from './SidebarData'


function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                
                    <Link to={val.link}><li 
                        key={key}
                        className="row" 
                        id={window.location.pathname == val.link ? "active" : ""}
                    >
                        <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
                    </li>
                    </Link>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar