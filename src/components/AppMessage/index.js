import { Container, Message } from 'semantic-ui-react';
import './style.css';

const AppMessage = ({ title, children, status }) => {
  const statusColor = {
    success: 'green',
    error: 'red',
    info: 'blue',
  };
  console.log('message');
  return (
    <Container className="app-message">
    <Message
    compact={false}
    color={statusColor[status]}>
      {title ? <Message.Header>{title}</Message.Header> : ''}
      <p>
      {children}
      </p>
    </Message>
    </Container>
  );
};

export default AppMessage;
