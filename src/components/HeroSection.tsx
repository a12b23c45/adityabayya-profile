import { ArrowDown, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-foreground">Aditya Vardhan</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Bayya
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium mb-6">
                Innovating through Code and Data
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A passionate Computer Science student specializing in Full Stack Development, 
                Machine Learning, and Data Analytics. Turning ideas into impactful solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('portfolio')}
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('contact')}
              >
                <Download className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 animate-pulse" />
                
                {/* Profile image */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                  <img
                    src="https://i.postimg.cc/SxLdqS77/adiprof.jpg"
                    alt="Aditya Vardhan Bayya"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-bounce delay-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;