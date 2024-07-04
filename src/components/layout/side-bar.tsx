'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Drawer, CssBaseline, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SavedItems from '../sections/saved-items';
import { useTheme } from '@/core/theme/theme-provider';
import { themes } from '@/core/theme';

const drawerWidth = 250;

export default function ClippedDrawer() {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeItem, setActiveItem] = useState('Product');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        setIsDarkMode(savedTheme === 'dark');
    }, []);

    const handleNavigation = (path: string, item: string) => {
        setActiveItem(item);
        router.push(path);
    };

    const handleThemeToggle = () => {
        const newTheme = theme === themes.dark ? themes.light : themes.dark;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme === themes.dark ? 'dark' : 'light');
        setIsDarkMode(newTheme === themes.dark);
    };

    const listItems = [
        { text: "Product", icon: <InboxIcon />, link: "/dashboard" },
        { text: "Books", icon: <BookmarkIcon />, link: "/dashboard/books" },
        { text: "Category", icon: <MailIcon />, link: "/dashboard/category" },
        { text: "Search", icon: <SearchIcon />, link: "/dashboard" },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                display: 'fixed',
                bottom: 0,
                zIndex: 0,
                top: 0,
                height: '100vh',
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    background: theme.background
                },
            }}
        >
            <Box sx={{ background: theme.primary, marginBottom: ".5rem" }}>
                {isDarkMode && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '170px',
                        opacity: "0.1",
                        background: 'linear-gradient(-160deg, #167a8a,#167a8a, #0c457a, #0c457a, #31393b)'
                    }}></div>
                )}
                <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
                    <AccountCircleIcon sx={{ marginRight: 1, color: theme.color }} />
                    <Typography variant="h6" sx={{ color: theme.color, fontSize: '1.2rem', flexGrow: 1 }}>John Doe</Typography>
                    <Switch
                        checked={isDarkMode}
                        onChange={handleThemeToggle}
                        color="default"
                    />
                    {isDarkMode ? <NightlightIcon sx={{ color: theme.color, fontSize: "14px" }} /> : <LightModeIcon sx={{ color: theme.color, fontSize: "14px" }} />}
                </Box>
                <Divider sx={{ bgcolor: theme.color }} />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {listItems.map(item => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton
                                    sx={{
                                        py: 1,
                                        px: 2,
                                        borderRadius: 2,
                                        mx: 1,

                                        bgcolor: activeItem === item.text ? 'rgba(128, 128, 128, 0.3)' : 'inherit'

                                    }}
                                    onClick={() => handleNavigation(item.link, item.text)}
                                >
                                    <ListItemIcon sx={{ color: theme.color, minWidth: 'auto', marginRight: '10px' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} primaryTypographyProps={{ style: { color: theme.color, fontSize: '1rem' } }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
            <SavedItems />
        </Drawer>
    );
}
