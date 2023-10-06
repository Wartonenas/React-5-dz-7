import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Navigation';
import ReadPost from "./pages/ReadPost"
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<ReadPost />} />
				<Route path="/createPost" element={<CreatePost />} />
				<Route path="*" element={<h2>Page not Found</h2>} />
			</Routes>
			<Layout />
    </Router>
  );
};

export default App;
