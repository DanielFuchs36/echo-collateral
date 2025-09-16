import { Vault as VaultIcon } from 'lucide-react';

const Vault = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <VaultIcon className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">My Vault</h1>
        <p className="text-muted-foreground">Manage your collateralized NFTs</p>
      </div>
    </div>
  );
};

export default Vault;
