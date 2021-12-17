import AppMessage from '../AppMessage';

const ResultMessage = ({ total }) => (
  <AppMessage
    title="Search result"
    status={total > 0 ? "success" : "error"}
  >
    {total > 0 ? `Found ${total} repo${total > 1 ? 's' : ''}` : 'No repo found.'}
  </AppMessage>
);

export default ResultMessage;
