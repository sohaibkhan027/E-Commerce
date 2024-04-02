import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
} from '@ant-design/icons';

import { Button, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowLeft, faBarChart, faCross } from '@fortawesome/free-solid-svg-icons';
const { SubMenu } = Menu;


const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>


<Menu
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['']}
        mode="inline"
        theme="dark"
      >
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Men">
          <Menu.Item key="0">
          <Link onClick={onClose} to="/mens">Mens Collection</Link>
          </Menu.Item>
          {/* <Menu.Item key="10">Option 10</Menu.Item> */}
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Women">
        <Menu.Item key="1">
          <Link onClick={onClose} to="/women">Womens Collection</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Kids">
        <Menu.Item key="2" >
          <Link onClick={onClose} to="/kids" >Kids Collection</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
<button className="closebtn" onClick={onClose}>
  <FontAwesomeIcon  icon={faArrowLeft}/>
</button>
    </div>
  );
};

export default Sidebar;
