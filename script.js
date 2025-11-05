// Données des profils utilisateurs
const profilesData = {
    sportif: {
        name: "Alex",
        age: 25,
        location: "Paris",
        interests: ["sport", "fitness", "nutrition"],
        greeting: "Salut Alex ! 💪",
        subtitle: "Nouveautés sportives qui vont booster tes performances",
        products: [
            { emoji: "👟", name: "Nike Air Zoom", description: "Chaussures running pro", confidence: 95 },
            { emoji: "⌚", name: "Apple Watch Ultra", description: "Suivi performance avancé", confidence: 92 },
            { emoji: "🏋️", name: "Protéines Whey", description: "Optimise ta récupération", confidence: 88 },
            { emoji: "🎧", name: "AirPods Pro", description: "Musique pour tes entraînements", confidence: 85 }
        ],
        stats: {
            confidence: "94%",
            interactions: "127",
            conversion: "+45%",
            engagement: "8.5/10"
        }
    },
    parent: {
        name: "Marie",
        age: 40,
        location: "Lyon",
        interests: ["famille", "éducation", "maison"],
        greeting: "Bonjour Marie ! 👨‍👩‍👧",
        subtitle: "Produits parfaits pour toute la famille",
        products: [
            { emoji: "👶", name: "Vêtements enfants", description: "Collections automne-hiver", confidence: 93 },
            { emoji: "🎮", name: "Nintendo Switch", description: "Jeux pour toute la famille", confidence: 89 },
            { emoji: "📚", name: "Livres éducatifs", description: "Éveil et apprentissage", confidence: 87 },
            { emoji: "🍳", name: "Robot cuisine", description: "Repas rapides et sains", confidence: 84 }
        ],
        stats: {
            confidence: "91%",
            interactions: "203",
            conversion: "+38%",
            engagement: "9.2/10"
        }
    },
    tech: {
        name: "Thomas",
        age: 28,
        location: "Toulouse",
        interests: ["technologie", "gaming", "innovation"],
        greeting: "Hey Thomas ! 💻",
        subtitle: "Les dernières innovations tech juste pour toi",
        products: [
            { emoji: "💻", name: "MacBook Pro M3", description: "Puissance ultime", confidence: 96 },
            { emoji: "🎮", name: "PS5 Pro", description: "Gaming next-gen", confidence: 94 },
            { emoji: "📱", name: "iPhone 15 Pro", description: "Tech de pointe", confidence: 91 },
            { emoji: "🖱️", name: "Logitech MX Master", description: "Souris ergonomique pro", confidence: 86 }
        ],
        stats: {
            confidence: "96%",
            interactions: "89",
            conversion: "+52%",
            engagement: "9.7/10"
        }
    },
    mode: {
        name: "Sophie",
        age: 32,
        location: "Nice",
        interests: ["mode", "beauté", "lifestyle"],
        greeting: "Coucou Sophie ! 👗",
        subtitle: "Tendances mode sélectionnées pour ton style",
        products: [
            { emoji: "👗", name: "Robe Zara", description: "Collection printemps 2026", confidence: 94 },
            { emoji: "👜", name: "Sac Longchamp", description: "Élégance intemporelle", confidence: 91 },
            { emoji: "💄", name: "Palette Sephora", description: "Maquillage tendance", confidence: 88 },
            { emoji: "👠", name: "Escarpins Minelli", description: "Confort et style", confidence: 85 }
        ],
        stats: {
            confidence: "92%",
            interactions: "156",
            conversion: "+41%",
            engagement: "8.9/10"
        }
    }
};

// Fonction appelée au clic sur un profil
function selectProfile(profileType) {
    const profileSelector = document.querySelector('.profile-selector');
    const loading = document.getElementById('loading');
    const personalizedContent = document.getElementById('personalized-content');

    // Masquer sélecteur, afficher chargement
    profileSelector.classList.add('hidden');
    loading.classList.remove('hidden');

    // Simuler l'analyse IA (2 secondes)
    setTimeout(() => {
        // Masquer chargement
        loading.classList.add('hidden');

        // Afficher contenu personnalisé
        displayPersonalizedContent(profileType);
        personalizedContent.classList.remove('hidden');

        // Scroll vers le contenu
        personalizedContent.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// Afficher le contenu personnalisé
function displayPersonalizedContent(profileType) {
    const profile = profilesData[profileType];

    // Message de bienvenue
    document.getElementById('welcome-text').textContent = profile.greeting;
    document.getElementById('welcome-subtitle').textContent = profile.subtitle;

    // Produits recommandés
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    profile.products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="emoji">${product.emoji}</div>
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <span class="confidence">🎯 ${product.confidence}% pertinent</span>
        `;
        productsGrid.appendChild(card);
    });

    // Statistiques
    const statsGrid = document.getElementById('stats-grid');
    statsGrid.innerHTML = '';

    const statsArray = [
        { value: profile.stats.confidence, label: "Précision IA" },
        { value: profile.stats.interactions, label: "Interactions" },
        { value: profile.stats.conversion, label: "Conversion" },
        { value: profile.stats.engagement, label: "Engagement" }
    ];

    statsArray.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        `;
        statsGrid.appendChild(card);
    });

    // Code MCP
    const mcpCode = document.getElementById('mcp-code');
    mcpCode.textContent = `// Avec MCP - Personnalisation simplifiée
const mcp = new MCPClient();

// 1. Collecter données utilisateur
const userData = await mcp.callTool('USER_GET_PROFILE', {
  user_id: '${profile.name.toLowerCase()}'
});

// 2. Analyser avec IA
const recommendations = await mcp.callTool('AI_ANALYZE', {
  profile: userData,
  interests: ${JSON.stringify(profile.interests)},
  location: '${profile.location}'
});

// 3. Personnaliser interface
const ui = await mcp.callTool('UI_PERSONALIZE', {
  recommendations: recommendations,
  user_context: userData
});

// ✅ Résultat : Interface adaptée en 3 lignes !
// Sans MCP = 200+ lignes de code complexe
// Avec MCP = 3 appels simples et universels`;
}

// Réinitialiser pour choisir un autre profil
function resetProfile() {
    const profileSelector = document.querySelector('.profile-selector');
    const personalizedContent = document.getElementById('personalized-content');

    personalizedContent.classList.add('hidden');
    profileSelector.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Ajouter les événements aux boutons
document.addEventListener('DOMContentLoaded', () => {
    const profileButtons = document.querySelectorAll('.profile-btn');

    profileButtons.forEach(button => {
        button.addEventListener('click', () => {
            const profileType = button.getAttribute('data-profile');
            selectProfile(profileType);
        });
    });
});