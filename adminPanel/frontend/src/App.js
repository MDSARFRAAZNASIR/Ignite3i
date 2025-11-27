
import './App.css';
import PostJobPage from './components/PostJobPage';
import JobsListPage from './components/JobPostList';

function App() {
  return (
    <div className="App">
      <h1>
        Admin Panel
      </h1>
      <PostJobPage/>
      <h1>Jobs List</h1>
      <JobsListPage/>
    </div>
  );
}

export default App;
