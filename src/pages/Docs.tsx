import { Book, Shield, Zap, Globe, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Docs = () => {
  return (
    <div className="min-h-screen py-8 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Book className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Documentation</h1>
          <p className="text-muted-foreground">Learn how to use Echo Collateral</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Getting Started
              </CardTitle>
              <CardDescription>Quick start guide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Connect Wallet</span>
                  <Badge variant="secondary">Step 1</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Select NFT</span>
                  <Badge variant="secondary">Step 2</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Set Parameters</span>
                  <Badge variant="secondary">Step 3</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Collateralize</span>
                  <Badge variant="default">Step 4</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Features
              </CardTitle>
              <CardDescription>Core platform features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  <span className="text-sm">FHE Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm">Multi-Chain Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm">Auto Liquidation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">Privacy Protection</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
            <CardDescription>Detailed technical information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Fully Homomorphic Encryption</h4>
                <p className="text-sm text-muted-foreground">
                  Echo Collateral uses state-of-the-art FHE to encrypt NFT values while maintaining 
                  computational capabilities for liquidation checks and value calculations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Supported Networks</h4>
                <p className="text-sm text-muted-foreground">
                  Currently supports Ethereum Sepolia testnet. Mainnet support for Ethereum, 
                  Polygon, and other EVM-compatible chains coming soon.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Liquidation Engine</h4>
                <p className="text-sm text-muted-foreground">
                  Automated liquidation system with sub-second execution times and real-time 
                  price monitoring to protect both borrowers and lenders.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Docs;
