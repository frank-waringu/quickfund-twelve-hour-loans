import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, TrendingUp, Users, Award, Clock, DollarSign } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
const About = () => {
  const values = [{
    icon: Clock,
    title: "Speed",
    description: "We believe time is your most valuable asset. Our 12-hour approval process ensures you never miss an opportunity."
  }, {
    icon: Heart,
    title: "Integrity",
    description: "Transparent terms, honest communication, and ethical lending practices form the foundation of every relationship."
  }, {
    icon: Users,
    title: "Partnership",
    description: "We're not just lenders - we're partners in your success, providing support beyond just capital."
  }, {
    icon: Award,
    title: "Excellence",
    description: "Continuous innovation and improvement in our services to exceed client expectations every time."
  }];
  const stats = [{
    number: "$50M+",
    label: "Total Loans Disbursed"
  }, {
    number: "2,500+",
    label: "Businesses Funded"
  }, {
    number: "98%",
    label: "Client Satisfaction"
  }, {
    number: "12",
    label: "Average Hours to Approval"
  }];
  const teamMembers = [{
    name: "Sarah Mitchell",
    role: "CEO & Founder",
    bio: "15+ years in financial services, former VP at Goldman Sachs"
  }, {
    name: "David Chen",
    role: "Chief Technology Officer",
    bio: "Former tech lead at fintech unicorns, MIT graduate"
  }, {
    name: "Maria Rodriguez",
    role: "Head of Lending",
    bio: "20+ years in commercial lending, expert in risk assessment"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal text-white">
              About QuickFund Capital
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Business Growth Since 2019
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              We're revolutionizing business lending with technology, speed, and a genuine 
              commitment to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <Card className="text-center p-8 shadow-medium">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize access to business capital by providing fast, fair, and 
                  flexible lending solutions that help entrepreneurs and small businesses thrive.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center p-8 shadow-medium">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading digital lending platform that transforms how small 
                  businesses access capital worldwide.
                </p>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="text-center p-8 shadow-medium">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Impact</h3>
                <p className="text-gray-600">
                  Every loan we approve creates jobs, drives innovation, and strengthens 
                  communities across the country.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                Born from frustration with traditional lending
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src={teamPhoto} alt="QuickFund Capital Team" className="rounded-lg shadow-medium w-full" />
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  QuickFund Capital was founded in 2019 by a team of financial services 
                  veterans who experienced firsthand the frustrations of traditional business 
                  lending. After watching countless deserving businesses struggle with 
                  months-long approval processes and excessive paperwork, we knew there 
                  had to be a better way.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  We leveraged cutting-edge technology and streamlined processes to create 
                  what seemed impossible: a lending platform that could approve and disburse 
                  business loans in just 12 hours without compromising on security or 
                  responsible lending practices.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Today, we've helped over 2,500 businesses access more than $50 million 
                  in capital, creating thousands of jobs and driving economic growth across 
                  the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={index} className="text-center p-6 shadow-medium hover:shadow-strong transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the QuickFund Difference?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join the thousands of businesses that trust us with their growth
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/apply">Apply for Your Loan Today</Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default About;