"use client";

import { motion } from "framer-motion";
import { Progress } from "antd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const technicalSkills = [
    { name: "React / Next.js", value: 95 },
    { name: "JavaScript / TypeScript", value: 90 },
    { name: "HTML5 / CSS3", value: 95 },
    { name: "Tailwind CSS", value: 40 },
    { name: "Redux / Context API", value: 85 },
    { name: "RESTful APIs", value: 85 },
    { name: "GraphQL", value: 60 },
    { name: "Node.js", value: 75 },
    { name: "AWS / Vercel / Netlify", value: 75 },
    { name: "Git / GitHub", value: 90 },
  ];

  const designSkills = [
    { name: "Responsive Design", value: 95 },
    { name: "CSS Animation", value: 75 },
    { name: "Accessibility", value: 80 },
    { name: "HTML5 / CSS3", value: 95 },
    { name: "Tailwind CSS", value: 40 },
  ];

  const softSkills = [
    { name: "Problem Solving", value: 90 },
    { name: "Communication", value: 85 },
    { name: "Time Management", value: 80 },
    { name: "Team Collaboration", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Project Management", value: 80 },
    { name: "Attention to Detail", value: 95 },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            My Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h3>
          <p className="text-muted-foreground">
            I've accumulated a diverse set of skills, tools, and technologies throughout my journey as a developer.
            Below is a breakdown of my technical expertise and abilities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="design">Design Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical">
              <motion.div 
                className="grid gap-5"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {technicalSkills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeIn} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.value}%</span>
                    </div>
                    <Progress percent={skill.value} showInfo={false} strokeColor="linear-gradient(to right, #3b82f6, #06b6d4)" />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="design">
              <motion.div 
                className="grid gap-5"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {designSkills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeIn} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.value}%</span>
                    </div>
                    <Progress percent={skill.value} showInfo={false} strokeColor="linear-gradient(to right, #8b5cf6, #3b82f6)" />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="soft">
              <motion.div 
                className="grid gap-5"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {softSkills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeIn} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.value}%</span>
                    </div>
                    <Progress percent={skill.value} showInfo={false} strokeColor="linear-gradient(to right, #f59e0b, #3b82f6)" />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[
            "React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3",
            "SCSS", "Node.js", "Redux", "GraphQL", "Git", "AWS"
          ].map((tech) => (
            <motion.div
              key={tech}
              variants={fadeIn}
              className="p-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}