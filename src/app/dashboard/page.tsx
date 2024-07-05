import { shopProducts } from "@/core/api/product"
import ProductsPage from "@/components/sections/products-list";
import Hero from "@/components/sections/hero";

export default async function Home() {
    const data = await shopProducts();

    return (
        < >
            <Hero products={data?.products} />
            <ProductsPage products={data?.products} />

        </>
    );
}
