import React from 'react';
import { Message } from 'semantic-ui-react';

const AppMessage = ({ title, content, status }) => {
  const statusColor = {
    success: 'green',
    error: 'red',
    info: 'blue',
  };
  console.log('message');
  return (
    <Message
    compact={false}
    color={statusColor[status]}>
      {title ? <Message.Header>{title}</Message.Header> : ''}
      <p>
      {content}
      </p>
    </Message>
  );
};

export default AppMessage;
