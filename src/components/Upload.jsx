import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const AppUploade = ({handleImageUpload }) => {
  const props = {
    // ...existing props
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        const reader = new FileReader();
        reader.onload = () => {
          // Pass the uploaded image data to the function to store in local storage
          handleImageUpload(reader.result);
        };
        reader.readAsDataURL(info.file.originFileObj);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
    </Dragger>
  );
};

export default AppUploade;
