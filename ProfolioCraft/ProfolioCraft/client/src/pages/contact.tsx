import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import { personalInfo } from '@/data/portfolio-data';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: 'Failed to send message',
        description: 'Please try again later or contact me directly.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      console.error('Contact form error:', error);
    }
  });

  const onSubmit = async (data: InsertContactMessage) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      className: 'bg-gradient-electric glow-electric',
      textColor: 'text-dark-primary'
    },
    {
      icon: Github,
      href: 'https://github.com',
      className: 'bg-gradient-neon glow-neon',
      textColor: 'text-dark-primary'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      className: 'bg-gradient-purple glow-purple',
      textColor: 'text-white'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      className: 'glassmorphism',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 bg-dark-secondary min-h-screen pt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-electric">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on robotics projects or discuss embedded systems? Let's connect
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gradient-neon mb-6">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center glow-electric">
                    <Mail className="h-5 w-5 text-dark-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-semibold">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center glow-neon">
                    <Phone className="h-5 w-5 text-dark-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-semibold">{personalInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4" data-testid="contact-location">
                  <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center glow-purple">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white font-semibold">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.className} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
                      data-testid={`social-link-${index}`}
                    >
                      <social.icon className={`h-5 w-5 ${social.textColor}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gradient-electric mb-6">Send Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Priyanshu"
                            className="bg-dark-tertiary border-gray-600 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue focus:ring-opacity-20"
                            data-testid="input-first-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Yadav"
                            className="bg-dark-tertiary border-gray-600 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue focus:ring-opacity-20"
                            data-testid="input-last-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300 font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="contact@example.com"
                          className="bg-dark-tertiary border-gray-600 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue focus:ring-opacity-20"
                          data-testid="input-email"
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
                      <FormLabel className="text-gray-300 font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Robotics Collaboration"
                          className="bg-dark-tertiary border-gray-600 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue focus:ring-opacity-20"
                          data-testid="input-subject"
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
                      <FormLabel className="text-gray-300 font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={6}
                          placeholder="Tell me about your robotics project or collaboration idea..."
                          className="bg-dark-tertiary border-gray-600 text-white placeholder-gray-400 focus:border-electric-blue focus:ring-electric-blue focus:ring-opacity-20 resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-electric text-dark-primary py-4 px-8 rounded-xl font-semibold hover:scale-105 transition-all duration-300 glow-electric disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-send-message"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;