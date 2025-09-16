import { Radio, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Header = () => {
  const { isConnected, address } = useAccount();

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="vault-panel p-3 rounded-lg">
              <Radio className="h-8 w-8 text-primary animate-pulse-glow" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Echo Collateral</h1>
              <p className="text-xs text-muted-foreground">Next-Gen NFT Collateralization</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/vault" className="text-muted-foreground hover:text-primary transition-colors">
              My Vault
            </Link>
            <Link to="/collateralize" className="text-muted-foreground hover:text-primary transition-colors">
              Collateralize
            </Link>
            <Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">
              Docs
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-2 vault-panel px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                <span className="text-sm text-foreground">
                  {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connected'}
                </span>
                <Lock className="h-4 w-4 text-primary" />
              </div>
            ) : (
              <ConnectButton 
                chainStatus="icon"
                accountStatus="address"
                showBalance={false}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;