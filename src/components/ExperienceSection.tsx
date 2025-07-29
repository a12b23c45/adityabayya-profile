import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Guby Roggers",
      location: "Remote",
      period: "Dec 2023 – Mar 2024",
      description: "Developed company's global website and worked on various data tools.",
      skills: ["React", "TypeScript", "CSS", "HTML"],
      logo: "🌐",
    },
    {
      title: "Blockchain Developer",
      company: "BlockseBlock",
      location: "Remote",
      period: "Jun 2025 – Aug 2025",
      description: "Worked on blockchain solutions and smart contract development.",
      skills: ["Blockchain", "Smart Contracts", "Solidity", "Web3"],
      logo: "⛓️",
    },
    {
      title: "Full Stack Developer",
      company: "Nexavise Pvt.",
      location: "Remote",
      period: "Jun 2025 – Jul 2025",
      description: "Developed full stack applications with modern technologies.",
      skills: ["React", "Node.js", "Database", "API Development"],
      logo: "💻",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across different domains and technologies
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-glow-sm transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-2xl">
                      {exp.logo}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center text-primary font-medium">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Card className="border-border bg-gradient-secondary p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="mailto:bayyaadi2@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;