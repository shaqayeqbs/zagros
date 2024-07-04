'use client';
import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function Filter() {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleFilterChange = (event: React.MouseEvent<HTMLElement>, newFilter: string | null) => {
        if (newFilter !== null) { // Prevent deselecting all options
            setSelectedFilter(newFilter);
        }
    };

    return (
        <ToggleButtonGroup
            value={selectedFilter}
            exclusive
            onChange={handleFilterChange}
            aria-label="filter options"
            sx={{
                '& .MuiToggleButtonGroup-grouped': {
                    margin: '13px 6px',
                    padding: '0',
                    fontSize: "12px !important",
                    color: "white",
                    borderRadius: 2,
                    bgcolor: '#3b3d3d', // Set default background to light gray for all
                    '&.Mui-selected, &.Mui-selected:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                    }
                }
            }}
        >
            <ToggleButton value="all" aria-label="all" className='!p-3 !py-1 !text-[10px] !rounded-2xl'>
                All
            </ToggleButton>
            <ToggleButton value="productivity" aria-label="productivity" className='!p-3 !py-1 !text-sm !rounded-2xl'>
                <TipsAndUpdatesIcon sx={{ mr: 1, fontSize: '20px', color: 'yellow' }} />Productivity
            </ToggleButton>
            <ToggleButton value="creative" aria-label="creative" className='!p-3 !py-1 !text-sm !rounded-2xl'>
                <ColorLensIcon sx={{ mr: 1, fontSize: '20px', color: 'pink' }} />Creative
            </ToggleButton>
            <ToggleButton value="trend" aria-label="trend" className='!p-3 !py-1 !text-sm !rounded-2xl'>
                <LocalFireDepartmentIcon sx={{ mr: 1, fontSize: '20px', color: 'gold' }} />Trend
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
