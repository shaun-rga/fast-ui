import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './Components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <CssBaseline>
    <App />
  </CssBaseline>
);
