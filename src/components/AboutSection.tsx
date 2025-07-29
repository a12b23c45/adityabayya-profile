import { GraduationCap, Award, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const education = [
    {
      institution: "Mahindra University",
      degree: "B.Tech, Computer Science",
      period: "2022 – 2026",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      institution: "St. Andrews School",
      degree: "Class 10",
      period: "2019 – 2020",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const achievements = [
    {
      title: "Research Presentation",
      description: "Brain tumor detection at Amity University",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "International Conference",
      description: "Cardiovascular analysis - Taylor & Francis Publication",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Computer Vision Project",
      description: "Player re-identification in soccer videos",
      icon: <Target className="h-5 w-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging technology to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4 leading-relaxed">
                I am a passionate and driven Computer Science student with a strong interest in 
                <span className="text-primary font-medium"> Full Stack Development</span>, 
                <span className="text-primary font-medium"> Machine Learning</span>, and 
                <span className="text-primary font-medium"> Data Analytics</span>.
              </p>
              <p className="mb-4 leading-relaxed">
                I have presented research on brain tumor detection at Amity University, 
                cardiovascular analysis at an Indonesian conference for Taylor & Francis Publication, 
                and worked on player re-identification in soccer videos.
              </p>
              <p className="mb-6 leading-relaxed">
                I've participated in workshops organized by ISRO and contributed to cancer awareness 
                initiatives with the Mahesh Babu Foundation. My goal is to leverage technology to 
                solve impactful real-world problems through innovation and collaboration.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">{achievement.title}</h5>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-glow-sm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {edu.institution}
                        </h4>
                        <p className="text-primary font-medium mb-2">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="border-border bg-card text-center p-4">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years of Study</div>
              </Card>
              <Card className="border-border bg-card text-center p-4">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Research Papers</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;