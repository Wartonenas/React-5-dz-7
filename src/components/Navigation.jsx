import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Read Post</Link></li>
					<li><Link to="/createPost">Create Post</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;