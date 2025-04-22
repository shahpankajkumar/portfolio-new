"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectsData = [
    {
      id: 1,
      title: "Donation Marketing Cloud (DMC)",
      description: "A comprehensive donation management system built with React.js and Node.js. Implemented secure user authentication and integrated with AWS services.",
      image: "https://img.freepik.com/premium-vector/word-cloud-background-concept-fundraising-charity-funding-philanthropy-donation-support-charitable-contribution-vector-illustration_616200-4068.jpg",
      category: ["all"],
      tags: ["React.js", "Node.js", "AWS", "Material UI", "Ant Design"],
      company: "Doyenhub Software Solution Pvt Ltd",
      featured: true
    },
    {
      id: 2,
      title: "Explodely Editor",
      description: "A drag and drop checkout page customizer that allows users to create custom checkout pages for their website checkout flow using Grapes.js and Next.js.",
      image: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["all"],
      tags: ["Next.js", "Grapes.js"],
      company: "Doyenhub Software Solution Pvt Ltd",
      featured: true
    },
    {
      id: 3,
      title: "Cineinvest",
      description: "A platform connecting film creators and investors, enabling efficient project funding and investment opportunities in innovative films with secure transactions.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["all"],
      tags: ["React.js"],
      company: "Doyenhub Software Solution Pvt Ltd",
      featured: true
    },
    {
      id: 4,
      title: "Keys To My Wishes",
      description: "A wish management system with secure user authentication including Google and Facebook login integration.",
      image: "https://images.pexels.com/photos/7319074/pexels-photo-7319074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["all"],
      tags: ["React.js", "OAuth"],
      company: "Pretech Solution",
      featured: false
    }
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category.includes("all"));

  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h3>
          <p className="text-muted-foreground">
            Here are some of the key projects I've worked on throughout my career.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            onClick={() => setFilter("all")}
            className="min-w-[90px]"
          >
            All
          </Button>
          <Button 
            variant={filter === "web" ? "default" : "outline"} 
            onClick={() => setFilter("web")}
            className="min-w-[90px]"
          >
            Web
          </Button>
          <Button 
            variant={filter === "frontend" ? "default" : "outline"} 
            onClick={() => setFilter("frontend")}
            className="min-w-[90px]"
          >
            Frontend
          </Button>
          <Button 
            variant={filter === "fullstack" ? "default" : "outline"} 
            onClick={() => setFilter("fullstack")}
            className="min-w-[90px]"
          >
            Fullstack
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={fadeIn}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary/90 hover:bg-primary">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <Badge variant="outline" className="mb-2">{project.company}</Badge>
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}