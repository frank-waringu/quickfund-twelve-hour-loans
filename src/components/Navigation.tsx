
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Loan Products" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-dark-green text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+254738810000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@attivitaricco.com</span>
            </div>
          </div>
          <div className="text-xs">
            Business Hours: Mon-Fri 8AM-6PM EAT
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/146ed7e0-1423-4af5-a6b1-6be6225c0c3f.png" 
                alt="Attivita Ricco Limited" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-dark-green hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-gradient-primary hover:opacity-90">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-dark-green" />
              ) : (
                <Menu className="h-6 w-6 text-dark-green" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`font-medium ${
                      isActive(item.href) ? "text-primary" : "text-dark-green"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="bg-gradient-primary w-fit">
                  <Link to="/apply" onClick={() => setIsOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
