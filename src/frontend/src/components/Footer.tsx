export function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer className="bg-[#020617] border-t border-border/40 py-8 px-6 text-center">
      <p className="text-muted-foreground text-sm font-body">
        © {year} StudyPro. All rights reserved. Built with love using{" "}
        <a
          href={utm}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline transition-smooth"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
