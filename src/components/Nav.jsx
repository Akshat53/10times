import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
 
 
  {
    label: (
      <a href="/Events" target="_blank" rel="noopener noreferrer">
        Events
      </a>
    ),
    key: 'alipay',
  },
  {
    label: (
      <a href="/" target="_blank" rel="noopener noreferrer">
        Calendar
      </a>
    ),
    key: 'b',
  },
  {
    label: (
      <a href="/Events" target="_blank" rel="noopener noreferrer">
        Explore
      </a>
    ),
    key: 'a',
  },
];
const AppNav = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  style={{background:"none"}}/>;
};
export default AppNav;