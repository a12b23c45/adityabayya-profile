import { Brain, Code, BarChart, Smartphone, Database, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Custom ML solutions including classification, detection, and recommender systems with end-to-end workflows.",
      features: [
        "Computer Vision & Image Processing",
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Neural Network Development",
        "Model Deployment & Optimization"
      ],
      color: "bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Full-stack web applications with responsive frontend and robust Supabase backend integration.",
      features: [
        "React & TypeScript Development",
        "Responsive UI/UX Design",
        "Backend API Development",
        "Database Design & Management",
        "Authentication & Security"
      ],
      color: "bg-green-500/10 border-green-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Data Analysis",
      description: "Comprehensive data analytics including geospatial analysis and interactive dashboard development.",
      features: [
        "Geospatial Data Analysis",
        "Statistical Analysis & Modeling",
        "Data Visualization & Dashboards",
        "Business Intelligence Solutions",
        "Performance Metrics & KPIs"
      ],
      color: "bg-purple-500/10 border-purple-500/20",
      iconColor: "text-purple-400",
    },
  ];

  const additionalServices = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Scalable database architecture and optimization",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Design",
      description: "Responsive applications for all devices",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "High-performance application development",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services & <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to bring your ideas to life
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`border-2 ${service.color} hover:shadow-glow-sm transition-all duration-300 group`}>
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 ${service.iconColor}`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Additional <span className="text-primary">Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-border bg-card p-6 text-center hover:shadow-glow-sm transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <Card className="border-border bg-gradient-secondary p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            My Development Process
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            From concept to deployment, I follow a structured approach to ensure 
            high-quality deliverables that meet your specific requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding requirements" },
              { step: "02", title: "Design", desc: "Planning & architecture" },
              { step: "03", title: "Development", desc: "Building & testing" },
              { step: "04", title: "Deployment", desc: "Launch & optimization" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-3">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={scrollToContact}
            >
              Start a Project
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('mailto:bayyaadi2@gmail.com', '_blank')}
            >
              Discuss Your Ideas
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;