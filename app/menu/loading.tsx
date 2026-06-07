export default function MenuLoading() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero skeleton */}
      <section className="relative overflow-hidden border-b border-white/5 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-3 w-24 bg-[#6F4E37]/30 rounded animate-pulse" />
          <div className="mt-4 h-16 w-64 bg-[#F5F2ED]/10 rounded animate-pulse" />
          <div className="mt-5 h-1.5 w-20 bg-[#6F4E37]/30 rounded" />
          <div className="mt-6 h-20 w-full max-w-lg bg-[#F5F2ED]/5 rounded animate-pulse" />
        </div>
      </section>

      {/* Menu grid skeleton */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <div className="h-12 w-32 bg-[#F5F2ED]/10 rounded animate-pulse" />
            <div className="mt-4 h-1.5 w-20 bg-[#6F4E37]/30 rounded" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-[#6F4E37]/20 bg-[#1A1A1A] animate-pulse"
              >
                <div className="aspect-square bg-[#0A0A0A]" />
                <div className="px-4 py-4 sm:px-5 sm:py-5">
                  <div className="h-4 bg-[#F5F2ED]/10 rounded mx-auto w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
