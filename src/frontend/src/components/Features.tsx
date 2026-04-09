import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Notes",
    description: "Organize your study notes efficiently.",
    badge: "Popular",
  },
  {
    icon: Clock,
    title: "Timer",
    description: "Use built-in timer for focused study sessions.",
    badge: "Focus",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    description: "Smart tools to help you learn faster.",
    badge: "Beta",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Features
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-body max-w-xl mx-auto">
            Purpose-built tools designed to help you study smarter, not harder.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              data-ocid={`feature-card-${i}`}
              className="group relative bg-card border border-border/50 rounded-2xl p-6 shadow-card hover:shadow-hover hover:-translate-y-1 hover:border-primary/40 transition-smooth cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <feat.icon
                    className="w-5 h-5 text-primary"
                    strokeWidth={1.75}
                  />
                </div>
                <Badge className="text-[10px] font-semibold bg-primary/15 text-primary border-primary/30 px-2 py-0.5">
                  {feat.badge}
                </Badge>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {feat.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
