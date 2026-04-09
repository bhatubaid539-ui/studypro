import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    toast.success("Message sent! We'll be in touch soon.");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 mb-4">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground font-body">
            Email:{" "}
            <a
              href="mailto:example@email.com"
              className="text-primary hover:underline transition-smooth"
            >
              example@email.com
            </a>
          </p>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border/50 rounded-2xl p-6 shadow-card space-y-4"
        >
          <div>
            <label
              htmlFor="contact-email-input"
              className="block text-sm font-medium font-body text-foreground mb-1.5"
            >
              Email
            </label>
            <Input
              id="contact-email-input"
              data-ocid="contact-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-border/60 focus:border-primary placeholder:text-muted-foreground/50 font-body"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message-input"
              className="block text-sm font-medium font-body text-foreground mb-1.5"
            >
              Message
            </label>
            <textarea
              id="contact-message-input"
              data-ocid="contact-message"
              placeholder="Tell us what's on your mind..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-smooth resize-none"
            />
          </div>
          <Button
            data-ocid="contact-submit"
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:opacity-90 hover:shadow-[0_0_16px_oklch(0.7_0.18_262_/_0.4)] transition-smooth font-semibold"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
