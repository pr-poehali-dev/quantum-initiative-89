import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const ingredients = [
  {
    name: "Caffeine",
    amount: "100 mg",
    description: "Plant-derived caffeine for fast, focused alertness.",
    icon: "Zap",
  },
  {
    name: "Vitamin B6",
    amount: "2 mg",
    description: "Supports energy metabolism and a healthy nervous system.",
    icon: "Activity",
  },
  {
    name: "Vitamin B12",
    amount: "2.5 mcg",
    description: "Helps reduce tiredness and fight fatigue.",
    icon: "Battery",
  },
  {
    name: "Taurine",
    amount: "40 mg",
    description: "Amino acid that supports endurance and mental clarity.",
    icon: "Sparkles",
  },
]

export function TechnologySection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Clean Ingredients</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every strip is precisely dosed — nothing you don't need, everything you do
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item, index) => (
            <Card
              key={index}
              className="glow-border p-6 text-center slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-5 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                <Icon name={item.icon} size={28} className="text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary font-orbitron mb-1">{item.amount}</p>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
