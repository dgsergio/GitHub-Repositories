import { createRoot } from 'react-dom/client';
import App from './components/App';
import './style.css';

const root = createRoot(document.getElementById('app') as HTMLDivElement);
root.render(<App />);
