import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar />
      </AppBar>
    </Box>
  );
}