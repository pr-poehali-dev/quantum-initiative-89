import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Fast Acting",
    description: "Dissolves on your tongue and hits your system in seconds — no waiting for a drink to kick in.",
    icon: "Zap",
    badge: "Instant",
  },
  {
    title: "Sugar Free",
    description: "All the energy, zero sugar and zero crash. Clean fuel powered by B6, B12 and taurine.",
    icon: "Leaf",
    badge: "0g Sugar",
  },
  {
    title: "Pocket Size",
    description: "A sleek metal tin that slips into any pocket or bag. Your energy, ready anywhere.",
    icon: "Smartphone",
    badge: "Portable",
  },
  {
    title: "No Water Needed",
    description: "No cans, no bottles, no mixing. Just one strip whenever and wherever you need a boost.",
    icon: "Droplets",
    badge: "Water Free",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Why VoltTabs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Energy redesigned for life on the move — clean, fast and effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}