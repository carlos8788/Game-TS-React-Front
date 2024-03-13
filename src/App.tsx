import Home from "./pages/Home/Home"
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from "./pages/Layout/Layout";
import Moderator from "./pages/Moderator/Moderator";
import Player from "./pages/Player/Player";

const App: React.FC = () => {

  return (
    <Router>
      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moderator" element={<Moderator />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

