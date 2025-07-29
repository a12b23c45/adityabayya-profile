import { Code, Globe, Database, Brain, Github, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript"],
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "CSS", "React", "Tailwind CSS", "Django"],
      color: "bg-green-500/20 text-green-400 border-green-500/30",
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Supabase", "PostgreSQL", "Node.js", "API Development"],
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
    {
      title: "AI/ML & Data",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Machine Learning", "Data Analytics", "Computer Vision", "Neural Networks"],
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Ubuntu/Linux", "VS Code", "Docker"],
      color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      title: "Competitive Programming",
      icon: <Github className="h-6 w-6" />,
      skills: ["LeetCode", "Codility", "Algorithms", "Data Structures"],
      color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    },
  ];

  const domains = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development",
      progress: 90,
    },
    {
      title: "Data Analytics",
      description: "Data processing and visualization",
      progress: 85,
    },
    {
      title: "Machine Learning",
      description: "AI model development and deployment",
      progress: 80,
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design",
      progress: 75,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-glow-sm transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    {category.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`${category.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Domain Expertise */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Domain <span className="text-primary">Expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="border-border bg-card p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-foreground">{domain.title}</h4>
                    <span className="text-sm text-primary font-medium">{domain.progress}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{domain.description}</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${domain.progress}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "15+", label: "Technologies" },
            { number: "10+", label: "Projects" },
            { number: "3+", label: "Years Learning" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <Card key={index} className="border-border bg-gradient-secondary text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;