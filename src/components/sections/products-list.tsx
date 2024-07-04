import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductItem from './product-item';
import { Product } from '@/@types/products';

interface ProductsPageProps {
    products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
    return (
        <div className=" !overflow-hidden"> {/* Main container ensuring no vertical overflow */}
            <Typography variant="h6" component="h2" className="my-4">
                For you
            </Typography>
            <div className="flex overflow-x-auto w-min hide-scrollbar py-2" style={{ padding: '8px 0' }}> {/* Horizontal scroll with hidden scrollbar */}
                {products?.map(product => (
                    <div key={product.id} className="shrink-0 w-fit mx-2"> {/* Ensure elements do not shrink and have horizontal margin */}
                        <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
