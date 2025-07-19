import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Building,
  Users,
  HeadphonesIcon,
  Smartphone
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our loan specialists",
      detail: "+1 (555) 123-4567",
      hours: "Mon-Fri 8AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions anytime",
      detail: "info@attivitaricco.com",
      hours: "24/7 Response"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to quick questions",
      detail: "Available on website",
      hours: "Mon-Fri 9AM-5PM EST"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Financial District, Suite 2500",
      zipcode: "New York, NY 10038",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "Chicago", 
      address: "456 Business Avenue, Floor 15",
      zipcode: "Chicago, IL 60601",
      phone: "+1 (555) 234-5678"
    },
    {
      city: "Los Angeles",
      address: "789 Corporate Blvd, Building A",
      zipcode: "Los Angeles, CA 90210", 
      phone: "+1 (555) 345-6789"
    }
  ];

  const departments = [
    {
      icon: Building,
      title: "New Applications",
      description: "Questions about loan applications",
      email: "apply@attivitaricco.com"
    },
    {
      icon: Users,
      title: "Customer Service",
      description: "General inquiries and support",
      email: "support@attivitaricco.com"
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Website and portal assistance",
      email: "tech@attivitaricco.com"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal text-white">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Get in touch with our loan specialists for personalized assistance 
              with your business funding needs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-navy flex items-center">
                  <Send className="h-6 w-6 mr-2" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto bg-gradient-primary px-8"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg text-navy">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{method.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                      <p className="text-sm font-medium text-primary">{method.detail}</p>
                      <p className="text-xs text-gray-500">{method.hours}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg text-navy flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-navy">
                    <Smartphone className="h-4 w-4 inline mr-1" />
                    Emergency support available 24/7 for existing customers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Contact by Department
            </h2>
            <p className="text-xl text-gray-600">
              Reach out to the right team for faster assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <dept.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {dept.description}
                  </p>
                  <a 
                    href={`mailto:${dept.email}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {dept.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Office Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our convenient locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {officeLocations.map((office, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">{office.city}</h3>
                      <p className="text-sm text-gray-600">{office.address}</p>
                      <p className="text-sm text-gray-600">{office.zipcode}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 max-w-5xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">Find the nearest Attivita Ricco location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Don't wait - apply for your business loan today and get approved in 12 hours
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
          >
            <a href="/apply">Apply for Your Loan</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;