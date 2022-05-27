import "./App.css";
import MainView from "./components/mainView/MainView";
import Dashboard from "./components/dashboard/Dashboard";
import Schedule from "./components/schedule/Schedule";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Fragment } from "react";

function App() {
  return (
    <AppProvider>
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/presenters" element={<Dashboard />} />
            <Route path="/tables" element={<Dashboard />} />
            <Route path="/schedule/:shiftId" element={<Schedule />} />
          </Routes>
        </Router>
      </Fragment>
    </AppProvider>
  );
}

export default App;
