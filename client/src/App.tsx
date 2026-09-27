import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Properties from "@/pages/Properties";
import PropertyDetail from "@/pages/PropertyDetail";
import Reviews from "@/pages/Reviews";
import Services from "@/pages/Services";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/properties" component={Properties} /><Route path="/properties/:slug" component={PropertyDetail} /><Route path="/about" component={About} /><Route path="/services" component={Services} /><Route path="/reviews" component={Reviews} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><Toaster /><Router /></ErrorBoundary>;
}
