import { PaginationDemo } from './components/PaginationDemo';
import { DebounceSearchDemo } from './components/DebounceSearchDemo';

function App() {
  return (
    <div className="container">
      <h1>Custom React Hooks Lab</h1>
      <PaginationDemo />
      <DebounceSearchDemo />
    </div>
  );
}

export default App;