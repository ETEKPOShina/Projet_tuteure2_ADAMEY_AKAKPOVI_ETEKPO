# Système de Soumission de Travaux avec Supabase

## 📋 Architecture

### Flux de soumission:
1. **Utilisateur ouvre le Dialog** "Déposer mon mémoire" du dashboard
2. **Remplit le formulaire** avec les infos du travail (titre, type, résumé, mots-clés)
3. **Sélectionne un PDF** à uploader
4. **Clique sur "Soumettre"** qui déclenche:
   - ✅ **Étape 1** (30%): Mutation `submitTravail` → Crée le travail et reçoit l'ID
   - ✅ **Étape 2** (60%): Upload le PDF sur Supabase et récupère l'URL publique
   - ✅ **Étape 3** (90%): Mutation `ajouterDocument` → Lie le document au travail via l'URL
   - ✅ **Étape 4** (100%): Ferme le Dialog et rafraîchit les données

## 📁 Fichiers Créés/Modifiés

### 1. **src/relay/mutations/SubmitTravailMutation.ts**
- Mutations GraphQL pour `submitTravail` et `ajouterDocument`
- Utilisées avec React Relay

### 2. **src/services/supabase.ts**
- Configuration du client Supabase
- Fonction `uploadDocument()` pour uploader sur Supabase Storage

### 3. **src/components/SubmitTravailDialog.tsx**
- Dialog Tamagui complet avec:
  - Formulaire avec champs du schema
  - Upload de fichier PDF
  - Barre de progression
  - Gestion des erreurs

### 4. **app/students/dashboard/page.tsx**
- Intégration du Dialog
- Bouton "Déposer mon mémoire" déclenche le Dialog

## 🔧 Configuration Supabase

### Étape 1: Créer un projet Supabase
1. Aller sur [supabase.com](https://supabase.com)
2. Créer un nouveau projet
3. Récupérer les credentials:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Étape 2: Créer un bucket de storage
```sql
-- Dans la console Supabase (SQL Editor):
-- Le bucket est créé via l'interface Storage, pas SQL

-- Via UI:
1. Aller dans Storage
2. Créer un nouveau bucket: `documents-travaux`
3. Rendre PUBLIC (pour les URLs publiques)
```

### Étape 3: Configurer les variables d'environnement
```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_GRAPHQL_URL=https://your-backend-url/graphql
```

## 📊 Flux de données GraphQL

### Mutation submitTravail
```graphql
mutation {
  submitTravail(
    titre: "Mon Mémoire"
    typeTravail: "MEMOIRE"
    resume: "Résumé du travail"
    motsCles: "IA, ML"
  ) {
    success
    message
    travail {
      id          # ← Crucial pour la prochaine étape!
      titre
      statut
    }
  }
}
```

### Mutation ajouterDocument
```graphql
mutation {
  ajouterDocument(
    travailId: "123"              # ← ID reçu de submitTravail
    nomFichier: "memoire.pdf"
    typeDocument: "MEMOIRE_PDF"
    url: "https://..."            # ← URL retournée par Supabase
    tailleOctets: 2048576
  ) {
    success
    message
    document {
      id
      nomFichier
      uri
    }
  }
}
```

## 🔐 Sécurité

### Points à améliorer:
1. **Vérifier le JWT** avant d'uploader (côté backend Supabase)
2. **Limiter les types MIME** à `application/pdf` uniquement
3. **Limiter la taille** à 50MB (déjà fait côté client)
4. **Récupérer l'ID utilisateur** et le stocker avec le document
5. **RLS (Row Level Security)** Supabase à configurer

## ⚠️ Dépendances Nécessaires

```bash
npm install @supabase/supabase-js
```

## 🎯 Prochaines Étapes

- [ ] Configurer Supabase RLS pour sécuriser l'accès aux documents
- [ ] Afficher la liste des travaux soumis de l'étudiant
- [ ] Permettre les versions/révisions du mémoire
- [ ] Ajouter les commentaires des encadrants/jury
- [ ] Notification quand un travail est accepté/rejeté
