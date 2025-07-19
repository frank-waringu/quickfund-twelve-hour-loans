import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Banknote,
  Clock,
  Shield,
  Smartphone,
  User,
  CreditCard,
  Download
} from "lucide-react";
import processImage from "@/assets/loan-process.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      step: "01",
      title: "Apply Online",
      description: "Complete our simple 5-minute application form with basic business information",
      details: [
        "Basic business details",
        "Loan amount and purpose", 
        "Financial information",
        "Upload required documents"
      ],
      time: "5 minutes"
    },
    {
      icon: Search,
      step: "02", 
      title: "Instant Review",
      description: "Our AI-powered system instantly analyzes your application and credit profile",
      details: [
        "Automated credit check",
        "Business verification",
        "Financial analysis",
        "Risk assessment"
      ],
      time: "2 minutes"
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Quick Approval",
      description: "Get approved within 12 hours with transparent terms and conditions",
      details: [
        "Human review for complex cases",
        "Loan terms finalization",
        "Contract generation",
        "Digital signing process"
      ],
      time: "2-12 hours"
    },
    {
      icon: Banknote,
      step: "04",
      title: "Fast Funding",
      description: "Receive funds directly in your business account the same day",
      details: [
        "Direct bank transfer",
        "Same-day funding",
        "Confirmation notifications",
        "Account dashboard access"
      ],
      time: "Same day"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "12-hour approval vs 30+ days with traditional banks"
    },
    {
      icon: Smartphone,
      title: "100% Digital",
      description: "Complete entire process online from any device"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Bank-level security and data encryption"
    },
    {
      icon: User,
      title: "Personal Support",
      description: "Dedicated loan specialists available to help"
    }
  ];

  const requiredDocuments = [
    {
      icon: CreditCard,
      title: "Business Bank Statements",
      description: "Last 3 months of business bank statements"
    },
    {
      icon: FileText,
      title: "Tax Returns",
      description: "Business tax returns for the past 1-2 years"
    },
    {
      icon: User,
      title: "Business License",
      description: "Valid business license and registration documents"
    },
    {
      icon: Download,
      title: "ID & Articles",
      description: "Government ID and articles of incorporation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal text-white">
              How It Works
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Funded in Just <span className="text-teal">12 Hours</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Our streamlined 4-step process gets you from application to funding 
              faster than any traditional lender.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From application to funding in record time
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img 
                  src={processImage} 
                  alt="Loan Process Visualization" 
                  className="rounded-lg shadow-medium w-full"
                />
              </div>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-bold text-teal">STEP {step.step}</span>
                        <Badge variant="outline" className="text-xs">
                          {step.time}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-navy mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                            <CheckCircle className="h-3 w-3 text-success" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Our Process is Different
            </h2>
            <p className="text-xl text-gray-600">
              Traditional lending reimagined for the modern business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6 shadow-medium hover:shadow-strong transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600">
                Minimal paperwork to get you approved quickly
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {requiredDocuments.map((doc, index) => (
                <Card key={index} className="p-6 shadow-medium">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <doc.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy mb-2">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600">
                          {doc.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-navy mb-2">
                    Your Information is Secure
                  </h3>
                  <p className="text-gray-600">
                    All documents are encrypted and stored securely. We use bank-level 
                    security measures to protect your sensitive business information. 
                    Your data is never shared with third parties without your consent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                QuickFund vs Traditional Banks
              </h2>
              <p className="text-xl text-gray-600">
                See the difference in timing and requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* QuickFund Timeline */}
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">QF</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy">QuickFund Capital</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Application</span>
                      <Badge className="bg-success text-white">5 minutes</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Review & Approval</span>
                      <Badge className="bg-success text-white">2-12 hours</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Funding</span>
                      <Badge className="bg-success text-white">Same day</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Documents Required</span>
                      <Badge className="bg-success text-white">Minimal</Badge>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center font-semibold">
                        <span className="text-navy">Total Time</span>
                        <span className="text-success text-lg">12 Hours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Traditional Bank Timeline */}
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">🏦</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-600">Traditional Banks</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Application</span>
                      <Badge variant="outline" className="text-gray-500">1-2 hours</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Review & Approval</span>
                      <Badge variant="outline" className="text-gray-500">2-6 weeks</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Funding</span>
                      <Badge variant="outline" className="text-gray-500">1-2 weeks</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Documents Required</span>
                      <Badge variant="outline" className="text-gray-500">Extensive</Badge>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center font-semibold">
                        <span className="text-navy">Total Time</span>
                        <span className="text-gray-500 text-lg">30+ Days</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Fastest Loan Process?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of businesses that chose speed and simplicity
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
          >
            <Link to="/apply">Start Your Application Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;