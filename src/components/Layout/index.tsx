import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/projects">Projects</Link>
          </li> */}
        </ul>
      </nav>
      {children}
      <footer>
        <p>Built with Vite and React with Typescript</p>
      </footer>
    </div>
  );
};

export default Layout;
