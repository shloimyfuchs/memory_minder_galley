import { Brain, BookOpen, Lightbulb, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Summaries",
    description: "Automatically generate concise summaries of any online content you consume.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Gallery",
    description: "Organize and revisit your learning journey with a beautiful, visual interface.",
  },
  {
    icon: Lightbulb,
    title: "Smart Insights",
    description: "Get personalized key takeaways and actionable insights from your content.",
  },
  {
    icon: Target,
    title: "Learning Goals",
    description: "Set and track your learning objectives with recommended content paths.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Second Brain for Online Learning
          </h2>
          <p className="text-muted-foreground">
            Never forget what you learn online. Our AI helps you retain and apply knowledge effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};