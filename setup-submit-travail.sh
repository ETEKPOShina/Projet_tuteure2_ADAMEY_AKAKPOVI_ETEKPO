#!/bin/bash

# Script de configuration pour Supabase et le système de soumission de travaux

echo "🚀 Configuration du système de soumission de travaux"
echo ""

# 1. Installer les dépendances
echo "📦 Installation des dépendances..."
npm install @supabase/supabase-js

# 2. Compiler les mutations Relay
echo ""
echo "🔄 Compilation des mutations Relay..."
npm run relay

echo ""
echo "✅ Configuration complète!"
echo ""
echo "📋 Prochaines étapes:"
echo "1. Configurer Supabase (voir SUBMIT_TRAVAIL_GUIDE.md)"
echo "2. Ajouter les variables d'environnement dans .env.local:"
echo "   - NEXT_PUBLIC_SUPABASE_URL"
echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "3. Tester le formulaire de soumission"
