"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[55vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* 装饰性虚化光晕，增加背景层次感，类似苹果壁纸的效果 */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-light/40 rounded-full blur-[100px] -z-10 mix-blend-multiply" />

      {/* 核心文案区域 */}
      <div className="animate-fade-up text-center max-w-3xl z-10 flex flex-col items-center mt-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1c2d37] mb-4 flex items-center justify-center gap-3">
          高教社汽车书目 <span className="text-3xl md:text-5xl origin-bottom-right animate-wave">👋</span>
        </h1>
        <p className="text-base md:text-xl text-brand-dark/70 mb-10 font-medium tracking-wide">
          查书 · 看书 · 用书
        </p>

        {/* 仿参考图的轻质感下载按钮 */}
        <a 
          href="/catalog.pdf" // 请确保 public 文件夹下有这个 PDF 文件
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-lg border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] rounded-full text-[#1c2d37] font-semibold hover:bg-white hover:shadow-md transition-all active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span className="text-sm md:text-base">点击获取汽车电子专业目录</span>
        </a>
      </div>

      {/* 向下滚动探索提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#1c2d37]">Explore Modules</span>
        <svg className="animate-bounce" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}