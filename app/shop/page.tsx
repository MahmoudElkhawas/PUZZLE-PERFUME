'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import {
  Heart,
  ChevronDown,
  Truck,
  Award,
  Lock,
  Filter,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const shopCategories = [
  {
    id: 'Women',
    name: 'Women',
    image: '/woman-collection.jpg',
    description: 'Elegant fragrances for the modern woman',
  },
  {
    id: 'Men',
    name: 'Men',
    image: '/man-collection.jpg',
    description: 'Sophisticated scents for the modern man',
  },
  {
    id: 'Unisex',
    name: 'Unisex',
    image: '/unisex-collection.jpg',
    description: 'Versatile fragrances for everyone',
  },
];

const products = [
  {
    id: 1,
    name: 'Golden Essence',
    category: 'Women',
    price: 120,
    image: '/woman-collection.jpg',
  },
  {
    id: 2,
    name: 'Noir Elegance',
    category: 'Men',
    price: 135,
    image: '/man-collection.jpg',
  },
  {
    id: 3,
    name: 'Velvet Rose',
    category: 'Women',
    price: 115,
    image: '/woman-collection.jpg',
  },
  {
    id: 4,
    name: 'Oud Majesty',
    category: 'Unisex',
    price: 150,
    image: '/unisex-collection.jpg',
  },
  {
    id: 5,
    name: 'Citrus Breeze',
    category: 'Unisex',
    price: 110,
    image: '/unisex-collection.jpg',
  },
  {
    id: 6,
    name: 'Amber Glow',
    category: 'Unisex',
    price: 130,
    image: '/unisex-collection.jpg',
  },
  {
    id: 7,
    name: 'Midnight Oud',
    category: 'Men',
    price: 140,
    image: '/man-collection.jpg',
  },
  {
    id: 8,
    name: 'Blooming Petals',
    category: 'Women',
    price: 125,
    image: '/woman-collection.jpg',
  },
  {
    id: 9,
    name: 'Ocean Mist',
    category: 'Men',
    price: 118,
    image: '/man-collection.jpg',
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      return (
        (!selectedCategory ||
          product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;

      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;

      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;

      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-10 md:pb-14 px-4 md:px-8 bg-muted/30">
        <div className="max-width-container">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-light text-primary tracking-wide">
              Shop
            </h1>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/"
                className="hover:text-accent transition-colors duration-300"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-primary">Shop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 md:py-20 px-4 md:px-8">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {shopCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.name
                      ? null
                      : category.name
                  )
                }
                className="group relative overflow-hidden rounded-2xl animate-in fade-in slide-in-from-bottom-6 duration-700"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="relative h-56 md:h-80 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-light text-white uppercase tracking-[0.2em]">
                      {category.name}
                    </h3>

                    <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {category.description}
                    </p>
                  </div>

                  {/* Active Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md border transition-all duration-300 ${
                        selectedCategory === category.name
                          ? 'bg-accent text-white border-accent'
                          : 'bg-white/80 text-primary border-white/50 group-hover:bg-accent group-hover:text-white group-hover:border-accent'
                      }`}
                    >
                      {category.name}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-10 md:py-20 px-4 md:px-8">
        <div className="max-width-container">
          {/* Mobile Top Bar */}
          <div className="md:hidden flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} Results
            </p>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl bg-white hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Filter size={18} />
              Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside
              className={`${
                showFilters ? 'block' : 'hidden'
              } md:block animate-in fade-in slide-in-from-left-5 duration-500`}
            >
              <div className="sticky top-24 space-y-8 bg-white border border-border rounded-2xl p-6 shadow-sm">
                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between">
                  <h2 className="text-lg font-medium text-primary">
                    Filters
                  </h2>

                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Category */}
                <div>
                  <h3 className="text-lg font-medium text-primary mb-4">
                    Category
                  </h3>

                  <div className="space-y-3">
                    {['Women', 'Men', 'Unisex'].map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategory === cat}
                          onChange={() =>
                            setSelectedCategory(
                              selectedCategory === cat ? null : cat
                            )
                          }
                          className="accent-accent w-4 h-4"
                        />

                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-lg font-medium text-primary mb-4">
                    Price Range
                  </h3>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <input
                        type="number"
                        min={0}
                        max={500}
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            Number(e.target.value),
                            priceRange[1],
                          ])
                        }
                        className="w-full px-3 py-2 border border-border rounded-xl bg-background focus:outline-none focus:border-accent transition-colors"
                        placeholder="Min"
                      />

                      <input
                        type="number"
                        min={0}
                        max={500}
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            Number(e.target.value),
                          ])
                        }
                        className="w-full px-3 py-2 border border-border rounded-xl bg-background focus:outline-none focus:border-accent transition-colors"
                        placeholder="Max"
                      />
                    </div>

                    <p className="text-sm text-muted-foreground">
                      ${priceRange[0]} - ${priceRange[1]}
                    </p>
                  </div>
                </div>

                {/* Apply */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden w-full py-3 rounded-xl bg-accent text-white uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02]"
                >
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* Products */}
            <div className="md:col-span-3">
              {/* Top Bar */}
              <div className="hidden md:flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} Products
                </p>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-4 py-3 pr-10 border border-border rounded-xl bg-white text-sm focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="featured">
                      Sort by: Featured
                    </option>

                    <option value="price-low">
                      Price: Low to High
                    </option>

                    <option value="price-high">
                      Price: High to Low
                    </option>

                    <option value="newest">Newest</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group animate-in fade-in slide-in-from-bottom-5 duration-700"
                    style={{
                      animationDelay: `${index * 80}ms`,
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl mb-4 bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-44 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                      {/* Wishlist */}
                      <button
                        onClick={() =>
                          toggleFavorite(product.id)
                        }
                        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Heart
                          size={18}
                          className={`transition-all duration-300 ${
                            favorites.includes(product.id)
                              ? 'fill-accent text-accent'
                              : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                        {product.category}
                      </p>

                      <h3 className="text-base md:text-lg font-light text-primary transition-colors duration-300 group-hover:text-accent">
                        {product.name}
                      </h3>

                      <p className="text-lg font-medium text-primary">
                        ${product.price}
                      </p>
                    </div>

                    {/* Button */}
                    <button className="w-full mt-4 py-3 rounded-xl border border-primary text-primary uppercase tracking-wider text-xs font-medium hover:bg-primary hover:text-white hover:scale-[1.02] transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-muted/20">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: 'Free Shipping',
                desc: 'On all orders over $100',
              },
              {
                icon: Award,
                title: 'Premium Quality',
                desc: 'Luxury you can trust',
              },
              {
                icon: Lock,
                title: 'Secure Payment',
                desc: '100% secure checkout',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="text-center space-y-4 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-5"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto group">
                    <Icon
                      size={30}
                      className="text-accent"
                    />
                  </div>

                  <h3 className="text-lg font-medium text-primary">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}