import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav>
      <a href="/"><h3 className="header-title">Bookstore CMS</h3></a>
      <ul className="navbar-ul">
        <li><Link to="/" className="nav-link active">Books</Link></li>
        <li><Link to="/categories" className="nav-link">Categories</Link></li>
      </ul>
    </nav>
    <i className="fa-regular fa-circle-user fa-2x user-icon" />
  </header>
);

export default Navigation;
