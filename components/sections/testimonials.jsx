"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "John is an exceptional frontend developer. His attention to detail and ability to translate designs into beautiful, functional interfaces is remarkable. He delivered our project ahead of schedule and exceeded all expectations.",
      author: "Emily Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      quote: "Working with John on our e-commerce platform was a brilliant experience. His technical skills are top-notch, and he has an incredible eye for user experience. Our conversion rates improved by 40% after the redesign.",
      author: "Mark Williams",
      position: "Marketing Director, ShopSmart",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      quote: "John transformed our outdated website into a modern, responsive platform that our customers love. His expertise in React and Next.js was evident throughout the project, and he was always available to answer questions.",
      author: "Sophia Chen",
      position: "Product Manager, InnovateTech",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      quote: "We hired John to optimize our web application's performance, and the results were outstanding. Page load times decreased by 70%, and the overall user experience improved significantly. Highly recommended!",
      author: "David Rodriguez",
      position: "CTO, DataFlow Systems",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction === 'left' ? -300 : 300,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction === 'left' ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };
  
  return (
    <section id="testimonials" className="py-20 md:py-28 scroll-mt-20 bg-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Client Feedback
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What My Clients Say
          </h3>
          <p className="text-muted-foreground">
            I value every client relationship and strive to exceed expectations on every project.
            Here's what some of my clients have to say.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <AnimatePresence custom={currentIndex === 0 ? 'right' : 'left'} mode="wait">
            <motion.div
              key={currentIndex}
              custom={currentIndex === 0 ? 'right' : 'left'}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative"
            >
              <Card className="border-none shadow-xl bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="absolute -top-6 left-10 text-primary">
                    <Quote className="h-12 w-12 opacity-50" />
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg md:text-xl italic mb-4">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg">{testimonials[currentIndex].author}</span>
                        <span className="text-sm text-muted-foreground">{testimonials[currentIndex].position}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}