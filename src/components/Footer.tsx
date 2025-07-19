
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Shield,
  Award,
  CheckCircle
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Loan Products" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/apply", label: "Apply Now" },
    { href: "/contact", label: "Contact" }
  ];

  const loanProducts = [
    "Working Capital Loans",
    "Equipment Financing", 
    "Startup Funding",
    "Merchant Cash Advance",
    "Commercial Vehicle Loans",
    "Lines of Credit"
  ];

  const legalLinks = [
    "Terms of Service",
    "Privacy Policy", 
    "Responsible Lending",
    "Complaint Resolution",
    "Regulatory Compliance"
  ];

  return (
    <footer className="bg-dark-green text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/146ed7e0-1423-4af5-a6b1-6be6225c0c3f.png" 
                alt="Attivita Ricco Limited" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Growing your dreams with fast, accessible capital. Get approved 
              in 12 hours and funded the same day.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-light-green" />
                <span>+254738810000</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-light-green" />
                <span>info@attivitaricco.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-light-green" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-light-green transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Loan Products</h3>
            <ul className="space-y-3">
              {loanProducts.map((product) => (
                <li key={product} className="text-gray-300 text-sm">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal & Compliance</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-light-green transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Shield className="h-3 w-3" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Award className="h-3 w-3" />
                <span>Licensed Lender</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <CheckCircle className="h-3 w-3" />
                <span>Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-light-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-light-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-light-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-light-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © 2024 Attivita Ricco Limited. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Licensed lender. Growing Your Dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
