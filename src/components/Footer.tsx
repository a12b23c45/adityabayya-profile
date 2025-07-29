import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Aditya Vardhan Bayya
            </h3>
            <p className="text-muted-foreground">
              Innovating through Code and Data
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/a12b23c45"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/aditya-vardhan-bayya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:bayyaadi2@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center">
              © {currentYear} Aditya Vardhan Bayya. Made with{' '}
              <Heart className="h-4 w-4 mx-1 text-red-400" /> and lots of code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;