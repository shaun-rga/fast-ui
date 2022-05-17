import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import App from './Components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>
)
