export default function KontakLoading() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero skeleton */}
      <section className="relative overflow-hidden border-b border-white/5 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="h-3 w-24 bg-[#6F4E37]/30 rounded animate-pulse mx-auto" />
          <div className="mt-4 h-16 w-48 bg-[#F5F2ED]/10 rounded animate-pulse mx-auto" />
          <div className="mx-auto mt-5 h-1.5 w-20 bg-[#6F4E37]/30 rounded" />
        </div>
      </section>

      {/* Contact cards skeleton */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <div className="h-10 w-48 bg-[#F5F2ED]/10 rounded animate-pulse mx-auto" />
            <div className="mx-auto mt-4 h-1.5 w-20 bg-[#6F4E37]/30 rounded" />
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex h-full flex-col items-center rounded-3xl border border-[#6F4E37]/20 bg-[#1A1A1A] p-8 sm:p-10 animate-pulse"
              >
                <div className="mb-6 h-16 w-16 rounded-full bg-[#6F4E37]/20" />
                <div className="h-4 w-24 bg-[#F5F2ED]/10 rounded" />
                <div className="mt-3 h-16 w-full bg-[#F5F2ED]/5 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
