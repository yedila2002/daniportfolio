export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-white border-t border-muted">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-display text-foreground mb-1">Yenny Daniela</h3>
          <p className="text-sm text-muted-foreground font-body italic">&quot;Multidisciplinary Digital Marketing & Analytics professional.&quot;</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-body text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground font-body">
            Built with ❤️ by Daniela — 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
