import { ArrowRight, CornerDownLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our updates.",
      });
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-12">
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary/20">
              Transform Your Learning Experience
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-clash mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
              Become Smarter. Retain Knowledge.
            </span>
          </h1>

          <div className="max-w-2xl mx-auto space-y-12">
            <p className="text-xl md:text-2xl font-medium text-blue-100 leading-relaxed">
              We're working on something amazing to enhance your studying, researching, ideation, and thought process.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-full pr-12"
                  required
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  size="icon"
                  disabled={isSubmitting}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/10 h-8 w-8"
                >
                  <CornerDownLeft className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="group w-full sm:w-auto whitespace-nowrap bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 rounded-full aspect-square p-0 sm:w-12 h-12 flex items-center justify-center"
              >
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-xl font-clash text-blue-200">
              Sign Up to stay updated when it gets released.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};