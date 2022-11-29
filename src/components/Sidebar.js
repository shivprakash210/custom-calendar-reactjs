import React from 'react';
import './sidebar.css'

function Sidebar(){
    return (
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <a
          href="#"
          className="list-group-item list-group-item-action py-2 ripple sidebar-heading"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>YOUR PATH</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-area fa-fw me-3"></i><span>Agenda</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-area fa-fw me-3"></i><span>Exercises</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-lock fa-fw me-3"></i><span>Materials</span></a
        >
        <a
          href="#"
          className="list-group-item list-group-item-action py-2 ripple sidebar-heading"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>YOUR PROFILE</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-line fa-fw me-3"></i><span>Personal Information</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-pie fa-fw me-3"></i><span>Invoices</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Availability</span></a
        >
      </div>
    </div>
  </nav>
    )
}
export default Sidebar;