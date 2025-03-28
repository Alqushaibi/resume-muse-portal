
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-resume-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-resume-navy mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-resume-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-resume-gray">
            Feel free to reach out if you want to collaborate, have questions, or just want to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-md transition-transform hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-resume-blue rounded-full flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium text-resume-navy mb-2">Email</h3>
              <a href="mailto:your.email@example.com" className="text-resume-gray hover:text-resume-blue transition-colors">
                your.email@example.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="shadow-md transition-transform hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-resume-blue rounded-full flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium text-resume-navy mb-2">Phone</h3>
              <a href="tel:+11234567890" className="text-resume-gray hover:text-resume-blue transition-colors">
                (123) 456-7890
              </a>
            </CardContent>
          </Card>
          
          <Card className="shadow-md transition-transform hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-resume-blue rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium text-resume-navy mb-2">Location</h3>
              <p className="text-resume-gray">
                City, State, Country
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium text-resume-navy">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-gray-300 focus:border-resume-blue focus:ring-resume-blue"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium text-resume-navy">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-gray-300 focus:border-resume-blue focus:ring-resume-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium text-resume-navy">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="border-gray-300 focus:border-resume-blue focus:ring-resume-blue"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium text-resume-navy">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="min-h-[150px] border-gray-300 focus:border-resume-blue focus:ring-resume-blue"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-resume-blue hover:bg-resume-navy transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
