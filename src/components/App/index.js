// == Import
import './styles.css';

// Installed Modules
import { Route, Routes } from 'react-router'

// == Components
import RepoFinder from '../RepoFinder';
import Header from '../Header';
import FAQ from "../FAQ";

const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<RepoFinder />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  </div>
);

// == Export
export default App;
