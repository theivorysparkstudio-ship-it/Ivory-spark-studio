import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import BlogPreview from '@/components/BlogPreview';
import Journey from '@/components/Journey';
import { getProducts, getBlogPosts } from '@/lib/airtable';

export const revalidate = 60;

export default async function Home() {
  const products = await getProducts();
  const allPosts = await getBlogPosts();
  const recentPosts = allPosts.slice(0, 2);

  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Products products={products} />
      <BlogPreview initialPosts={recentPosts} />
      <Journey />
      <Contact />
    </div>
  );
}
