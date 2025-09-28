// Game Data - Organized with pending first, then won/lost
const gameData = {
    free: [
        {
            league: "Categoria Primera A",
            time: "Today 05:30",
            teams: "Junior Barranquilla vs Deportivo Pasto",
            prediction: "Home Win",
            odds: "1.36",
            status: "pending"
        },
        {
            league: "Liga Nacional",
            time: "Today 06:00",
            teams: "Xelaju MC vs Deportivo Malacateco",
            prediction: "Home Win",
            odds: "1.51",
            status: "pending"
        },
        {
            league: "Liga Primera",
            time: "Today 06:00",
            teams: "Managua FC vs Club Sport Sebaco",
            prediction: "Home/Away (12)",
            odds: "1.25",
            status: "pending"
        },
        {
            league: "Liga MX",
            time: "Today 07:05",
            teams: "Club Tijuana vs Cruz Azul",
            prediction: "Away",
            odds: "2.08",
            status: "pending"
        },
        {
            league: "TFF First League",
            time: "Today 15:30",
            teams: "Keciorengucu vs Pendikspor",
            prediction: "Home /Away",
            odds: "1.34",
            status: "pending"
        }
        {
            league: "Slovakia - 2. Liga",
            time: "Today 12:30",
            teams: "MSK Zilina B vs Tatran Liptovsky M.",
            prediction: "Both teams to score",
            odds: "1.76",
            status: "lost"
        },
        {
            league: "Austria - Regionalliga", 
            time: "Today 12:30",
            teams: "Kapfenberg vs First Vienna FC",
            prediction: "Over 2.5 goals",
            odds: "2.35",
            status: "won"
        },
        {
            league: "Poland - 1. Liga",
            time: "Today 14:00",
            teams: "Miedz Legnica vs Znicz Pruszków",
            prediction: "Home Win",
            odds: "1.63",
            status: "won"
        },
        {
            league: "Italy - Serie C",
            time: "Today 14:30", 
            teams: "Potenza vs Atalanta U23",
            prediction: "Both teams to score",
            odds: "2.24",
            status: "lost"
        }
    ],
    'high-odds': [
        // PENDING GAMES FIRST
        {
            league: "Japan - J2 League",
            time: "Today 10:00",
            teams: "Kataller Toyama vs Tokushima Vortis", 
            prediction: "Away Win",
            odds: "1.97",
            status: "won"
        },
        {
            league: "Korea - K League 1",
            time: "Today 11:30",
            teams: "FC Anyang vs Gwangju FC",
            prediction: "Home Win ", 
            odds: "2.33",
            status: "won"
        },
        {
            league: "Japan - J1 League", 
            time: "Today 12:00",
            teams: "Yokohama FC vs Shonan Bellmare",
            prediction: "Home Win or Draw",
            odds: "1.25",
            status: "won"
        },
        // WON/LOST GAMES AFTER 
        {
            league: "K League 2",
            time: "Today",
            teams: "Gyeongnam FC vs Ansan Greeners",
            prediction: "Home Win or Draw",
            odds: "1.28",
            status: "won"
        }
    ],
    'odd5': [
        // PENDING GAMES FIRST
        {
            league: "Germany - Bundesliga",
            time: "Today 18:30", 
            teams: "FC Koln vs Stuttgart",
            prediction: "Under 3.5 Goals",
            odds: "1.57",
            status: "pending"
        },
        {
            league: "Turkey - Super Lig",
            time: "Today 20:00",
            teams: "Fenerbahce vs Antalyaspor",
            prediction: "Over 2.5 Goals", 
            odds: "1.53",
            status: "pending"
        },
        // WON/LOST GAMES AFTER
        {
            league: "Spain - LaLiga",
            time: "Yesterday",
            teams: "Barcelona vs Real Sociedad",
            prediction: "Home Win", 
            odds: "1.40",
            status: "won"
        },
        {
            league: "Greece - Super League",
            time: "Yesterday",
            teams: "Panetolikos vs Panathinaikos",
            prediction: "Away Win",
            odds: "1.45",
            status: "won"
        }
    ],
    'btts': [
        // PENDING GAMES FIRST
        {
            league: "Spain - LaLiga",
            time: "Today 17:00", 
            teams: "Elche CF vs Celta de Vigo",
            prediction: "Both Teams to Score",
            odds: "1.85",
            status: "pending"
        },
        {
            league: "Scotland - Premiership",
            time: "Today 18:00",
            teams: "Livingston vs Rangers",
            prediction: "Both Teams to Score", 
            odds: "1.75",
            status: "pending"
        },
        {
            league: "Germany - Bundesliga",
            time: "Today 19:30",
            teams: "Freiburg vs Hoffenheim",
            prediction: "Both Teams to Score",
            odds: "1.65", 
            status: "pending"
        },
        // WON/LOST GAMES AFTER
        {
            league: "Czech Republic - 1. Liga",
            time: "Yesterday",
            teams: "Jablonec vs Mladá Boleslav",
            prediction: "Both Teams to Score",
            odds: "1.70",
            status: "won"
        }
    ],
    'max-elite': [
        // PENDING GAMES FIRST
        {
            league: "Thailand - League 1",
            time: "Today 15:00",
            teams: "BG Pathum United vs Port FC", 
            prediction: "Home Win",
            odds: "1.90",
            status: "pending"
        },
        {
            league: "Denmark - Superliga",
            time: "Today 21:00", 
            teams: "Broendby IF vs Odense Boldklub",
            prediction: "Home Win",
            odds: "2.10",
            status: "pending"
        },
        {
            league: "Germany - Bundesliga",
            time: "Today 20:30",
            teams: "Union Berlin vs Hamburger SV",
            prediction: "Away/Draw ", 
            odds: "1.65",
            status: "pending"
        },
        // WON/LOST GAMES AFTER
        {
            league: "Multiple Leagues",
            time: "Yesterday",
            teams: "POTENTER FIVE Accumulator",
            prediction: "5-Fold Special",
            odds: "15.50",
            status: "won"
        }
    ]
};

// Password configuration
const VIP_PASSWORDS = {
    'high-odds': 'modhub21',
    'odd5': 'modhub22',
    'btts': 'modhub23',
    'max-elite': 'modhub24'
};

// Track unlocked tiers
const unlockedTiers = new Set();

// Initialize the application
function initApp() {
    console.log('🚀 Initializing ModHub Odds...');
    
    // Load free predictions immediately
    loadFreePredictions();
    
    // Setup preloader
    setupPreloader();
    
    // Setup event listeners for enter key in password fields
    setupPasswordEnterListeners();
    
    console.log('✅ App initialized successfully!');
}

// Setup preloader
function setupPreloader() {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const mainApp = document.getElementById('main-app');
        
        if (preloader && mainApp) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                mainApp.style.opacity = '1';
            }, 500);
        }
    }, 3000);
}

// Setup enter key listeners for password fields
function setupPasswordEnterListeners() {
    document.querySelectorAll('.password-input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const tier = getTierFromInputId(e.target.id);
                if (tier) {
                    unlockVipTier(tier);
                }
            }
        });
    });
}

// Get tier name from input ID
function getTierFromInputId(inputId) {
    const tierMap = {
        'high-odds-password': 'high-odds',
        'odd5-password': 'odd5',
        'btts-password': 'btts',
        'max-elite-password': 'max-elite'
    };
    return tierMap[inputId];
}

// Switch between tabs
function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Show/hide content tabs
    document.querySelectorAll('.content-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName + '-tab').classList.add('active');
}

// Load free predictions
function loadFreePredictions() {
    console.log('Loading free predictions...');
    const container = document.getElementById('free-predictions');
    
    if (container && gameData.free) {
        renderPredictions(container, gameData.free);
        console.log('✅ Free predictions loaded!');
    }
}

// Unlock VIP tier
function unlockVipTier(tier) {
    console.log('Attempting to unlock tier:', tier);
    
    const passwordInput = document.getElementById(tier + '-password');
    const enteredPassword = passwordInput.value.trim();
    
    if (!enteredPassword) {
        showNotification('Please enter a password', 'error');
        return;
    }
    
    if (enteredPassword === VIP_PASSWORDS[tier]) {
        unlockedTiers.add(tier);
        loadVipPredictions(tier);
        showNotification('✅ Access granted! Loading predictions...', 'success');
        passwordInput.value = '';
    } else {
        showNotification('❌ Invalid password. Please try again.', 'error');
        passwordInput.value = '';
        shakeElement(passwordInput);
    }
}

// Load VIP predictions
function loadVipPredictions(tier) {
    console.log('Loading VIP predictions for:', tier);
    
    const container = document.getElementById(tier + '-predictions');
    const predictions = gameData[tier];
    
    if (container && predictions) {
        renderPredictions(container, predictions);
        console.log(`✅ Loaded ${predictions.length} predictions for ${tier}`);
    } else {
        console.error('❌ Could not load predictions for:', tier);
    }
}

// Render predictions to container
function renderPredictions(container, predictions) {
    if (!container) {
        console.error('Container not found');
        return;
    }
    
    if (!predictions || predictions.length === 0) {
        container.innerHTML = '<div class="no-predictions">No predictions available</div>';
        return;
    }
    
    const predictionsHTML = predictions.map(pred => `
        <div class="prediction-card">
            <div class="prediction-header">
                <span class="league">${pred.league}</span>
                <span class="match-time">${pred.time}</span>
            </div>
            <div class="match-teams">${pred.teams}</div>
            <div class="prediction-details">
                <span class="prediction-type">${pred.prediction}</span>
                <span class="prediction-odds">@${pred.odds}</span>
            </div>
            <div class="status-badge status-${pred.status}">
                ${pred.status.toUpperCase()}
            </div>
        </div>
    `).join('');
    
    container.innerHTML = predictionsHTML;
    console.log(`✅ Rendered ${predictions.length} predictions`);
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 16px 20px;
                border-radius: 12px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                animation: slideInRight 0.3s ease;
                max-width: 400px;
                border-left: 4px solid;
            }
            .notification-success {
                background: var(--success);
                border-left-color: #059669;
            }
            .notification-error {
                background: var(--primary);
                border-left-color: var(--primary-dark);
            }
            .notification button {
                background: transparent;
                border: none;
                color: white;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: background 0.3s ease;
            }
            .notification button:hover {
                background: rgba(255,255,255,0.1);
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .no-predictions {
                text-align: center;
                padding: var(--space-xl);
                color: var(--text-secondary);
                font-style: italic;
                grid-column: 1 / -1;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 4000);
}

// Shake element for wrong password
function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Add shake animation
const shakeAnimation = document.createElement('style');
shakeAnimation.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeAnimation);

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('2024', new Date().getFullYear());
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM loaded, initializing app...');
    initApp();
    setCurrentYear();
});
