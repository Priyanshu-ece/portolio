import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import About from "@/pages/about";
import Experience from "@/pages/experience";
import Education from "@/pages/education";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="bg-dark-primary min-h-screen">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
