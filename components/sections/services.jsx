"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Code, 
  PenTool, 
  Smartphone, 
  Zap, 
  Search, 
  LineChart, 
  ArrowRight
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("web");

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

  const services = {
    web: [
      {
        title: "Web Development",
        description: "Building modern, responsive websites and web applications using React, Next.js, and other cutting-edge technologies.",
        icon: <Code className="h-12 w-12 text-primary" />,
        features: ["Custom web application development", "E-commerce websites", "Progressive Web Apps (PWAs)", "Content Management Systems"]
      },
      {
        title: "Frontend Development",
        description: "Creating beautiful, intuitive user interfaces with clean, maintainable code and optimal performance.",
        icon: <PenTool className="h-12 w-12 text-primary" />,
        features: ["UI component development", "Responsive design implementation", "State management", "API integration"]
      },
      {
        title: "Performance Optimization",
        description: "Improving website speed, performance, and user experience through advanced optimization techniques.",
        icon: <Zap className="h-12 w-12 text-primary" />,
        features: ["Core Web Vitals optimization", "Lazy loading", "Code splitting", "Bundle size optimization"]
      },
    ],
    mobile: [
      {
        title: "Mobile-First Development",
        description: "Building applications with a mobile-first approach to ensure optimal user experience across all devices.",
        icon: <Smartphone className="h-12 w-12 text-primary" />,
        features: ["Responsive design", "Touch-friendly interfaces", "Mobile performance optimization", "Cross-device testing"]
      },
      {
        title: "React Native Development",
        description: "Creating cross-platform mobile applications that work seamlessly on iOS and Android.",
        icon: <Smartphone className="h-12 w-12 text-primary" />,
        features: ["Cross-platform app development", "Native-like performance", "Custom mobile UI components", "App store deployment"]
      },
    ],
    marketing: [
      {
        title: "SEO Optimization",
        description: "Improving your website's visibility in search engines to drive organic traffic and increase conversions.",
        icon: <Search className="h-12 w-12 text-primary" />,
        features: ["Technical SEO audits", "On-page optimization", "SEO-friendly development", "Search performance tracking"]
      },
      {
        title: "Web Analytics",
        description: "Setting up analytics to track user behavior and provide actionable insights for business growth.",
        icon: <LineChart className="h-12 w-12 text-primary" />,
        features: ["Google Analytics implementation", "Conversion tracking", "User behavior analysis", "Performance reporting"]
      },
    ]
  };

  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-20 bg-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            What I Offer
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            My Services
          </h3>
          <p className="text-muted-foreground">
            I provide a range of development services tailored to meet your project needs.
            From frontend development to performance optimization, I've got you covered.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <Tabs 
            defaultValue="web" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full"
          >
            <TabsList className="grid grid-cols-1 mb-12 w-full sm:w-[400px] mx-auto">
              <TabsTrigger value="web">Web Dev</TabsTrigger>
              {/* <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger> */}
            </TabsList>
            
            {Object.keys(services).map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div 
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {services[category].map((service, index) => (
                    <motion.div key={service.title} variants={fadeIn}>
                      <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-primary/30">
                        <CardHeader>
                          <div className="mb-4">
                            {service.icon}
                          </div>
                          <CardTitle>{service.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}