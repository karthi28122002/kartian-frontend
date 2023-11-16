// App.js

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import AdminPanel from './components/components/adminPanel';
import Layout from './components/components/Layout';
import AdminPanelLayout from './components/components/adminPanelLayout';

// Define a PrivateRoute component
const PrivateRoute = ({ element: Element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    // Redirect to home page if not logged in
    return null;
  }

  return <Element />;
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/dashboard" element={<PrivateRoute element={<AdminPanel />}/>}/>
          <Route path="/dashboard/*" element={ <PrivateRoute element={<AdminPanelLayout />}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
