# Echo Collateral - Vercel Deployment Guide

## 🚀 Quick Deployment

### Step 1: Connect to Vercel
1. Visit [vercel.com](https://vercel.com) and sign in
2. Click "New Project" → "Import Git Repository"
3. Select "DanielFuchs36/echo-collateral"

### Step 2: Configure Project
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Environment Variables
Add these environment variables in Vercel dashboard:

```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

### Step 4: Deploy
Click "Deploy" and wait for the build to complete.

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Features

- **FHE-Powered Privacy**: Fully Homomorphic Encryption for secure collateral management
- **Multi-Wallet Support**: RainbowKit integration with popular wallets
- **Responsive Design**: Mobile-first approach with modern UI
- **Type Safety**: Full TypeScript support
- **Performance**: Optimized build with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Wallet**: RainbowKit, Wagmi, Viem
- **Deployment**: Vercel
- **Blockchain**: Ethereum Sepolia

## 📞 Support

For deployment issues or questions, please refer to the main README.md or create an issue on GitHub.
