"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
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

  const blogPosts = [
    {
      id: 1,
      title: "How to Build a High-Performance React Application",
      excerpt: "Learn the best practices for creating performant React applications with code splitting, memoization, and more.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "React",
      slug: "build-high-performance-react-app"
    },
    {
      id: 2,
      title: "The Complete Guide to Next.js 13 App Router",
      excerpt: "Explore the new App Router in Next.js 13 and learn how to leverage its power for better application architecture.",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "June 22, 2023",
      readTime: "10 min read",
      category: "Next.js",
      slug: "complete-guide-nextjs-13-router"
    },
    {
      id: 3,
      title: "Creating Accessible Web Applications: A Developer's Guide",
      excerpt: "Learn how to make your web applications accessible to everyone with practical tips and techniques.",
      image: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "July 10, 2023",
      readTime: "12 min read",
      category: "Accessibility",
      slug: "creating-accessible-web-applications"
    }
  ];

  return (
    <section id="blog" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            My Blog
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Articles
          </h3>
          <p className="text-muted-foreground">
            I share my knowledge and experiences through articles covering web development, UX design, and industry trends.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={fadeIn} className="group">
              <div className="rounded-lg overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 hover:bg-primary">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground gap-4 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t">
                    <Button variant="ghost" size="sm" className="group p-0" asChild>
                      <Link href={`/blog/${post.slug}`} className="flex items-center font-medium">
                        Read Article 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}