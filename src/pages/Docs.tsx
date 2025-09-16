import { Book } from 'lucide-react';

const Docs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <Book className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p className="text-muted-foreground">Learn how to use Echo Collateral</p>
      </div>
    </div>
  );
};

export default Docs;
