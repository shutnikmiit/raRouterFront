import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPost from "./components/NewPost";
import HomePage from "./components/HomePage";
import ViewPost from "./components/ViewPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<ViewPost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;