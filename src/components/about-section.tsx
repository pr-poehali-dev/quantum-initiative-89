import { Card } from "@/components/ui/card"

const flavors = [
  {
    name: "Lemon Lime",
    tagline: "Crisp & zesty",
    gradient: "from-lime-400/30 to-green-500/10",
    emoji: "🍋",
  },
  {
    name: "Wild Berry",
    tagline: "Bold & juicy",
    gradient: "from-fuchsia-500/30 to-purple-600/10",
    emoji: "🫐",
  },
  {
    name: "Mango",
    tagline: "Sweet & tropical",
    gradient: "from-amber-400/30 to-orange-500/10",
    emoji: "🥭",
  },
]

export function AboutSection() {
  return (
    <section id="flavors" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Available Flavors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three bold tastes engineered to refresh — pick your charge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <Card
              key={index}
              className="glow-border overflow-hidden slide-up group"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div
                className={`flex items-center justify-center h-44 bg-gradient-to-br ${flavor.gradient} transition-transform duration-500 group-hover:scale-105`}
              >
                <span className="text-7xl drop-shadow-lg">{flavor.emoji}</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-card-foreground font-orbitron mb-1">{flavor.name}</h3>
                <p className="text-primary font-geist">{flavor.tagline}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
