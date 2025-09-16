import { Plus } from 'lucide-react';

const Collateralize = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <Plus className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Collateralize NFT</h1>
        <p className="text-muted-foreground">Collateralize your NFTs with FHE encryption</p>
      </div>
    </div>
  );
};

export default Collateralize;
