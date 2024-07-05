'use client'
import { Box } from '@mui/material';
import { useTheme } from './theme-provider'; // Check this path

export default function PageTheme({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();

    return (
        <Box component="main" sx={{
            bgcolor: theme.background,
            color: theme.color,
            minHeight: '100vh',
            boxSizing: "border-box",
            width: "100%",
            overflowX: "hidden"
        }}>
            {children}
        </Box>
    );
}
