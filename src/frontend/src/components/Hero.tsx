import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="home"
      className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-24 min-h-[90vh] overflow-hidden bg-background"
      style={{
        background:
          "linear-gradient(160deg, #020617 0%, #0f172a 55%, #0c1628 100%)",
      }}
    >
      {/* Decorative radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.70 0.18 262) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <span className="inline-flex items-center gap-1.5 mb-6 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold font-body tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          Your all-in-one study platform
        </span>

        <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight text-foreground mb-6">
          Welcome to Pro Study Website.
          <br />
          <span className="text-primary">Boost Your Productivity.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 font-body leading-relaxed">
          Your all-in-one platform for learning, managing tasks, and improving
          productivity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            type="button"
            data-ocid="hero-cta-primary"
            size="lg"
            className="bg-primary text-primary-foreground hover:opacity-90 hover:shadow-[0_0_24px_oklch(0.7_0.18_262_/_0.5)] transition-smooth px-8 font-semibold font-body text-base"
            onClick={() => scrollTo("features")}
          >
            Explore
          </Button>
          <Button
            type="button"
            data-ocid="hero-cta-secondary"
            size="lg"
            variant="outline"
            className="border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-smooth px-8 font-body text-base"
            onClick={() => scrollTo("todo")}
          >
            Start Your Tasks
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
