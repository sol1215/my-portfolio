import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import catalogData from "../data/catalog.json";

// 同样告诉主页，这是什么数据
type Category = {
  id: string;
  name: string;
  tagline: string;
  coverImage: string;
};

const typedCatalogData = catalogData as Category[];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {typedCatalogData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} 高教社汽车 · 保持克制
      </footer>
    </main>
  );
}