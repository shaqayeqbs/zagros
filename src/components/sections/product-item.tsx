import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import { Product } from '@/@types/products';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    // Function to truncate text and append '... more'
    const truncateDescription = (description: string, maxLength: number) => {
        return description.length > maxLength ? description.substring(0, maxLength) + '... more' : description;
    };

    return (
        <Grid item>
            <div className='max-w-[8rem]'>
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
        </Grid>
    );
};

export default ProductItem;
