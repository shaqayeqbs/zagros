"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { useTheme } from '@/core/theme/theme-provider';




function SavedItems() {
    const [filter, setFilter] = useState<string>('Books');
    const { theme } = useTheme();
    const handleFilterChange = (
        event: React.MouseEvent<HTMLElement>,
        newFilter: string | null
    ) => {
        if (newFilter !== null) {
            setFilter(newFilter);
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, color: theme.color, background: theme.primary, height: "100%" }}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', ml: 2, mt: 3 }}>
                <BookmarkIcon sx={{ mr: 1 }} /> Saved Items
            </Typography>
            <ToggleButtonGroup
                value={filter}
                exclusive
                onChange={handleFilterChange}
                sx={{
                    ml: 3,
                    mt: 2,
                    '& .MuiToggleButtonGroup-grouped': {
                        color: theme.color,
                        borderColor: 'transparent', // Remove border
                        backgroundColor: theme.lightGray,
                        borderRadius: "10px",
                        p: 1,
                        py: .3,
                        fontSize: "12px",
                        margin: "0 .3rem",
                        '&:hover': {
                            backgroundColor: '#115293',
                        },
                        '&.Mui-selected': {
                            color: theme.color,
                            backgroundColor: '#115293',
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: '#0a3c61',
                        }
                    }
                }}
            >
                <ToggleButton value="All">All</ToggleButton>
                <ToggleButton value="Product">Product</ToggleButton>
                <ToggleButton value="Books">Books</ToggleButton>
            </ToggleButtonGroup>
            <List component="nav" sx={{ mt: 2 }}>
                {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={item} />
                        <ListItemIcon sx={{ color: theme.color }}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default SavedItems;
