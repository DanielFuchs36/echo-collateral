import { Plus, Upload, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Collateralize = () => {
  return (
    <div className="min-h-screen py-8 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Plus className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Collateralize NFT</h1>
          <p className="text-muted-foreground">Collateralize your NFTs with FHE encryption</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* NFT Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Select NFT
              </CardTitle>
              <CardDescription>Choose an NFT to collateralize</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Upload or connect your NFT</p>
                <Button variant="outline">Browse NFTs</Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">NFT Contract Address</label>
                <Input placeholder="0x..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Token ID</label>
                <Input placeholder="1234" />
              </div>
            </CardContent>
          </Card>

          {/* Collateral Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Collateral Settings
              </CardTitle>
              <CardDescription>Configure your collateral parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Collateral Value (USD)</label>
                <Input placeholder="10000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Liquidation Threshold (%)</label>
                <Input placeholder="80" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Borrow Amount (USD)</label>
                <Input placeholder="5000" />
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">FHE Protection</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your collateral value will be encrypted using Fully Homomorphic Encryption
                </p>
              </div>
              <Button className="w-full" size="lg">
                Collateralize NFT
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Collateralize;
