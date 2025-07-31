import { Router, Route } from 'wouter';
import LandingPage from './pages/LandingPage';
import QuizFlow from './pages/QuizFlow';
import ChatInterface from './pages/ChatInterface';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Route path="/" component={LandingPage} />
        <Route path="/quiz/:path*" component={QuizFlow} />
        <Route path="/chat" component={ChatInterface} />
      </div>
    </Router>
  );
}

export default App;