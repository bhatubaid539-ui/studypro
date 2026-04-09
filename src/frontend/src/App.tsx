import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TodoList } from "@/components/TodoList";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Toaster richColors position="top-right" />
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Features />
        <TodoList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
