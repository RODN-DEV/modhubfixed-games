// Game Data - Organized with pending first, then won/lost
const gameData = {
    free: [
        {
    league: "Peru - Liga 1",
    time: "Today 22:45",
    teams: "Sport Huancayo vs Alianza U",
    prediction: "Home Win",
    odds: "1.61",
    status: "pending"
},
{
    league: "England - National League",
    time: "Today 22:45",
    teams: "Solihull Moors vs Woking",
    prediction: "Home/Away (12)",
    odds: "1.27",
    status: "pending"
},
{
    league: "Germany - Lower League",
    time: "Today 21:00",
    teams: "Alemannia Aachen va Erzgb",
    prediction: "Home/Away (12)",
    odds: "1.25",
    status: "pending"
},
         {
            league: "Norway - 3. Division",
            time: "Today 12:00",
            teams: "Stabæk II vs Sarpsborg 08 II",
            prediction: "Over 2.5 goals",
            odds: "1.43",
            status: "won"
        },
        {
            league: "Portugal - Primeira Liga",
            time: "Today 19:00",
            teams: "Arouca vs FC Porto",
            prediction: "Away Win",
            odds: "1.33",
            status: "won"
        },
        {
            league: "Bolivia - Primeira División",
            time: "Today 19:00",
            teams: "The Strongest vs Oriente Petrolero",
            prediction: "Home Win",
            odds: "1.30",
            status: "won"
        },
        {
            league: "Uzbekistan - Super League",
            time: "Today 14:00",
            teams: "Dinamo Samarqand vs Shortan",
            prediction: "Home Win",
            odds: "1.38",
            status: "won"
        },
        {
            league: "Turkey - Süper Lig",
            time: "Today 17:00",
            teams: "Besiktas vs Kocaelispor",
            prediction: "Home Win",
            odds: "1.40",
            status: "won"
        },
        {
            league: "Liga MX",
            time: "Today 07:05",
            teams: "Club Tijuana vs Cruz Azul",
            prediction: "Away",
            odds: "2.08",
            status: "lost"
        },
        {
            league: "TFF First League",
            time: "Today 15:30",
            teams: "Keciorengucu vs Pendikspor",
            prediction: "Home /Away",
            odds: "1.34",
            status: "lost"
        },
        {
            league: "Categoria Primera A",
            time: "Today 05:30",
            teams: "Junior Barranquilla vs Deportivo Pasto",
            prediction: "Home Win",
            odds: "1.36",
            status: "won"
        },
        {
            league: "Liga Nacional",
            time: "Today 06:00",
            teams: "Xelaju MC vs Deportivo Malacateco",
            prediction: "Home Win",
            odds: "1.51",
            status: "won"
        },
        {
            league: "Liga Primera",
            time: "Today 06:00",
            teams: "Managua FC vs Club Sport Sebaco",
            prediction: "Home/Away (12)",
            odds: "1.25",
            status: "won"
        }
    ],
    'high-odds': [
        // PENDING GAMES FIRST
        {
    league: "Norway - 3. Division",
    time: "Today 16:30",
    teams: "Lillestrøm II vs Elverum",
    prediction: "Over 2.5 goals",
    odds: "1.22",
    status: "pending"
},
{
    league: "England - Championship",
    time: "Today 18:45",
    teams: "Birmingham vs Sheffield Wednesday",
    prediction: "Home Win",
    odds: "1.42",
    status: "pending"
},
{
    league: "England - League One",
    time: "Today 18:45",
    teams: "Cardiff vs Burton Albion",
    prediction: "Home Win",
    odds: "1.40",
    status: "pending"
},
{
    league: "USA - MLS",
    time: "Today 23:30",
    teams: "Inter Miami vs Chicago Fire",
    prediction: "Over 2.5 goals",
    odds: "1.36",
    status: "pending"
},
{
    league: "UEFA Champions League",
    time: "Today 19:00",
    teams: "Pafos vs Bayern München",
    prediction: "Over 2.5 goals",
    odds: "1.33",
    status: "pending"
},
{
    league: "UEFA Champions League",
    time: "Today 19:00",
    teams: "Inter Milan vs Slavia Praha",
    prediction: "Home Win",
    odds: "1.33",
    status: "pending"
    },
            {
                league: "Finland - Veikkausiliga",
                time: "Today 20:00",
                teams: "HJK Helsinki",
                prediction: "Over 2.5 goals",
                odds: "1.40",
                status: "won"
            },
            {
                league: "Sweden - Allsvenskan",
                time: "Today 20:00",
                teams: "Djurgårdens",
                prediction: "under 3.5 goals",
                odds: "1.45",
                status: "lost"
            },
            {
                league: "Norway - 1st Division",
                time: "Today 20:00",
                teams: "Moss vs Lillestrom",
                prediction: "Away Win",
                odds: "1.40",
                status: "won"
            },
            {
                league: "Iceland - Urvalsdelid",
                time: "Today 22:15",
                teams: "Stjarnan vs V. Reykjavik",
                prediction: "Both teams to score",
                odds: "1.45",
                status: "won"
            },
            {
                league: "Norway - Eliteserien",
                time: "Today 20:00",
                teams: "Haugesund vs Sandefjord",
                prediction: "Over 2.5 goals",
                odds: "1.53",
                status: "won"
            },
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
    league: "UEFA Champions League",
    time: "Today 21:00",
    teams: "Pafos FC vs Bayern Munich",
    prediction: "Away Win",
    odds: "1.53",
    status: "pending"
},
{
    league: "UEFA Champions League",
    time: "Today 21:00",
    teams: "Inter Milan vs Slavia Prague",
    prediction: "Home Win",
    odds: "1.43",
    status: "pending"
},
{
    league: "England - Championship",
    time: "Today 20:45",
    teams: "Middlesbrough vs Stoke City",
    prediction: "Home Win",
    odds: "1.42",
    status: "pending"
},
{
    league: "Spain - La Liga",
    time: "Today 21:00",
    teams: "Valencia vs Real Oviedo",
    prediction: "Home Win",
    odds: "1.40",
    status: "pending"
},
{
    league: "England - Championship",
    time: "Today 20:45",
    teams: "Leicester City vs Wrexham",
    prediction: "Home Win",
    odds: "1.55",
    status: "pending"
},
            {
                league: "Turkey - Super League",
                time: "Today 20:00",
                teams: "Besiktas vs Kocaelispor",
                prediction: "Home Win",
                odds: "1.47",
                status: "won"
            },
            {
                league: "Portugal - Primeira Liga",
                time: "Today 22:00",
                teams: "Arouca vs Porto",
                prediction: "Away Win",
                odds: "1.43",
                status: "won"
            },
            {
                league: "Holland - Eerste Divisie",
                time: "Today 21:00",
                teams: "ADO Den Haag vs TOP Oss",
                prediction: "Home Win",
                odds: "1.25",
                status: "won"
            },
            {
                league: "Spain - LaLiga",
                time: "Today 22:00",
                teams: "Valencia vs Real Oviedo",
                prediction: "Under 3.5 goals",
                odds: "1.26",
                status: "won"
            },
        {
            league: "Germany - Bundesliga",
            time: "yesterday 18:30", 
            teams: "FC Koln vs Stuttgart",
            prediction: "Under 3.5 Goals",
            odds: "1.57",
            status: "won"
        },
        {
            league: "Turkey - Super Lig",
            time: "yesterday 20:00",
            teams: "Fenerbahce vs Antalyaspor",
            prediction: "Over 2.5 Goals", 
            odds: "1.53",
            status: "lost"
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
    league: "UEFA Champions League",
    time: "Today 22:00",
    teams: "Atletico Madrid vs Eintracht Frankfurt",
    prediction: "Both Teams to Score",
    odds: "1.66",
    status: "pending"
},
{
    league: "UEFA Champions League",
    time: "Today 22:00",
    teams: "Chelsea vs Benfica",
    prediction: "Both Teams to Score",
    odds: "1.73",
    status: "pending"
},
{
    league: "UEFA Champions League",
    time: "Today 22:00",
    teams: "Marseille vs Ajax",
    prediction: "Both Teams to Score",
    odds: "1.74",
    status: "pending"
},
{
    league: "UEFA Champions League",
    time: "Today 22:00",
    teams: "Bodo/Glimt vs Tottenham Hotspur",
    prediction: "Both Teams to Score",
    odds: "1.55",
    status: "pending"
},
        {
        league: "Turkey - First League",
        time: "Today 15:30",
        teams: "Keciorengucu vs Pendikspor",
        prediction: "Both Teams to Score",
        odds: "1.99",
        status: "lost"
    },
    {
        league: "Poland - Lower League",
        time: "Today 16:00",
        teams: "Pogoń Grod. Mazowiecki vs KS Łódź",
        prediction: "Both Teams to Score",
        odds: "1.99",
        status: "lost"
    },
    {
        league: "Norway - Eliteserien",
        time: "Today 20:00",
        teams: "Odd vs Aalesund",
        prediction: "Both Teams to Score",
        odds: "1.99",
        status: "lost"
    },
    {
        league: "Greece - Super League",
        time: "Today 19:30",
        teams: "Atromitos vs Larissa",
        prediction: "Both Teams to Score",
        odds: "1.99",
        status: "won"
    },
        
        // WON/LOST GAMES AFTER
        {
            league: "Spain - LaLiga",
            time: "yesterday 17:00", 
            teams: "Elche CF vs Celta de Vigo",
            prediction: "Both Teams to Score",
            odds: "1.85",
            status: "won"
        },
        {
            league: "Scotland - Premiership",
            time: "yesterday 18:00",
            teams: "Livingston vs Rangers",
            prediction: "Both Teams to Score", 
            odds: "1.75",
            status: "won"
        },
        {
            league: "Germany - Bundesliga",
            time: "yesterday 19:30",
            teams: "Freiburg vs Hoffenheim",
            prediction: "Both Teams to Score",
            odds: "1.65", 
            status: "won"
        },
        {
            league: "Czech Republic - 1. Liga",
            time: "Yesterday",
            teams: "Jablonec vs Mladá Boleslav",
            prediction: "Both Teams to Score No",
            odds: "1.70",
            status: "won"
        }
    ],
    'max-elite': [
        // PENDING GAMES FIRST
                {
    league: "AFC Champions League",
    time: "Today 21:15",
    teams: "Al-Ittihad FC vs Al-Ahli",
    prediction: "Over 2.5 goals",
    odds: "1.50",
    status: "pending"
},
{
    league: "Turkey - Super League",
    time: "Today 22:00",
    teams: "Galatasaray vs Liverpool",
    prediction: "Away Win",
    odds: "1.70",
    status: "pending"
},
{
    league: "UEFA Champions League",
    time: "Today 22:00",
    teams: "Inter Milan vs Slavia Praha",
    prediction: "Home Win",
    odds: "1.38",
    status: "pending"
},
        {
        league: "Ukraine - Lower League",
        time: "Today 16:30",
        teams: "FSC Mariupol vs Bukovyna ",
        prediction: "Away Win",
        odds: "1.83",
        status: "won"
    },
    {
        league: "Armenia - Premier League",
        time: "Today 19:00",
        teams: "BKMA vs Ararat-Armenia",
        prediction: "Away Win",
        odds: "1.37",
        status: "lost"
    },
    {
        league: "Poland - 1. Liga",
        time: "Today 20:00",
        teams: "Zaglebie Lubin vs Arka Gdynia",
        prediction: "BTTS No",
        odds: "1.80",
        status: "won"
    },
    {
        league: "Denmark - Superliga",
        time: "Today 21:00",
        teams: "FC Midtjylland vs Randers FC",
        prediction: "Home&Over 1.5 goals",
        odds: "2.04",
        status: "won"
    },      
        // WON/LOST GAMES AFTER
        {
            league: "Thailand - League 1",
            time: "Today 15:00",
            teams: "BG Pathum United vs Port FC", 
            prediction: "Home Win",
            odds: "1.90",
            status: "won"
        },
        {
            league: "Denmark - Superliga",
            time: "Today 21:00", 
            teams: "Broendby IF vs Odense Boldklub",
            prediction: "Home Win",
            odds: "2.10",
            status: "won"
        },
        {
            league: "Germany - Bundesliga",
            time: "Today 20:30",
            teams: "Union Berlin vs Hamburger SV",
            prediction: "Away/Draw ", 
            odds: "1.65",
            status: "won"
        },
        {
            league: "Multiple Leagues",
            time: "Saturday",
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
    'odd5': 'modhubi',
    'btts': 'modhubj',
    'max-elite': 'modhubk'
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
