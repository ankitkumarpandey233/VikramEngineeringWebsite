import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

// Create a schema for form validation
const quickInquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type QuickInquiryValues = z.infer<typeof quickInquirySchema>;

const QuickInquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuickInquiryValues>({
    resolver: zodResolver(quickInquirySchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  });
  
  const mutation = useMutation({
    mutationFn: (data: QuickInquiryValues) => {
      return apiRequest('POST', '/api/inquiries', {
        ...data,
        subject: `Quick Inquiry: ${data.service}`,
        phone: undefined,
        company: undefined
      });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your inquiry has been sent. We'll get back to you soon.",
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
  
  const onSubmit = (data: QuickInquiryValues) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="quick-name" className="block text-gray-300 mb-2">Your Name</label>
        <input 
          type="text" 
          id="quick-name" 
          className={`w-full px-4 py-3 rounded-md bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]`} 
          placeholder="Enter your name"
          {...register('name')}
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="quick-email" className="block text-gray-300 mb-2">Email Address</label>
        <input 
          type="email" 
          id="quick-email" 
          className={`w-full px-4 py-3 rounded-md bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]`} 
          placeholder="Enter your email"
          {...register('email')}
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="quick-service" className="block text-gray-300 mb-2">Service Required</label>
        <select 
          id="quick-service" 
          className={`w-full px-4 py-3 rounded-md bg-white/5 border ${errors.service ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]`}
          {...register('service')}
        >
          <option value="" disabled>Select a service</option>
          <option value="CNC Machining">CNC Machining</option>
          <option value="Welding & Fabrication">Welding & Fabrication</option>
          <option value="Design & Engineering">Design & Engineering</option>
          <option value="Other Services">Other Services</option>
        </select>
        {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="quick-message" className="block text-gray-300 mb-2">Project Details</label>
        <textarea 
          id="quick-message" 
          rows={3} 
          className={`w-full px-4 py-3 rounded-md bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]`} 
          placeholder="Brief description of your project"
          {...register('message')}
        ></textarea>
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full bg-[#FF7A00] hover:bg-[#FFB800] text-white px-6 py-3 rounded-md font-semibold transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </div>
        ) : (
          'Send Inquiry'
        )}
      </button>
    </form>
  );
};

export default QuickInquiryForm;
