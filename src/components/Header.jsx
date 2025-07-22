import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
  appBarStyle,
  desktopMenuWrapper,
  menuButtonStyle,
  megaMenuBox,
  submenuBox,
  getStartedButton,
  iconWrapper,
  hoverWrapper,
} from './style';

const menuConfig = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    submenu: [
      { label: 'Mobile App Development', path: '/services/mobile-app-development' },
      { label: 'Custom Software Development', path: '/services/mobile-app-development' },
      { label: 'Website Development', path: '/services/mobile-app-development' },
      { label: 'Digital Marketing', path: '/services/mobile-app-development' },
      { label: 'E-commerce Development', path: '/services/mobile-app-development' },
    ],
  },
  {
    label: 'Technologies',
    path: '/technologies',
    megaMenu: {
      Trending: ['Artificial Intelligence', 'Machine Learning', 'Blockchain', 'Data Analytics', 'IoT'],
      Platforms: ['AWS', 'Azure', 'Google Cloud', 'Salesforce', 'Microsoft Power BI'],
    },
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
  {
    label: (
      <>
        Hire <OpenInNewIcon sx={{ fontSize: 16, ml: 0.5 }} />
      </>
    ),
    path: '/hire',
  },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
const isSpecialHeaderPage = location.pathname === '/hire' || location.pathname === '/services/mobile-app-development';


  const handleHover = (label) => setHoveredMenu(label);
  const handleLeave = () => setHoveredMenu(null);
  const toggleSubmenu = (label) =>
    setOpenSubmenus((prev) => ({ ...prev, [label]: !prev[label] }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box onMouseLeave={handleLeave} sx={hoverWrapper}>
   <AppBar
  className="hover-appbar"
  position="fixed"
  elevation={0}
  sx={{
    ...appBarStyle(scrolled),
    ...(isSpecialHeaderPage && {
      color: '#000000',
      borderBottom: '1px solid #000',
      '.menu-button': { color: 'black' },
    }),
  }}
>

        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ color: '#f39c12', fontWeight: 'bold' }}>LOGO</Typography>

          {!isMobile ? (
            <Box sx={desktopMenuWrapper}>
              {menuConfig.map((item, index) => (
                <Box key={index} onMouseEnter={() => handleHover(item.label)} sx={{ position: 'relative' }}>
                  <NavLink to={item.path || '#'} style={{ textDecoration: 'none' }}>
                    <Button className="menu-button" sx={menuButtonStyle}>
                      {typeof item.label === 'string' ? (
                        <Typography>{item.label}</Typography>
                      ) : (
                        item.label
                      )}
                    </Button>
                  </NavLink>

                  {hoveredMenu === item.label && item.megaMenu && (
                    <Box sx={megaMenuBox}>
                      <Box>
                        <Typography variant="subtitle2" mb={1}>Trending</Typography>
                        {item.megaMenu.Trending.map((link, i) => (
                          <Typography key={i} variant="body2" mb={0.5}>{link}</Typography>
                        ))}
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" mb={1}>Platforms</Typography>
                        {item.megaMenu.Platforms.map((link, i) => (
                          <Typography key={i} variant="body2" mb={0.5}>{link}</Typography>
                        ))}
                      </Box>
                    </Box>
                  )}

                  {hoveredMenu === item.label && item.submenu && (
                    <Box sx={submenuBox}>
                      {item.submenu.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.path}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <Typography variant="body2" mb={0.5}>{sub.label}</Typography>
                        </NavLink>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}

              <Button sx={getStartedButton}>
                <Typography sx={{ mr: 1 }}>Get Started</Typography>
                <Box className="iconWrapper" sx={iconWrapper}>
                  <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff' }} />
                </Box>
              </Button>
            </Box>
          ) : (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250 }}>
          {menuConfig.map((item, index) => {
            const hasSubItems = item.submenu || item.megaMenu;
            const isOpen = openSubmenus[item.label];

            return (
              <Box key={index}>
                <ListItem button onClick={() => hasSubItems && toggleSubmenu(item.label)}>
                  <NavLink to={item.path || '#'} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    <ListItemText primary={typeof item.label === 'string' ? item.label : 'Hire'} />
                  </NavLink>
                  {hasSubItems && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>

                {item.submenu && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.submenu.map((subItem, subIndex) => (
                        <ListItem key={subIndex} sx={{ pl: 4 }}>
                          <NavLink
                            to={subItem.path}
                            style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                          >
                            <ListItemText primary={subItem.label} />
                          </NavLink>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}

                {item.megaMenu && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 2 }}>
                      <Typography variant="subtitle2" sx={{ pl: 2, mt: 1 }}>Trending</Typography>
                      {item.megaMenu.Trending.map((entry, i) => (
                        <ListItem key={i} sx={{ pl: 4 }}>
                          <ListItemText primary={entry} />
                        </ListItem>
                      ))}
                      <Typography variant="subtitle2" sx={{ pl: 2, mt: 2 }}>Platforms</Typography>
                      {item.megaMenu.Platforms.map((entry, i) => (
                        <ListItem key={i} sx={{ pl: 4 }}>
                          <ListItemText primary={entry} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
