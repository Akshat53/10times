import React, { useState } from 'react';
import { Dropdown, Avatar, Menu } from 'antd';
import { avatarOptions } from '../constants.js';

const CustomAvatar = ({ onChange }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);

  const handleMenuClick = (option) => {
    setSelectedAvatar(option);
  
    onChange(option);
  };

  const menu = (
    <Menu onClick={({ key }) => handleMenuClick(avatarOptions.find(option => option.key === key))}>
      {avatarOptions.map(option => (
        <Menu.Item key={option.key}>
          <Avatar src={option.url} />
          <span style={{ padding: '0 20px' }}>{option.label}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={selectedAvatar.url} />
        <div style={{ marginLeft: '8px', display: 'flex', flexDirection: 'column' }}>
          <span style={{}}>{selectedAvatar.title}</span>
          <span style={{ color: 'black', fontWeight: 'bold' }}>{selectedAvatar.label}</span>
        </div>
      </div>
    </Dropdown>
  );
};

export default CustomAvatar;
