// ===== MODHUB ODDS - PREMIUM PREDICTIONS =====
class ModHubOdds {
    constructor() {
        this.passwords = {
            'high-odds': 'modhub21',
            'odd5': 'modhub22',
            'btts': 'modhub23',
            'max-elite': 'modhub24'
        };
        
        this.unlockedTiers = new Set();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadFreePredictions();
        this.setCurrentYear();
        this.setupPreloader();
        console.log('ModHub Odds initialized successfully!');
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                this.switchTab(e.currentTarget.dataset.tab);
            });
        });

        // Footer links
        document.querySelectorAll('.footer-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(e.currentTarget.dataset.tab);
            });
        });

        // Enter key for password inputs
        document.querySelectorAll('.password-input').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const tierCard = e.target.closest('.vip-tier-card');
                    const tier = tierCard.id.replace('-tier', '');
                    this.unlockVipTier(tier);
                }
            });
        });

        // Support page buttons
        document.querySelectorAll('.vip-purchase-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchTab('vip');
            });
        });

        console.log('Event listeners setup complete!');
    }

    setupPreloader() {
        // Auto hide after 3 seconds
        setTimeout(() => {
            this.hidePreloader();
        }, 3000);
    }

    hidePreloader() {
        const preloader = document.getElementById('preloader');
        const mainApp = document.getElementById('main-app');
        
        if (preloader && mainApp) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                mainApp.style.opacity = '1';
            }, 500);
        }
    }

    switchTab(tabName) {
        console.log('Switching to tab:', tabName);
        
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.tab === tabName);
        });

        // Show/hide content tabs
        document.querySelectorAll('.content-tab').forEach(tab => {
            tab.classList.toggle('active', tab.id === `${tabName}-tab`);
        });

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    unlockVipTier(tier) {
        console.log('Attempting to unlock tier:', tier);
        const tierCard = document.getElementById(`${tier}-tier`);
        const input = tierCard.querySelector('.password-input');
        const password = input.value.trim();
        
        if (password === this.passwords[tier]) {
            this.unlockedTiers.add(tier);
            this.showTierPredictions(tier);
            this.showNotification('✅ Access granted! Loading predictions...', 'success');
            input.value = '';
        } else {
            this.showNotification('❌ Invalid password. Please try again.', 'error');
            input.value = '';
            this.shakeElement(input);
        }
    }

    showTierPredictions(tier) {
        console.log('Loading predictions for tier:', tier);
        const predictions = this.getTierPredictions(tier);
        const container = document.getElementById(`${tier}-predictions`);
        
        if (container) {
            this.renderPredictions(container, predictions, true);
            console.log(`Loaded ${predictions.length} predictions for ${tier}`);
        } else {
            console.error('Container not found for tier:', tier);
        }
    }

    loadFreePredictions() {
        console.log('Loading free predictions...');
        const predictions = [
            {
                league: "Slovakia - 2. Liga",
                time: "Today 12:30",
                teams: "MSK Zilina B vs Tatran Liptovsky M.",
                prediction: "Both teams to score",
                odds: "1.76",
                status: "pending"
            },
            {
                league: "Austria - Regionalliga", 
                time: "Today 12:30",
                teams: "Kapfenberg vs First Vienna FC",
                prediction: "Over 2.5 goals",
                odds: "2.35",
                status: "pending"
            },
            {
                league: "Poland - 1. Liga",
                time: "Today 14:00",
                teams: "Miedz Legnica vs Znicz Pruszków",
                prediction: "Home Win",
                odds: "1.63",
                status: "pending"
            },
            {
                league: "Italy - Serie C",
                time: "Today 14:30", 
                teams: "Potenza vs Atalanta U23",
                prediction: "Both teams to score",
                odds: "2.24",
                status: "pending"
            }
        ];

        this.renderPredictions('free-predictions', predictions);
        console.log('Free predictions loaded successfully!');
    }

    getTierPredictions(tier) {
        console.log('Getting predictions for tier:', tier);
        
        const predictions = {
            'high-odds': [
                {
                    league: "Japan - J2 League",
                    time: "Today 10:00",
                    teams: "Kataller Toyama vs Tokushima Vortis", 
                    prediction: "Away Win",
                    odds: "1.97",
                    status: "pending"
                },
                {
                    league: "Korea - K League 1",
                    time: "Today 11:30",
                    teams: "FC Anyang vs Gwangju FC",
                    prediction: "Home Win or Draw", 
                    odds: "1.33",
                    status: "pending"
                },
                {
                    league: "Japan - J1 League", 
                    time: "Today 12:00",
                    teams: "Yokohama FC vs Shonan Bellmare",
                    prediction: "Home Win or Draw",
                    odds: "1.25",
                    status: "pending"
                },
                {
                    league: "Premier League",
                    time: "Today 12:00",
                    teams: "Taichung Futuro vs Taipower",
                    prediction: "Home Win or Away Win",
                    odds: "1.27",
                    status: "pending"
                }
            ],
            'odd5': [
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
                {
                    league: "Spain - LaLiga",
                    time: "Today 21:00",
                    teams: "Barcelona vs Real Sociedad",
                    prediction: "Home Win", 
                    odds: "1.40",
                    status: "pending"
                },
                {
                    league: "Greece - Super League",
                    time: "Today 19:30",
                    teams: "Panetolikos vs Panathinaikos",
                    prediction: "Away Win",
                    odds: "1.45",
                    status: "pending"
                }
            ],
            'btts': [
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
                {
                    league: "Czech Republic - 1. Liga",
                    time: "Today 16:00",
                    teams: "Jablonec vs Mladá Boleslav",
                    prediction: "Both Teams to Score",
                    odds: "1.70",
                    status: "pending"
                }
            ],
            'max-elite': [
                {
                    league: "Thailand - League 1",
                    time: "Today 15:00",
                    teams: "BG Pathum United vs Port FC", 
                    prediction: "Home Win",
                    odds: "1.80",
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
                    prediction: "Home Win", 
                    odds: "1.95",
                    status: "pending"
                },
                {
                    league: "Multiple Leagues",
                    time: "Today Various",
                    teams: "POTENTER FIVE Accumulator",
                    prediction: "5-Fold Special",
                    odds: "15.50",
                    status: "pending"
                }
            ]
        };

        return predictions[tier] || [];
    }

    renderPredictions(containerId, predictions, isVip = false) {
        console.log(`Rendering ${predictions.length} predictions in:`, containerId);
        const container = document.getElementById(containerId);
        
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }

        if (predictions.length === 0) {
            container.innerHTML = '<div class="no-predictions">No predictions available at the moment.</div>';
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
        console.log(`Successfully rendered ${predictions.length} predictions`);
    }

    showNotification(message, type) {
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

    shakeElement(element) {
        element.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }

    setCurrentYear() {
        const yearElements = document.querySelectorAll('.footer-bottom p');
        yearElements.forEach(element => {
            element.innerHTML = element.innerHTML.replace('2024', new Date().getFullYear());
        });
    }
}

// Global functions
function skipPreloader() {
    if (window.modHubOdds) {
        window.modHubOdds.hidePreloader();
    }
}

function unlockVipTier(tier) {
    if (window.modHubOdds) {
        window.modHubOdds.unlockVipTier(tier);
    }
}

function switchTab(tab) {
    if (window.modHubOdds) {
        window.modHubOdds.switchTab(tab);
    }
}

// Add missing CSS for no-predictions message
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .no-predictions {
        text-align: center;
        padding: var(--space-xl);
        color: var(--text-secondary);
        font-style: italic;
        background: var(--bg-card);
        border-radius: var(--radius);
        border: 2px dashed var(--border);
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(additionalStyles);

// Initialize application with error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.modHubOdds = new ModHubOdds();
        console.log('🎉 ModHub Odds loaded successfully!');
    } catch (error) {
        console.error('❌ Error loading ModHub Odds:', error);
        // Fallback: Ensure free predictions load even if there's an error
        const freeContainer = document.getElementById('free-predictions');
        if (freeContainer) {
            freeContainer.innerHTML = `
                <div class="prediction-card">
                    <div class="prediction-header">
                        <span class="league">Emergency Load</span>
                        <span class="match-time">Now</span>
                    </div>
                    <div class="match-teams">Games will load shortly</div>
                    <div class="prediction-details">
                        <span class="prediction-type">Please refresh page</span>
                        <span class="prediction-odds">@1.00</span>
                    </div>
                    <div class="status-badge status-pending">
                        LOADING
                    </div>
                </div>
            `;
        }
    }
});

// Add debug info
console.log('🚀 ModHub Odds script loaded successfully!');