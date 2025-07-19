import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  DollarSign, 
  Shield, 
  CheckCircle, 
  Star,
  TrendingUp,
  Users,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-business-loans.jpg";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "12-Hour Approval",
      description: "Get your loan approved and disbursed within 12 hours"
    },
    {
      icon: DollarSign,
      title: "Flexible Amounts",
      description: "Loans from $10,000 to $500,000 to meet your business needs"
    },
    {
      icon: Shield,
      title: "Minimal Paperwork",
      description: "Simple application process with reduced documentation"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Tech Startup",
      content: "QuickFund helped me expand my business when traditional banks said no. The 12-hour approval saved my opportunity!",
      rating: 5
    },
    {
      name: "Michael Chen",
      business: "Manufacturing",
      content: "Professional service and lightning-fast approval. Couldn't have asked for a better lending partner.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      business: "Retail Chain",
      content: "The flexibility and speed of QuickFund's loan process is unmatched. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { number: "$50M+", label: "Loans Disbursed" },
    { number: "2,500+", label: "Businesses Helped" },
    { number: "12", label: "Hour Approval" },
    { number: "4.9", label: "Customer Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-teal text-white text-sm px-4 py-2">
              ⚡ 12-Hour Loan Approval
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Business Loans Approved in Just{" "}
              <span className="text-teal">12 Hours</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Fast turnaround • Minimal paperwork • Flexible repayment
              <br />
              Empowering businesses with quick access to capital
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-teal hover:bg-teal-light text-white text-lg px-8 py-4"
              >
                <Link to="/apply">Apply Now - It's Free</Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
              >
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose QuickFund Capital?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand that time is money in business. That's why we've revolutionized 
              the lending process to get you funded fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 shadow-medium hover:shadow-strong transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied business owners who trust QuickFund Capital
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-medium">
                <CardContent className="pt-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-navy">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.business}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Trusted & Regulated
            </h2>
            <p className="text-gray-600">
              Your security and trust are our top priorities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Bank-Level Security</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">FDIC Compliant</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">BBB Accredited</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">2500+ Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of successful businesses that chose QuickFund Capital
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
          >
            <Link to="/apply">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;