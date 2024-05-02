import React, {useState,useDispatch} from 'react';

import './Admin.css';
import logo from '../../images/Logo.svg';
import homeIcon from '../../images/home Icon.svg';
import integrationIcon from '../../images/integration icon.svg';
import otherIntegrationIcon from '../../images/other integration icon.svg';
import settingsIcon from '../../images/settings.svg';
import bellIcon from '../../images/bell.svg';
import plusIcon from '../../images/plus.svg';
import fileIcon from '../../images/file-text.svg';
import clockIcon from '../../images/clock.svg';
import checkIcon from '../../images/check-square.png';
import barChartIcon from '../../images/bar-chart.svg';
import blueCircleIcon from '../../images/blue circle.svg';
import orangeCircleIcon from '../../images/orange ciecle.svg';
import greenCircleIcon from '../../images/green circle.svg';
import moreHorizontalIcon from '../../images/more-horizontal.svg';
import arrowUpRightIcon from '../../images/arrow-up-right.svg';
import Models from './Models';

// import { useState } from 'react';

function Dashboard() {
  const [isModelOpen, setIsModelOpen] = useState(false);


 
  const openModel = () => {
    setIsModelOpen(true);
  };

  const closeModel = () => {
    setIsModelOpen(false);
  };
  return (
    <div className="main-container col-12">
      <div className="sidebars">
        <div className="logo">
          <img src={logo} alt="Logo" width="32" height="32" />
        </div>
        <div className="buttons-container">
          <div className="active-button">
            <img className="white-icon" src={homeIcon} alt="home-icon" />
            <span>Dashboard</span>
          </div>
          <div className="non-active-button">
            <img className="gray-icon" src={integrationIcon} alt="integration-icon" />
            <span>My Integrations</span>
          </div>
          <div className="non-active-button">
            <img className="gray-icon" src={otherIntegrationIcon} alt="other-integration" />
            <span>Other Integrations</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="nav-dashboard">
          <div className="nav-left">Dashboard</div>
          <div className="nav-right">
          <div className="button" onClick={openModel}>
              <img src={settingsIcon} alt="Icon 4" />
            </div>

            <div className="divider"></div>
            <div className="button">
              <img src={bellIcon} alt="Icon 5" />
            </div>
          </div>
        </div>
        <div className="datacontainer-dashboard">
          <div className="text-side" style={{ margin: '0 0 0 0', height: '40px', paddingTop: '8px' }}>
            <span className="choose-what-to">Intellectual Nexus</span>
          </div>
          <button className="secondary-Button" role="button"> <img src={plusIcon} alt="" />Enter other guidance</button>
        </div>
        <div className="head-container col-9">
          <div className="left-container">
            <div className="Dashboard-Cards row-9">
              <div className="card">
                <div className="todo-container">
                  <div className="icon-bg-file"> <img src={fileIcon} alt="" /></div>
                  <span className="To-do">To do</span>
                </div>
                <div className="number-date">
                  <span className="Total">5</span>
                  <span className="Date">Dec 11, 2023</span>
                </div>
              </div>
              <div className="card">
                <div className="todo-container">
                  <div className="icon-bg-clock"> <img src={clockIcon} alt="" /></div>
                  <span className="To-do">To do</span>
                </div>
                <div className="number-date">
                  <span className="Total">0</span>
                  <span className="Date">Dec 11, 2023</span>
                </div>
              </div>
              <div className="card">
                <div className="todo-container">
                  <div className="icon-bg-check"> <img src={checkIcon} alt="" /></div>
                  <span className="To-do">To do</span>
                </div>
                <div className="number-date">
                  <span className="Total">0</span>
                  <span className="Date">Dec 11, 2023</span>
                </div>
              </div>
            </div>
            <div className="General-progress row-9">
              <div className="container">
                <div className="pic-container">
                  <img src={barChartIcon} alt="" />
                </div>
                <span>General progress</span>
              </div>
              <div className="progress-container">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '0%', backgroundColor: '#6595FB' }} aria-label="basic-example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>0%</span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="tasks-overall">
              <div className="task-detail">
                <div className="todo-container">
                  <div className="icon-bg-file"> <img src={fileIcon} alt="" /></div>
                  <span className="To-do">Task Overall</span>
                </div>
                <div className="number-date">
                  <span className="Total">5</span>
                </div>
              </div>
              <div className="container">
                <div className="no-of-tasks">
                  <div className="todo">
                    <div className="shape-text">
                      <img src={blueCircleIcon} />
                      <span>To do</span>
                    </div>
                    <span>5</span>
                  </div>
                  <div className="todo">
                    <div className="shape-text">
                      <img src={orangeCircleIcon} />
                      <span>In progress</span>
                    </div>
                    <span>0</span>
                  </div>
                  <div className="todo">
                    <div className="shape-text">
                      <img src={greenCircleIcon} />
                      <span>Complete</span>
                    </div>
                    <span>0</span>
                  </div>
                </div>
                <div className="chart">
                  <img src="Images/Frame 1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="task-container">
  <div className="todo-block">
    <div className="todo-header">
      <span className="todo-text">
        To do
      </span>
    </div>
    <div className="todo-card">
      <div className="company">
        <div className="company-details">
          <div className="company-name">
            <span>Domain</span>
            <span><img src={moreHorizontalIcon} className="more-horizontal" /></span>
          </div>
          <div className="company-undertext">
            <span className="last-update">Last update:</span>
            <span className="date-text">06 Dec 3:52 PM</span>
          </div>
        </div>
        <div className="link-buttons">
          <button type="button" className="Secondary-button">
            <img src={arrowUpRightIcon} />
            <span>
              Go to resource
            </span>  
          </button>
          <a href="Dashboard Default  Todo.html" role="button" className="Secondary-button">
            <span>Mark In progress</span>
          </a>
        </div>
      </div>
    </div>
    <div className="todo-card">
      <div className="company">
        <div className="company-details">
          <div className="company-name">
            <span>LLC</span>
            <span><img src={moreHorizontalIcon} className="more-horizontal" /></span>
          </div>
          <div className="company-undertext">
            <span className="last-update">Last update:</span>
            <span className="date-text">06 Dec 3:52 PM</span>
          </div>
        </div>
        <div className="link-buttons">
          <button type="button" className="Secondary-button">
            <img src={arrowUpRightIcon} />
            <span>
              Go to resource
            </span>  
          </button>
          <button type="button" className="Secondary-button">
            <span>Mark In progress</span>
          </button>
        </div>
      </div>
    </div>
    <div className="todo-card">
      <div className="company">
        <div className="company-details">
          <div className="company-name">
            <span>EIN</span>
            <span><img src={moreHorizontalIcon} className="more-horizontal" /></span>
          </div>
          <div className="company-undertext">
            <span className="last-update">Last update:</span>
            <span className="date-text">06 Dec 3:52 PM</span>
          </div>
        </div>
        <div className="link-buttons">
          <button type="button" className="Secondary-button">
            <img src={arrowUpRightIcon} />
            <span>
              Go to resource
            </span>  
          </button>
          <button type="button" className="Secondary-button">
            <span>Mark In progress</span>
          </button>
        </div>
      </div>
    </div>
    <div className="todo-card">
      <div className="company">
        <div className="company-details">
          <div className="company-name">
            <span>Taxes and Accounting</span>
            <span><img src={moreHorizontalIcon} className="more-horizontal" /></span>
          </div>
          <div className="company-undertext">
            <span className="last-update">Last update:</span>
            <span className="date-text">06 Dec 3:52 PM</span>
          </div>
        </div>
        <div className="link-buttons">
          <button type="button" className="Secondary-button">
            <img src={arrowUpRightIcon}/>
            <span>
              Go to resource
            </span>  
          </button>
          <button type="button" className="Secondary-button">
            <span>Mark In progress</span>
          </button>
        </div>
      </div>
    </div>
    <div className="todo-card">
      <div className="company">
        <div className="company-details">
          <div className="company-name">
            <span>Marketing Research</span>
            <span><img src={moreHorizontalIcon} className="more-horizontal" /></span>
          </div>
          <div className="company-undertext">
            <span className="last-update">Last update:</span>
            <span className="date-text">06 Dec 3:52 PM</span>
          </div>
        </div>
        <div className="link-buttons">
          <button type="button" className="Secondary-button">
            <span>Mark In progress</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="todo-block">
    <div className="todo-header">
      <span className="inprogress-text">
        In progress
      </span>
    </div>
  </div>
  <div className="todo-block">
    <div className="todo-header">
      <span className="completed-text">
        Completed
      </span>
    </div>
  </div>
</div>

          {isModelOpen && <Models onClose={closeModel} />}
      </div>
    </div>
  );
}

export default Dashboard;
