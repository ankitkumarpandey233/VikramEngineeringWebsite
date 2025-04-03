import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <Card className="w-full max-w-md mx-4 border-orange-200 shadow-lg">
        <CardContent className="pt-10 pb-6 flex flex-col items-center text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-orange-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">404 Page Not Found</h1>
          
          <p className="text-gray-600 mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="w-20 h-1 bg-orange-500 rounded-full my-4"></div>
          
          <p className="text-gray-500 italic">
            "Precision in engineering is about finding the right path. Let's get you back on track."
          </p>
        </CardContent>
        
        <CardFooter className="flex justify-center gap-4 pb-8">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </Button>
          
          <Button asChild className="bg-orange-600 hover:bg-orange-700 gap-2">
            <a onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
