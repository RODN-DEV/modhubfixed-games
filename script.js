// ===== PROFESSIONAL BETTING ANALYTICS PLATFORM =====
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
    }

    setupEventListeners() {
        // Navigation tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchTab(e.currentTarget.dataset.tab);
            });
        });

        // Footer links
        document.querySelectorAll('.footer-links a[data-tab]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(e.currentTarget.dataset.tab);
            });
        });

        // Enter key for password inputs
        document.querySelectorAll('.access-code input').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const tier = e.target.dataset.tier;
                    this.unlockTier(tier);
                }
            });
        });
    }

    setupPreloader() {
        const preloader = document.getElementById('preloader');
        const mainApp = document.getElementById('main-app');
        
        // Auto transition after 5 seconds
        setTimeout(() => {
            this.hidePreloader();
        }, 5000);
    }

    hidePreloader() {
        const preloader = document.getElementById('preloader');
        const mainApp = document.getElementById('main-app');
        
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            mainApp.style.opacity = '1';
        }, 500);
    }

    switchTab(tabName) {
        // Update navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        // Show/hide content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.toggle('active', section.id === `${tabName}-tab`);
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    unlockTier(tier) {
        const input = document.querySelector(`.access-code input[data-tier="${tier}"]`);
        const password = input.value.trim();
        
        if (password === this.passwords[tier]) {
            this.unlockedTiers.add(tier);
            this.showTierContent(tier);
            this.showNotification('Access granted', 'success');
            input.value = '';
        } else {
            this.showNotification('Invalid access code', 'error');
            input.value = '';
            this.shakeElement(input);
        }
    }

    showTierContent(tier) {
        const contentId = `${tier}-content`;
        const contentElement = document.getElementById(contentId);
        
        if (contentElement) {
            contentElement.style.display = 'block';
            
            // Load predictions for this tier
            this.loadTierPredictions(tier);
            
            // Show premium content area if this is the first unlocked tier
            const premiumContent = document.querySelector('.premium-content');
            premiumContent.style.display = 'block';
        }
    }

    loadFreePredictions() {
        const predictions = [
            {
                league: "Slovakia - 2. Liga",
                time: "28.09 12:30",
                teams: "MSK Zilina B vs Tatran Liptovsky M.",
                prediction: "Both teams to score",
                odds: "1.76",
                status: "pending"
            },
            {
                league: "Austria - Regionalliga",
                time: "28.09 12:30", 
                teams: "Kapfenberg vs First Vienna FC",
                prediction: "Over 2.5 goals",
                odds: "2.35",
                status: "pending"
            },
            {
                league: "Poland - 1. Liga",
                time: "28.09 14:00",
                teams: "Miedz Legnica vs Znicz Pruszków",
                prediction: "Home Win",
                odds: "1.63",
                status: "pending"
            },
            {
                league: "Italy - Serie C",
                time: "28.09 14:30",
                teams: "Potenza vs Atalanta U23",
                prediction: "Both teams to score", 
                odds: "2.24",
                status: "pending"
            }
        ];

        this.renderPredictions('free-predictions', predictions);
    }

    loadTierPredictions(tier) {
        const predictions = this.getTierPredictions(tier);
        const containerId = `${tier}-predictions`;
        this.renderPredictions(containerId, predictions, true);
    }

    getTierPredictions(tier) {
        const predictions = {
            'high-odds': [
                {
                    league: "Japan - J2 League",
                    time: "28.09 10:00", 
                    teams: "Kataller Toyama vs Tokushima Vortis",
                    prediction: "Away Win",
                    odds: "1.97",
                    status: "pending"
                },
                {
                    league: "Korea - K League 1",
                    time: "28.09 11:30",
                    teams: "FC Anyang vs Gwangju FC", 
                    prediction: "Home Win or Draw",
                    odds: "1.33",
                    status: "pending"
                },
                {
                    league: "Japan - J1 League",
                    time: "28.09 12:00",
                    teams: "Yokohama FC vs Shonan Bellmare",
                    prediction: "Home Win or Draw", 
                    odds: "1.25",
                    status: "pending"
                }
            ],
            'odd5': [
                {
                    league: "Germany - Bundesliga", 
                    time: "28.09 18:30",
                    teams: "FC Koln vs Stuttgart",
                    prediction: "Under 3.5 Goals",
                    odds: "1.57",
                    status: "pending"
                },
                {
                    league: "Turkey - Super Lig",
                    time: "28.09 20:00",
                    teams: "Fenerbahce vs Antalyaspor",
                    prediction: "Over 2.5 Goals",
                    odds: "1.53",
                    status: "pending"
                }
            ],
            'btts': [
                {
                    league: "Spain - LaLiga",
                    time: "28.09 17:00",
                    teams: "Elche CF vs Celta de Vigo", 
                    prediction: "Both Teams to Score",
                    odds: "1.85",
                    status: "pending"
                },
                {
                    league: "Scotland - Premiership",
                    time: "28.09 18:00",
                    teams: "Livingston vs Rangers",
                    prediction: "Both Teams to Score",
                    odds: "1.75", 
                    status: "pending"
                },
                {
                    league: "Germany - Bundesliga",
                    time: "28.09 19:30", 
                    teams: "Freiburg vs Hoffenheim",
                    prediction: "Both Teams to Score",
                    odds: "1.65",
                    status: "pending"
                }
            ],
            'max-elite': [
                {
                    league: "Thailand - League 1",
                    time: "28.09 15:00",
                    teams: "BG Pathum United vs Port FC",
                    prediction: "Home Win", 
                    odds: "1.80",
                    status: "pending"
                },
                {
                    league: "Denmark - Superliga",
                    time: "28.09 21:00",
                    teams: "Broendby IF vs Odense Boldklub",
                    prediction: "Home Win",
                    odds: "2.10",
                    status: "pending"
                },
                {
                    league: "Germany - Bundesliga", 
                    time: "28.09 20:30",
                    teams: "Union Berlin vs Hamburger SV",
                    prediction: "Home Win",
                    odds: "1.95",
                    status: "pending"
                }
            ]
        };

        return predictions[tier] || [];
    }

    renderPredictions(containerId, predictions, isPremium = false) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const predictionsHTML = predictions.map(pred => `
            <div class="prediction-card">
                <div class="prediction-header">
                    <span class="league">${pred.league}</span>
                    <span class="match-time">${pred.time}</span>
                </div>
                <div class="matchup">${pred.teams}</div>
                <div class="prediction-details">
                    <span class="prediction-type">${pred.prediction}</span>
                    <span class="prediction-odds">@${pred.odds}</span>
                </div>
                <div class="status-indicator status-${pred.status}">
                    ${pred.status.toUpperCase()}
                </div>
            </div>
        `).join('');

        container.innerHTML = predictionsHTML;
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

        // Add styles if not present
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 16px 20px;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    animation: slideInRight 0.3s ease;
                    max-width: 400px;
                    border-left: 4px solid;
                }
                .notification-success {
                    background: var(--success);
                    border-left-color: #059669;
                }
                .notification-error {
                    background: var(--error);
                    border-left-color: #dc2626;
                }
                .notification button {
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 4px;
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
        document.querySelectorAll('.footer-bottom p').forEach(p => {
            p.innerHTML = p.innerHTML.replace('2024', new Date().getFullYear());
        });
    }
}

// Global functions for onclick handlers
function skipPreloader() {
    window.modHubOdds.hidePreloader();
}

function unlockTier(tier) {
    window.modHubOdds.unlockTier(tier);
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    window.modHubOdds = new ModHubOdds();
});

// Add shake animation
const shakeStyles = document.createElement('style');
shakeStyles.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyles);