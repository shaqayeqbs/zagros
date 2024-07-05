'use client';
import React, { useEffect, useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useRouter } from 'next/navigation';
import useLoginStore from '@/store/auth';
import { usePathname } from 'next/navigation'
import TocIcon from '@mui/icons-material/Toc';
import Filter from '../sections/filter';
import { useTheme } from '@/core/theme/theme-provider';

function MainHeader() {
    const { isAuthenticated, logoutUser } = useLoginStore();
    const router = useRouter();
    const [pageTitle, setPageTitle] = useState('');
    const pathname = usePathname();
    const { theme } = useTheme()
    console.log(isAuthenticated);
    useEffect(() => {
        const pathSegments = pathname.split('/').filter(Boolean);
        switch (pathSegments[1]) {
            case 'books':
                setPageTitle('Books');
                break;
            case 'category':
                setPageTitle('Category');
                break;
            default:
                setPageTitle('Products'); // Default page title
                break;
        }
    }, [pathname]);

    const handleLogout = () => {
        logoutUser();
        router.push('/'); // Navigate to home on logout
    };

    return (
        <div className='w-full fixed top-0 right-0 left-[260px] !z-50 p-4 px-8' style={{ width: 'calc(100% - 280px)', background: theme.background, }}>
            <div className='flex justify-between items-center'>
                <Typography variant="h6" className='flex items-center justify-center gap-1'>
                    <TocIcon className='text-[#269dff] !font-bold !text-[35px]' />
                    {pageTitle}</Typography>
                <div className='flex justify-center items-center'>
                    <IconButton className='flex justify-center gap-1 !text-[13px] !py-1 !px-3 items-center align-middle' sx={{ bgcolor: 'rgba(128, 128, 128, 0.3)', borderRadius: 5, margin: '0 4px' }} color="inherit">
                        <FavoriteIcon sx={{ color: 'red', fontSize: 12 }} />
                        <Typography>  100</Typography>
                    </IconButton>
                    <IconButton className='flex justify-center gap-1 !text-[13px]  !py-1  !px-3 items-center align-middle' sx={{ bgcolor: 'rgba(128, 128, 128, 0.3)', borderRadius: 5, margin: '0 4px' }} color="inherit">
                        <ElectricBoltIcon sx={{ color: 'yellow', fontSize: 12 }} />
                        <Typography>90</Typography>
                    </IconButton>
                    {isAuthenticated && <IconButton color="inherit" onClick={handleLogout}>
                        <Typography className='text-[12px]'>logout</Typography>
                        <ExitToAppIcon />
                    </IconButton>
                    }


                    {!isAuthenticated && <IconButton color="inherit" onClick={() => router.push('/auth')}>
                        <Typography className='text-[12px]'>login</Typography>   <AccountCircleIcon />
                    </IconButton>
                    }
                </div>
            </div>
            <Filter />
        </div>
    );
}

export default MainHeader;
