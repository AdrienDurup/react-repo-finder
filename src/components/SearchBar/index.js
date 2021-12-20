import { Input, Icon } from 'semantic-ui-react';

const SearchBar = ({ onChange, isLoading, value }) => (
  <Input
    icon={isLoading ? <Icon name='circle notched' loading /> : "search"}
    placeholder="Search repo..."
    iconPosition="left"
    fluid
    onChange={onChange}
    value={value}
  />
);
export default SearchBar;
