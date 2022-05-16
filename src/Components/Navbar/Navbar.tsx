import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ px: 1 }}>
        <Link to="/">Home</Link>
      </Typography>
      <Typography variant="h6" component="div" sx={{ px: 1 }}>
        <Link to="/companies">Companies</Link>
      </Typography>
      <Typography variant="h6" component="div" sx={{ px: 1 }}>
        <Link to="/contacts">Contacts </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
