import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductItem from './product-item';
import { Product } from '@/@types/product';

interface ProductsPageProps {
    products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
    return (
        <div className="w-full "> {/* Main container ensuring no vertical overflow */}
            <Typography variant="h6" component="h2" className="my-4">
                For you
            </Typography>
            <div className="flex justify-start max-w-[1200px] overflow-x-auto   py-2"
                style={{ padding: '8px 0', scrollbarWidth: 'none' }}>
                {products?.map(product => (
                    <Box key={product.id} className="shrink-0 w-fit mx-2">
                        <ProductItem product={product} />
                    </Box>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;