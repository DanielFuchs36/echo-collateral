import { Radio, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="vault-panel p-6 rounded-2xl">
              <Radio className="h-16 w-16 text-accent animate-pulse-glow" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Echo Collateral
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Next-Generation NFT Collateralization with Fully Homomorphic Encryption
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="neon">
              <Link to="/collateralize">Start Collateralizing</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/docs">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Echo Collateral?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="vault-panel p-4 rounded-xl w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Sub-second liquidation execution with automated threshold monitoring
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="vault-panel p-4 rounded-xl w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-muted-foreground">
                Fully Homomorphic Encryption keeps your NFT values private
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="vault-panel p-4 rounded-xl w-fit mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Chain</h3>
              <p className="text-muted-foreground">
                Cross-chain compatibility with Ethereum, Polygon, and more
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
