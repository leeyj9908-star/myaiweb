import { useState } from 'react';
import {
  Box, Typography, Divider,
  AppBar, Toolbar, IconButton, Menu, MenuItem, Button,
  useMediaQuery, useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menus = ['홈', '소개', '서비스', '연락처'];

function Section03Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleClick = (menu) => {
    alert(`클릭! 메뉴: ${menu}`);
    handleMenuClose();
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        03. Navigation (AppBar)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        AppBar + Toolbar — 모바일에서 햄버거 메뉴로 전환
      </Typography>

      <AppBar position="static" sx={{ borderRadius: 1 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            MyApp
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {menus.map((menu) => (
                  <MenuItem key={menu} onClick={() => handleClick(menu)}>
                    {menu}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menus.map((menu) => (
                <Button key={menu} color="inherit" onClick={() => handleClick(menu)}>
                  {menu}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Section03Navigation;
