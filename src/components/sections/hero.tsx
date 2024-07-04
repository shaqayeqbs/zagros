'use client'
import React from 'react';
import { CardContent, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { Product } from '@/@types/products';

interface ProductsPageProps {
    products: Product[];
}

const gradients = [
    { base: '#633302', darker: 'rgba(59, 30, 1,.5)' },
    { base: '#dec640', darker: 'rgba(97, 83, 5,.5)' },
    { base: '#056d85', darker: 'rgba(3, 75, 92,.5)' },
    { base: '#bf1806', darker: 'rgba(107, 15, 4,.5)' },
];

const Hero: React.FC<ProductsPageProps> = ({ products }) => {
    return (
        <div className="relative box-border w-[calc(80% - 280px)] !max-w-[calc(60% - 280px)] overflow-hidden">
            <div className="grid md:grid-cols-2  !max-w-[80%] gap-4">
                {products.slice(0, 4).map((product, index) => (
                    <motion.div
                        key={product.id}
                        className="rounded-lg overflow-hidden  max-h-[15rem]"
                        initial={{
                            backgroundImage: `linear-gradient(to right, ${gradients[index % gradients.length].base}, ${gradients[index % gradients.length].darker} , ${gradients[index % gradients.length].darker})`
                        }}
                        whileHover={{
                            backgroundImage: `linear-gradient(to left, ${gradients[index % gradients.length].base}, ${gradients[index % gradients.length].darker}, ${gradients[index % gradients.length].darker})`,
                            scale: 1.03
                        }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                    >
                        <div className="flex flex-row items-stretch w-[36rem]">
                            <CardMedia
                                component="img"
                                className="max-w-32 w-32 h-auto object-cover"
                                image={product.images[0]}
                                alt={product.title}
                            />
                            <CardContent className="flex-1 overflow-auto">
                                <Typography variant="h5" component="div" className="text-lg font-bold">
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" className="text-sm">
                                    {product.category}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="text-xs text-wrap">
                                    {product.description}
                                </Typography>
                            </CardContent>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
