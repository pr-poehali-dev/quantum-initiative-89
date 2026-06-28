import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export const Hero3DWebGL = () => {
  const titleWords = "Instant Energy".split(" ")
  const subtitle = "Anywhere."
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Glow backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md">
            <Icon name="Zap" size={16} className="text-primary" />
            <span className="text-sm font-geist text-primary">Caffeine Energy Strips</span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold font-orbitron text-white leading-[1.05] mb-6">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 ${index < visibleWords ? "fade-in" : ""}`}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </span>
            ))}
            <span
              className={`block bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent ${subtitleVisible ? "fade-in-subtitle" : ""}`}
              style={{
                animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
                opacity: subtitleVisible ? undefined : 0,
              }}
            >
              {subtitle}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-geist max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Fast-dissolving caffeine strips powered by vitamins B6, B12 and taurine.
            No water, no cans, no crash — just clean energy that hits in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-[0_0_30px_-5px_hsl(var(--primary))]"
            >
              Buy Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-white hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Product image */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full" />
          <img
            src="https://cdn.poehali.dev/projects/4ae448d3-9eb7-470e-8ec5-a97bff88cee1/files/5a7c8bf0-24c8-48b9-ac6e-83048ebde78a.jpg"
            alt="VoltTabs caffeine energy strips tin"
            className="relative z-10 w-full max-w-md rounded-3xl border border-primary/20 shadow-2xl slide-up"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero3DWebGL