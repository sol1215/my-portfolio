import Link from "next/link";

interface Category {
  id: string;
  name: string;
  tagline: string;
  coverImage: string;
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/category/${category.id}`} className="block group">
      {/* 替换为 glass-card 类 */}
      <div className="glass-card rounded-[28px] overflow-hidden cursor-pointer h-full flex flex-col p-2">
        {/* 封面图内嵌圆角，增加精致感 */}
        <div className="h-48 overflow-hidden rounded-[20px] bg-white/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={category.coverImage} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {/* 内容 */}
        <div className="p-5 flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-1 text-brand-dark">{category.name}</h3>
          <p className="text-brand-dark/60 text-sm leading-relaxed line-clamp-2">{category.tagline}</p>
        </div>
      </div>
    </Link>
  );
}