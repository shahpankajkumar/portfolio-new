"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    setTimeout(() => {
      setIsSubmitted(true);
      form.reset();
    }, 1000);
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "spankaj769819@gmail.com",
      link: "mailto:spankaj769819@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 7698190564",
      link: "tel:+917698190564",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Surat, Gujarat 395004",
      link: "https://maps.google.com/?q=Surat,Gujarat",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-20 bg-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Me
          </h3>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you! Feel free to reach out through any of the following channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h4 className="text-2xl font-semibold mb-6">Let's discuss your project</h4>
            <p className="text-muted-foreground mb-8">
              I'm currently available for freelance projects and full-time opportunities.
              Whether you need a web application built from scratch or want to improve an existing one,
              I'm here to help.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-medium">{item.title}</h5>
                      <a 
                        href={item.link} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={item.title === "Location" ? "_blank" : undefined}
                        rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="text-lg font-medium mb-4">My Availability</h4>
              <p className="text-muted-foreground mb-4">
                I typically respond to messages within 24 hours. For urgent matters, 
                please feel free to call me directly.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                </div>
                <div>
                  <p className="font-medium">Current Status</p>
                  <p className="text-muted-foreground">Available for work</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-card rounded-lg border border-border animate-in fade-in-50 duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                </div>
                <h4 className="text-2xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              className="min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}