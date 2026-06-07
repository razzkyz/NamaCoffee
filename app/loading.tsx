export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center">
        {/* Logo loading */}
        <div className="mb-8 animate-pulse">
          <div className="leading-none">
            <span className="block text-6xl font-black tracking-tighter text-[#F5F2ED]">
              NA
            </span>
            <span className="block text-6xl font-black tracking-tighter text-[#F5F2ED]">
              MA
            </span>
          </div>
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-[#6F4E37] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-[#6F4E37] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-[#6F4E37] rounded-full animate-bounce"></div>
        </div>
        
        <p className="mt-4 text-xs text-[#F5F2ED]/50 uppercase tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  );
}
