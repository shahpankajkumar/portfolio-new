"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownToLine, ArrowRight, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-20 bg-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div 
            className="w-full md:w-1/2 lg:w-5/12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-cyan-500/10 rounded-lg"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/30 shadow-xl">
                <img 
                  src="https://cdn.prod.website-files.com/659f77ad8e06050cc27ed531/65ef63f6bd30ab838939a4ae_Developer%20productivity%20tools%202024.webp" 
                  alt="Pankaj Shah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-8 top-1/4 bg-card shadow-lg p-4 rounded-lg">
                <Badge className="bg-primary hover:bg-primary">3+ Years Experience</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 lg:w-7/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="space-y-2 mb-6">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Crafting digital experiences with passion and precision</h3>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Softwere developer with 3+ years of experience building modern, 
                responsive web applications. I specialize in React, Next.js, and UI design, 
                with a focus on creating intuitive user experiences that solve real problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                My journey in web development began with a passion for blending creativity and technology. 
                Today, I collaborate with businesses and startups to transform their ideas into elegant, 
                efficient digital solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Professional Experience</h4>
                    <p className="text-sm text-muted-foreground">Softwere Developer at Doyenhub Software Solution Pvt Ltd</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-muted-foreground">Master of Computer Application(MCA), Veer Narmad South Gujarat University</p>
                  </div>
                </CardContent>
              </Card>
              {/* <Card>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Certifications</h4>
                    <p className="text-sm text-muted-foreground">AWS Certified Developer, Google UX Design</p>
                  </div>
                </CardContent>
              </Card> */}
              <Card>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">Always exploring new technologies and methodologies</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="https://docs.google.com/document/d/1vH9Mz35VVKi30eReeoaGYjTUu5XtiFRpYUd2hNZ144M/edit?usp=sharing" target="_blank" download>
                  Download Resume <ArrowDownToLine className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}