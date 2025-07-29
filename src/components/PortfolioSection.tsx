import { ExternalLink, Github, Globe, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Onboarding Portal",
      description: "A comprehensive onboarding platform designed to streamline user registration and welcome processes with modern UI/UX.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      liveUrl: "https://onboarding-portal-ashen.vercel.app/",
      githubUrl: "#",
      category: "Web Development",
      featured: true,
    },
    {
      title: "Uniconnect",
      description: "A university connection platform that brings students, faculty, and resources together in one unified ecosystem.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "https://www.uni-connect.live/",
      githubUrl: "#",
      category: "Full Stack",
      featured: true,
    },
    {
      title: "Machine Learning Projects",
      description: "Collection of ML projects including brain tumor detection, cardiovascular analysis, and computer vision applications.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
      liveUrl: "#",
      githubUrl: "https://github.com/a12b23c45/PROJECTS",
      category: "Machine Learning",
      featured: true,
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time analytics and geospatial data visualization.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Analysis",
    },
    {
      title: "Soccer Player Tracking",
      description: "Computer vision system for player re-identification in soccer videos using advanced ML algorithms.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "YOLO", "Deep Learning"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Computer Vision",
    },
    {
      title: "Blockchain DApp",
      description: "Decentralized application for secure transactions with smart contract integration and Web3 functionality.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Blockchain",
    },
  ];

  const categories = ["All", "Web Development", "Full Stack", "Machine Learning", "Data Analysis", "Computer Vision", "Blockchain"];
  
  return (
    <section id="portfolio" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions across web development, machine learning, and data analytics
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={index === 0 ? "default" : "secondary"}
              className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                index === 0 
                  ? "bg-gradient-primary text-primary-foreground hover:shadow-glow" 
                  : "hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className={`border-border bg-card overflow-hidden hover:shadow-glow-sm transition-all duration-300 group ${
              project.featured ? "lg:col-span-1" : ""
            }`}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.liveUrl !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="group/btn"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        Live
                        <ExternalLink className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-border bg-gradient-secondary p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want to See More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://github.com/a12b23c45', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discuss a Project
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;