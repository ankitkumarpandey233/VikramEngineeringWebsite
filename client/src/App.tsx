import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect } from "react";

function Router() {
  useEffect(() => {
    // Add meta tags for SEO
    document.title = "Vikram Engineering Works - Precision Engineering Solutions";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Vikram Engineering Works offers expert CNC machining, welding, and fabrication services with a commitment to precision, innovation, and quality.';
    document.head.appendChild(metaDescription);
    
    // Add Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;600&family=Roboto+Mono&display=swap';
    document.head.appendChild(fontLink);
    
    // Add Font Awesome
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(fontAwesome);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(fontLink);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
