import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceId = "service_m27dnid"; 
    const templateId = "template_ku9vu7l"; 
    const publicKey = "rER_objRcrPKsafP0";

    emailjs
      .send(serviceId, templateId, data, publicKey)
      .then(() => {
        setIsSubmitting(false);
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast({
          title: "Error",
          description: "Failed to send the message. Please try again later.",
          variant: "destructive",
        });
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-portfolio-darkBg">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            Feel free to reach out using the contact form or through any of my social channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-effect dark:bg-gray-900/30 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-softBlue dark:bg-gray-800/80 p-3 rounded-full mr-4">
                  <Mail className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-gray-200">Email</h4>
                  <a href="mailto:mostafahabib866@gmail.com" className="text-portfolio-blue hover:underline">
                    mostafahabib866@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-softBlue dark:bg-gray-800/80 p-3 rounded-full mr-4">
                  <Phone className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-gray-200">Phone</h4>
                  <a href="tel:+201207300696" className="text-portfolio-blue hover:underline">
                    +201207300696
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-softBlue dark:bg-gray-800/80 p-3 rounded-full mr-4">
                  <Github className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-gray-200">GitHub</h4>
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
                <div className="bg-portfolio-softBlue dark:bg-gray-800/80 p-3 rounded-full mr-4">
                  <Linkedin className="text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-gray-200">LinkedIn</h4>
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
          
          <div className="glass-effect dark:bg-gray-900/30 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          {...field} 
                          className="border-gray-300 dark:border-gray-700 dark:bg-gray-800/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Your Email"
                          {...field}
                          className="border-gray-300 dark:border-gray-700 dark:bg-gray-800/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Subject"
                          {...field}
                          className="border-gray-300 dark:border-gray-700 dark:bg-gray-800/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your Message"
                          {...field}
                          className="min-h-[120px] border-gray-300 dark:border-gray-700 dark:bg-gray-800/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-highlight hover:bg-blue-600 text-white py-6 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message 
                      <ChevronRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
