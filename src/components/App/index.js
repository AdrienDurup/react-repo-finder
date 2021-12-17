// == Import
import './styles.css';

// Installed Modules
import { Route, Routes } from 'react-router';

// == Components
import RepoFinder from '../RepoFinder';
import Header from '../Header';

const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<RepoFinder />} />
    </Routes>
  </div>
);

// == Export
export default App;
