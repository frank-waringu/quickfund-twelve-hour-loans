import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  TrendingUp, 
  Wrench, 
  Building, 
  ShoppingCart,
  Truck,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Products = () => {
  const loanProducts = [
    {
      icon: TrendingUp,
      title: "Working Capital Loans",
      description: "Flexible funding for day-to-day operations, inventory, and cash flow management",
      amount: "$10K - $250K",
      term: "6-24 months",
      rate: "Starting at 8.9%",
      features: [
        "Quick approval in 12 hours",
        "Flexible repayment terms",
        "No collateral required up to $100K",
        "Use for any business purpose"
      ]
    },
    {
      icon: Wrench,
      title: "Equipment Financing",
      description: "Purchase or lease essential business equipment with competitive rates",
      amount: "$25K - $500K",
      term: "12-60 months",
      rate: "Starting at 7.5%",
      features: [
        "Equipment serves as collateral",
        "100% financing available",
        "Tax advantages",
        "Quick turnaround time"
      ]
    },
    {
      icon: Building,
      title: "Startup Funding",
      description: "Launch your business idea with capital designed for new ventures",
      amount: "$10K - $100K",
      term: "12-36 months",
      rate: "Starting at 10.9%",
      features: [
        "Minimal credit history required",
        "Business plan review included",
        "Mentorship opportunities",
        "Flexible qualification criteria"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Merchant Cash Advance",
      description: "Quick access to capital based on your daily credit card sales",
      amount: "$5K - $150K",
      term: "3-18 months",
      rate: "Factor rate from 1.2",
      features: [
        "Approval in 24 hours",
        "Daily automatic repayment",
        "No fixed monthly payments",
        "Based on card sales volume"
      ]
    },
    {
      icon: Truck,
      title: "Commercial Vehicle Loans",
      description: "Finance trucks, vans, and commercial vehicles for your business",
      amount: "$15K - $300K",
      term: "24-72 months",
      rate: "Starting at 6.9%",
      features: [
        "Vehicle serves as collateral",
        "New and used vehicles",
        "Competitive interest rates",
        "Fast approval process"
      ]
    },
    {
      icon: DollarSign,
      title: "Lines of Credit",
      description: "Access funds when you need them with a flexible credit line",
      amount: "$25K - $200K",
      term: "Revolving",
      rate: "Starting at 9.5%",
      features: [
        "Draw funds as needed",
        "Pay interest on used amount only",
        "Revolving credit facility",
        "Online account management"
      ]
    }
  ];

  const qualificationRequirements = [
    "Business must be operational for at least 6 months",
    "Minimum annual revenue of $100,000",
    "Personal credit score of 580 or higher",
    "Valid business license and registration",
    "Business bank account statements (3 months)",
    "Basic financial documentation"
  ];

  const faqs = [
    {
      question: "How fast can I really get approved?",
      answer: "Our standard approval time is 12 hours for most loan products. In some cases, we can approve applications in as little as 2-4 hours during business hours."
    },
    {
      question: "What if I have bad credit?",
      answer: "We consider more than just credit scores. We look at your business revenue, cash flow, and overall financial health. Minimum credit score is 580, but we may work with lower scores based on other factors."
    },
    {
      question: "Do I need collateral?",
      answer: "Collateral requirements vary by loan type and amount. Working capital loans under $100K typically don't require collateral, while equipment loans use the equipment itself as collateral."
    },
    {
      question: "Can I pay off my loan early?",
      answer: "Yes! We encourage early repayment and offer reduced interest or fees for early payoff on most loan products. There are no prepayment penalties."
    },
    {
      question: "What documents do I need?",
      answer: "Basic requirements include business bank statements (3 months), tax returns, business license, and a government-issued ID. Specific requirements may vary by loan type."
    },
    {
      question: "How much can I borrow?",
      answer: "Loan amounts range from $5,000 to $500,000 depending on the product. The exact amount depends on your business revenue, credit profile, and loan purpose."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal text-white">
              Business Loan Products
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Flexible Loans for Every Business Need
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              From working capital to equipment financing, we have the right 
              loan solution for your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Loan Products
            </h2>
            <p className="text-xl text-gray-600">
              Choose the financing solution that fits your business perfectly
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {loanProducts.map((product, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-navy mb-2">
                        {product.title}
                      </CardTitle>
                      <p className="text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Amount</div>
                      <div className="font-semibold text-navy">{product.amount}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Term</div>
                      <div className="font-semibold text-navy">{product.term}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Rate</div>
                      <div className="font-semibold text-navy">{product.rate}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full bg-gradient-primary">
                    <Link to="/apply">Apply for This Loan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Qualification Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Simple and transparent eligibility criteria
              </p>
            </div>
            
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {qualificationRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-navy font-medium mb-1">
                        Don't meet all requirements?
                      </p>
                      <p className="text-sm text-gray-600">
                        Contact us anyway! We consider each application individually and 
                        may have alternative solutions for your specific situation.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our loan products
              </p>
            </div>
            
            <Card className="shadow-medium">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="px-6">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fund Your Business Growth?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Get approved in 12 hours and receive funds the same day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Link to="/contact">Speak with a Specialist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;