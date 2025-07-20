import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  Clock,
  DollarSign,
  Building,
  User,
  Phone,
  Mail,
  Shield
} from "lucide-react";

const Apply = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Business Information
    businessName: "",
    businessType: "",
    businessAddress: "",
    yearsInBusiness: "",
    monthlyRevenue: "",
    
    // Loan Information
    loanAmount: "",
    loanPurpose: "",
    description: "",
    
    // Legal
    termsAccepted: false,
    privacyAccepted: false
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone',
      'businessName', 'businessType', 'businessAddress', 'yearsInBusiness', 'monthlyRevenue',
      'loanAmount', 'loanPurpose'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill out all required fields before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.termsAccepted || !formData.privacyAccepted) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms of service and privacy policy to continue.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 12 hours.",
    });
  };

  const loanPurposes = [
    "Working Capital",
    "Equipment Purchase",
    "Inventory",
    "Business Expansion",
    "Startup Funding",
    "Real Estate",
    "Debt Consolidation",
    "Other"
  ];

  const businessTypes = [
    "Sole Proprietorship",
    "Partnership", 
    "LLC",
    "Corporation",
    "S-Corporation",
    "Non-Profit",
    "Other"
  ];

  const features = [
    {
      icon: Clock,
      title: "12-Hour Approval",
      description: "Get approved in record time"
    },
    {
      icon: Shield,
      title: "Secure Application", 
      description: "Bank-level encryption"
    },
    {
      icon: FileText,
      title: "Minimal Documents",
      description: "Simple requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal text-white">
              Apply for Business Loan
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Get Approved in Just 12 Hours
            </h1>
            <p className="text-xl text-gray-200">
              Complete this simple application and get your funding fast
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Loan Application Form
                </CardTitle>
                <p className="text-gray-600">
                  Please fill out all required fields accurately
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
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
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      Business Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange("businessName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="businessType">Business Type *</Label>
                          <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                            <SelectContent>
                              {businessTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                          <Select onValueChange={(value) => handleInputChange("yearsInBusiness", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select years" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1">0-1 years</SelectItem>
                              <SelectItem value="1-2">1-2 years</SelectItem>
                              <SelectItem value="2-5">2-5 years</SelectItem>
                              <SelectItem value="5-10">5-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="businessAddress">Business Address *</Label>
                        <Input
                          id="businessAddress"
                          value={formData.businessAddress}
                          onChange={(e) => handleInputChange("businessAddress", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="monthlyRevenue">Monthly Revenue *</Label>
                        <Select onValueChange={(value) => handleInputChange("monthlyRevenue", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select monthly revenue" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k+">$100,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Loan Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Loan Information
                    </h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="loanAmount">Requested Loan Amount *</Label>
                          <Select onValueChange={(value) => handleInputChange("loanAmount", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select amount" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                              <SelectItem value="250k+">$250,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="loanPurpose">Loan Purpose *</Label>
                          <Select onValueChange={(value) => handleInputChange("loanPurpose", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select purpose" />
                            </SelectTrigger>
                            <SelectContent>
                              {loanPurposes.map((purpose) => (
                                <SelectItem key={purpose} value={purpose}>{purpose}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="description">Loan Description</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          placeholder="Briefly describe how you plan to use the loan funds"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-4 flex items-center">
                      <Upload className="h-5 w-5 mr-2" />
                      Document Upload
                    </h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Upload your business documents
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        Bank statements, tax returns, business license (PDF, JPG, PNG)
                      </p>
                      <Button type="button" variant="outline">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  {/* Legal Agreement */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the <a href="/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Terms of Service</a> and 
                        authorize Attivita Ricco Ltd to verify the information provided.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacyAccepted}
                        onCheckedChange={(checked) => handleInputChange("privacyAccepted", checked as boolean)}
                      />
                      <Label htmlFor="privacy" className="text-sm">
                        I agree to the <a href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and 
                        consent to receive communications about my application.
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary text-lg py-6"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Why Apply with Attivita Ricco?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <feature.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">apply@attivitaricco.com</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Our loan specialists are available Mon-Fri 8AM-6PM EST 
                    to help with your application.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Process Timeline */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium">Instant Review</p>
                      <p className="text-xs text-gray-600">Automated pre-approval in minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium">Human Review</p>
                      <p className="text-xs text-gray-600">Detailed analysis within 12 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium">Funding</p>
                      <p className="text-xs text-gray-600">Same-day transfer to your account</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;