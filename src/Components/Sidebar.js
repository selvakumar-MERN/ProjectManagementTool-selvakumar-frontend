import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
    return (
        <div style={{display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#181f38">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Tool
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/inbox" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bell">Inbox</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/projects" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Project</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/to-do-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">My to-do </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/task" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Task</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/team" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Team</CDBSidebarMenuItem>
            </NavLink>

            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    );
}

export default Sidebar;