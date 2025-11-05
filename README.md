# 🛍️ SmartShop AI - Demo de Personnalisation IA

## 📖 Description

**SmartShop AI** est une application de démonstration interactive qui illustre la puissance de la **personnalisation IA** dans le e-commerce moderne.

L'application utilise le protocole **MCP (Model Context Protocol)** pour simplifier l'intégration de l'intelligence artificielle et adapter l'expérience utilisateur en temps réel.

## ✨ Fonctionnalités

- 🎯 **4 profils utilisateurs différents** (Sportif, Parent, Geek Tech, Fashion)
- 🤖 **Personnalisation IA en temps réel**
- 📊 **Analyses et statistiques de recommandations**
- 💡 **Démonstration de code MCP simplifié**
- 🎨 **Interface moderne et responsive**

## 🚀 Démo en ligne

👉 **[Voir la demo live](https://smartshop-ai-demo.vercel.app)**

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Design moderne avec gradients
- **JavaScript** - Logique interactive
- **MCP** - Protocole de personnalisation IA

## 💻 Comment ça marche ?

### Sans MCP (complexe) ❌
```javascript
// 200+ lignes de code pour chaque service
const gmailAPI = require('gmail-api');
const slackSDK = require('@slack/web-api');
// ... configuration compliquée
```

### Avec MCP (simple) ✅
```javascript
// 3 lignes universelles pour tout
const userData = await mcp.callTool('USER_GET_PROFILE', {user_id: 'alex'});
const recs = await mcp.callTool('AI_ANALYZE', {profile: userData});
const ui = await mcp.callTool('UI_PERSONALIZE', {recommendations: recs});
```

## 🎓 Concepts démontrés

1. **Collecte de données** - Profil, intérêts, localisation
2. **Analyse IA** - Recommandations personnalisées
3. **Adaptation d'interface** - UI dynamique selon l'utilisateur
4. **Simplification du code** - MCP réduit 90% du code

## 📱 Utilisation

1. Ouvrez l'application
2. Sélectionnez un profil utilisateur
3. Observez comment l'IA personnalise le contenu
4. Explorez les recommandations adaptées
5. Analysez les statistiques de précision

## 🌟 Points forts

- ⚡ **Performance** - Chargement instantané
- 🎨 **Design** - Interface moderne et intuitive
- 📊 **Analytics** - Métriques de personnalisation
- 🔧 **Simplicité** - Code MCP ultra-simple

## 📧 Contact

Créé avec ❤️ par **Composio MCP**

Pour en savoir plus sur MCP : [composio.dev](https://composio.dev)

## 📄 Licence

MIT License - Libre d'utilisation et de modification