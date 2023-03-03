import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import HireMe from './components/HireMe'
import Privacy from './components/Privacy'
import Modal from './components/Modal'
import './css/shared.css';

function App() {

  const [consent, setConsent] = useState(false);

  const [projects, setProjects] = useState([]);


  const confirmConsent = () => {
    // Set consent cookie
    ////

    setConsent(true);
  }

  useEffect(() => {
    // Pull cookies to see if consent has been given before, also logged in user, etc.
    ////

    // Find projects
    setProjects([
      {
        img: "project1.jpg",
        title: "Title 1",
        description: "Description 1",
        tags: [
          "React",
          "Laravel"
        ],
        demoLink: "http://www.dregozone.com/projects/1",
        githubLink: "https://github.com/dregozone/1"
      },
      {
        img: "project2.jpg",
        title: "Title 2",
        description: "Description 2",
        tags: [
          "React",
          "Laravel"
        ],
        demoLink: "http://www.dregozone.com/projects/2",
        githubLink: "https://github.com/dregozone/2"
      },
      {
        img: "project3.jpg",
        title: "Title 3",
        description: "Description 3",
        tags: [
          "React",
          "Laravel"
        ],
        demoLink: "http://www.dregozone.com/projects/3",
        githubLink: "https://github.com/dregozone/3"
      },
      {
        img: "project1.jpg",
        title: "Title 1",
        description: "Description 1",
        tags: [
          "React",
          "Laravel"
        ],
        demoLink: "http://www.dregozone.com/projects/1",
        githubLink: "https://github.com/dregozone/1"
      },
      {
        img: "project2.jpg",
        title: "Title 2",
        description: "Description 2",
        tags: [
          "React",
          "Laravel"
        ],
        demoLink: "http://www.dregozone.com/projects/2",
        githubLink: "https://github.com/dregozone/2"
      },
      {
        img: "project3.jpg",
        title: "Title 3",
        description: "Description 3",
        tags: [
          "React",
          "Laravel"
        ],
        demoLink: "http://www.dregozone.com/projects/3",
        githubLink: "https://github.com/dregozone/3"
      },
    ]);
  }, [])

  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> |
          <a href="/hireme">Hire me</a> |
          <a href="/privacy">Privacy</a>
        </nav>

        <main>
          <>
            <Routes>
              <Route path="/" exact element={<Home projects={projects} />} />
              <Route path="/hireme" element={<HireMe />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </>
        </main>

        {!consent && <Modal confirmConsent={confirmConsent} />}
      </div>
    </Router>
  );
}

export default App;
