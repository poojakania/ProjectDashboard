import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarCheck, faBox, faHistory, faUser, faCalendarAlt, faTasks, faFileInvoice, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const sidebarNavItems = [
  {
    display: 'Dashboard',
    icon: <FontAwesomeIcon icon={faHome} />,
    to: '/dashboardpage',
    section: '/dashboardpage'
  },
  {
    display: 'Appointment',
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    to: '/appointment',
    section: 'appointment'
  },
  {
    display: 'Tasks',
    icon: <FontAwesomeIcon icon={faTasks} />,
    to: '/task',
    section: 'task'
  },
  {
    display: 'Bills',
    icon: <FontAwesomeIcon icon={faFileInvoice} />,
    to: '/bill',
    section: 'bill'
  },
  {
    display: 'Calendar',
    icon: <FontAwesomeIcon icon={faCalendarAlt} />,
    to: '/calendar',
    section: 'calendar'
  },
  {
    display: 'Package',
    icon: <FontAwesomeIcon icon={faBox} />,
    to: '/package',
    section: 'package'
  },
  {
    display: 'History',
    icon: <FontAwesomeIcon icon={faHistory} />,
    to: '/history',
    section: 'history'
  },
  {
    display: 'Profile',
    icon: <FontAwesomeIcon icon={faUser} />,
    to: '/profile',
    section: 'profile'
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className='sidebar' style={{ height: `${window.innerHeight}px` }}> {/* Set fixed height */}
      <div className="sidebar__logo">
      <img src="../images/logo-bamfer02 1.png" alt="" className="img-fluid" />
      </div>
      <div ref={sidebarRef} className="sidebar__menu" style={{ overflowY: 'auto' }}> {/* Add overflow-y: auto */}
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
          }}
        ></div>
        {
          sidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index} className="sidebar-link"> {/* Added className */}
              <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                <div className="sidebar__menu__item__icon">
                  {item.icon}
                </div>
                <div className="sidebar__menu__item__text">
                  {item.display}
                </div>
                {/* Move the arrow icon here */}
                <div className="sidebar__menu__item__arrow">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
              <hr /> {/* Add horizontal rule after each link */}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
