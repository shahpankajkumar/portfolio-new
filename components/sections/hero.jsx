"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative pt-20 lg:pt-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full opacity-20 bg-gradient-to-br from-cyan-500 to-blue-600 blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-20 bg-gradient-to-tr from-purple-500 to-pink-600 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-3 py-1 mb-3 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                <span>Available for new projects</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Hi, I'm Pankaj Shah
                <span className="block mt-2 text-primary">Softwere Developer</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg">
               I am specialize in building robust web applications using React.js and Node.js, leveraging their full stack capabilities to create efficient and scalable solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 mt-8"
            >
              <div className="text-sm text-muted-foreground">Follow me:</div>
              <div className="flex gap-4">
                <Link href="https://github.com/shahpankajkumar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/shah-pankaj-7a729018a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative order-first lg:order-last mx-auto lg:mx-0"
          >
            <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-cyan-500 opacity-10 blur-2xl" />
              <div className="relative w-full h-full overflow-hidden rounded-3xl border border-border/40 bg-card/30 backdrop-blur-sm p-4">
                <img
                  src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="John Doe"
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 backdrop-blur-md rounded-2xl p-4 border border-primary/20 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">3+</span>
                  <span className="text-sm text-muted-foreground">Years of experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}