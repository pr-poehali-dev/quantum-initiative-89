import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Step 1 — Open & Peel",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Pop open your sleek metal tin and peel out a single VoltTabs strip. No spills, no mess —
            just energy ready in your hand whenever you need it.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Slim, pocket-friendly tin
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              One precise dose per strip
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2 — Place on Tongue",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Place the strip on your tongue and let it dissolve in seconds. No water, no chewing —
            the active ingredients absorb fast for a near-instant boost.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Dissolves in under 10 seconds
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Crisp, refreshing flavor
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 3 — Feel the Energy",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Within minutes, caffeine, taurine and B-vitamins deliver clean, focused energy —
            without the sugar spike or the crash that follows.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Sharper focus and alertness
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Smooth energy, no jitters
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Three effortless steps from tin to instant energy — no water, no waiting, no crash.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}