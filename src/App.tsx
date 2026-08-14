import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Discover from '@/pages/Discover';
import Study from '@/pages/Study';
import CampusLife from '@/pages/CampusLife';
import Impact from '@/pages/Impact';
import News from '@/pages/News';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/discover" component={Discover} />
        <Route path="/study" component={Study} />
        <Route path="/campus-life" component={CampusLife} />
        <Route path="/impact" component={Impact} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
