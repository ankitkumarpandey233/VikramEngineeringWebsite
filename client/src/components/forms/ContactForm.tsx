import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

// Create a schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    }
  });
  
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('POST', '/api/inquiries', {
        ...data,
        service: 'General'
      });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
        variant: "default",
      });
      reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });
  
  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-[#546E7A] mb-2">Your Name *</label>
          <input 
            type="text" 
            id="name" 
            className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#FF7A00]`} 
            placeholder="Enter your name" 
            {...register('name')}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-[#546E7A] mb-2">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#FF7A00]`} 
            placeholder="Enter your email" 
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-[#546E7A] mb-2">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
            placeholder="Enter your phone number" 
            {...register('phone')}
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-[#546E7A] mb-2">Company Name</label>
          <input 
            type="text" 
            id="company" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
            placeholder="Enter your company name" 
            {...register('company')}
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="block text-[#546E7A] mb-2">Subject *</label>
        <input 
          type="text" 
          id="subject" 
          className={`w-full px-4 py-3 rounded-md border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#FF7A00]`} 
          placeholder="Enter subject" 
          {...register('subject')}
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-[#546E7A] mb-2">Message *</label>
        <textarea 
          id="message" 
          rows={5} 
          className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#FF7A00]`} 
          placeholder="Enter your message" 
          {...register('message')}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`bg-[#FF7A00] hover:bg-[#FFB800] text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            Send Message
            <i className="fas fa-paper-plane ml-2"></i>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
