import { Vault as VaultIcon, TrendingUp, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Vault = () => {
  return (
    <div className="min-h-screen py-8 px-6 bg-background">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <VaultIcon className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">My Vault</h1>
        </div>

        {/* Vault Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Collateral Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450.00</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">All positions healthy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Liquidation Check</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2h 15m</div>
              <p className="text-xs text-muted-foreground">Automated monitoring active</p>
            </CardContent>
          </Card>
        </div>

        {/* NFT Positions */}
        <Card>
          <CardHeader>
            <CardTitle>Collateralized NFTs</CardTitle>
            <CardDescription>Your active collateral positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Bored Ape #1234</h3>
                    <p className="text-sm text-muted-foreground">Collateral Value: $8,500</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Healthy</Badge>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">CryptoPunk #5678</h3>
                    <p className="text-sm text-muted-foreground">Collateral Value: $3,950</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Healthy</Badge>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Vault;
