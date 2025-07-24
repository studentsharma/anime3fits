import { ArrowRight } from 'lucide-react';
import Slider from "./Slider"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/Store';
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"
import Pro from './Pro.tsx';
import { set_products } from "../features/product/productSlice.ts"

interface Product {
    id: number;
    name: string;
    originalPrice: number;
    discountedPrice: number;
    imageUrl: string;
}

const HomePage = (): JSX.Element => {
    const user = useSelector((state: RootState) => state.user.user);
    // console.log(user);
    const dispatch = useDispatch();
    const [viewall, setviewall] = useState<boolean>(false)
    const [viewallbest, setviewallbest] = useState<boolean>(false)
    const [products, setproducts] = useState<Product[]>([]);
    const [bestSellers, setbestSellers] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>();
    


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/global/get_products`, {
                    subCategory: "Hoodie",
                });
                setbestSellers(res.data.map((item: any) => ({
                    id: item.pro_id,
                    name: item.name,
                    originalPrice: item.price,
                    discountedPrice: item.discount,
                    imageUrl: item.url,
                })));
                setproducts(res.data.map((item: any) => ({
                    id: item.pro_id,
                    name: item.name,
                    originalPrice: item.price,
                    discountedPrice: item.discount,
                    imageUrl: item.url,
                })));
                // console.log(res.data);
                dispatch(set_products(res.data));
            } catch (error) {
                // console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    // Reusable header for product sections
    const SectionHeader = ({ title, subtitle, onviewallClick }: { title: string; subtitle: string, onviewallClick : ()=>void }) => (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
                <p className="text-gray-400">{subtitle}</p>
            </div>
            <button
                // onClick={() => setviewall((prev) => !prev)}
                onClick={onviewallClick}
                className="flex items-center text-white hover:text-indigo-400 transition-colors duration-300 group"
            >
                <span className="font-semibold">VIEW ALL</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>

        </div>
    );

    // Card for displaying a single product
    const ProductCard = ({ product }: { product: Product }) => (

        <div className="group">
            <div className="overflow-hidden rounded-lg mb-4">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-auto object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x500/333333/ffffff?text=Image+Error')}
                />
            </div>
            <h3 className="text-lg font-semibold text-white truncate">{product.name}</h3>
            <p className="text-white mt-1">
                <span className="text-red-500 font-bold mr-2">₹{product.originalPrice - product.discountedPrice}</span>
                <span className="line-through text-gray-500">₹{product.originalPrice}</span>
                <button className='bg-red-700 float-right p-2 rounded-md mr-2' onClick={() => handleProductClick(product)}>Details</button>
            </p>
        </div>
    );

    const ProductGrid = ({
        products,
        viewAll,
    }: {
        products: Product[];
        viewAll: boolean;
    }) => {
        const displayedProducts = viewAll ? products : products.slice(0, 4);

        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                {selectedProduct && (
                    <Pro
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </div>
        );
    };

    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
    };


    return (
        <>
            <Header />
            <div className="bg-black">
                <main>
                    {/* <HeroSection /> */}
                    <Slider />
                    <div className="py-16 md:py-24 container mx-auto px-6">
                        <section>
                            <SectionHeader title="Shop By Collection" subtitle="Curated picks from your favorite series" onviewallClick={()=>setviewall(prev => !prev)} />
                            <ProductGrid products={products} viewAll={viewall} />
                        </section>
                        <section className="mt-16 md:mt-24">
                            <SectionHeader title="Best Sellers" subtitle="Our most popular and top-rated items" onviewallClick={()=>setviewallbest(prev => !prev)} />
                            <ProductGrid products={bestSellers} viewAll={viewallbest} />
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
