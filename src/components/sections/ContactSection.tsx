
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            Feel free to reach out using the contact form or through any of my social channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-softBlue p-3 rounded-full mr-4">
                  <Mail className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:mostafahabib866@gmail.com" className="text-portfolio-blue hover:underline">
                    mostafahabib866@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-softBlue p-3 rounded-full mr-4">
                  <Phone className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+201207300696" className="text-portfolio-blue hover:underline">
                    +201207300696
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-softBlue p-3 rounded-full mr-4">
                  <Github className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/mostafa-habib" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-blue hover:underline"
                  >
                    github.com/mostafa-habib
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-softBlue p-3 rounded-full mr-4">
                  <Linkedin className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/mostafahabibb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-blue hover:underline"
                  >
                    linkedin.com/in/mostafahabibb
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <Input 
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <Textarea 
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 min-h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-blue hover:bg-blue-600 text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
