import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import { Product } from '@/@types/product';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {

    const truncateDescription = (description: string, maxLength: number) => {
        return description.length > maxLength ? description.substring(0, maxLength) + '... more' : description;
    };

    return (

        <div className='max-w-[8rem] w-fit '>
            <CardMedia
                component="img"
                height="140"
                className="rounded-lg"
                image={product.thumbnail}
                alt={product.title}
                loading="lazy"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '0.7rem' }} className='text-ellipsis'>
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.65rem' }}>
                    {truncateDescription(product.description, 20)}
                </Typography>
            </CardContent>
        </div>

    );
};

export default ProductItem;
