"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {    
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(()=> {
    setTheme("dark"); 
  },[])

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Skills", href: "/#skills" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="bg-primary p-1.5 rounded text-primary-foreground">
              <Code className="h-5 w-5" />
            </span>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Pankaj Shah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  activeSection === link.href.replace('/#', '') 
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-primary/10 hover:text-primary"
                )}
              >
                {link.title}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label={
                  mounted && theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {mounted && theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <div className="flex gap-2 ml-2 border-l pl-4">
                <Link href="https://github.com/shahpankajkumar" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/shah-pankaj-7a729018a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:spankaj769819@gmail.com">
                  <Button variant="ghost" size="icon" className="rounded-full" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label={
                mounted && theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="rounded-full"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col h-full p-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "py-4 text-lg font-medium border-b border-border transition-colors",
                activeSection === link.href.replace('/#', '')
                  ? "text-primary"
                  : "hover:text-primary"
              )}
            >
              {link.title}
            </Link>
          ))}

          <div className="mt-8 flex justify-center gap-4">
            <Link href="https://github.com/spankaj769819" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/pankaj-shah" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="mailto:spankaj769819@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Email">
                <Mail className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}