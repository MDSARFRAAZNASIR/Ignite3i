import "./App.css";
import AboutPage from "./components/AboutPage";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ServiceScrollingPage from "./components/addingpages/ServiceScrollingPage";
import ScrollToTop from "./components/ScrollToTop";
import ServicesPage from "./components/ServicesPage";

import Methodologies from "./components/Methodologies";

import JobsListPage from "./components/JobListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <HomePage />
        <ServiceScrollingPage />
        <AboutPage />
        <ServicesPage />
        <Methodologies />

        <JobsListPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
