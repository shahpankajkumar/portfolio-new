"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-10 bg-gradient-to-tr from-primary to-cyan-500 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-10 bg-gradient-to-tr from-purple-500 to-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate on creating something amazing together. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/#contact">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#projects">
                View My Work
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}