import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGitHu } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="app">
        <div className="content">
            <div className="top-nav">
                <div className="nav-left">
                    <div className="nav-logo">

                    </div>
                </div>
                <div className="nav-center">

                </div>
                <div className="nav-right">
                    <div className="nav-socials">
                        <div className="social-link">
                            <a href="https://github.com/calebjo/">
                                <FontAwesomeIcon icon="fa-brands fa-github-alt" />
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.linkedin.com/in/caleb-jones-928521126/">
                                LINKEDIN
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://calebjones.io/">
                                WEBSITE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-body">

            </div>
        </div>
    </div>
  );
}

export default App;
