import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AppNavbar from "./components/Navbar";
import DashboardPage from './components/DashboardPage';
import SignupPage from "./components/SignupPage";
// import WatchlistPage from "./components/WatchlistPage";
import StockDetailsPage from './components/StockDetailsPage';
import PrivateRoute from "./components/PrivateRoute";  // ✅ Importing
import NotFoundPage from './components/NotFoundPage';
import TestAlphaFetch from "./test/TestAlphaFetch";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
      <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/stock/:symbol" 
          element={
            <PrivateRoute>
              <StockDetailsPage />
            </PrivateRoute>
          } 
        />
        <Route path="/test-fetch" element={<TestAlphaFetch />} />
        {/* <Route path="/watchlist" element={<WatchlistPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
