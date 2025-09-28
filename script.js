// Custom message box function to replace alert()
function showMessage(message, type = 'info') {
    const container = document.getElementById('message-box-container');
    if (!container) return; 

    const alertBox = document.createElement('div');
    alertBox.className = `message-box message-box-${type}`;
    alertBox.innerHTML = `
        <p>${message}</p>
        <button onclick="this.parentNode.remove()"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 5000);
}


// ===== MODHUB ODDS - PREMIUM PREDICTIONS =====
class ModHubOdds {
    constructor() {
        this.passwords = {
            'high-odds': 'modhub21',
            'odd5': 'modhub22',
            'btts': 'modhub23',
            'max-elite': 'modhub24' // Code for the Game
        };
        
        this.unlockedTiers = new Set();
        this.init();
        
        // Game state management for the Max Elite Game
        this.maxEliteSecretNumber = null;
    }

    init() {
        this.setupEventListeners();
        this.loadFreePredictions();
        this.renderVipTiers(); // Initial render to show locked tiers
        this.setCurrentYear();
        this.setupPreloader();
        console.log('ModHub Odds initialized successfully!');
    }

    setupEventListeners() {
        // Navigation & Footer links
        document.querySelectorAll('.nav-item, .footer-links a').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(e.currentTarget.dataset.tab);
            });
        });

        // Event delegation for VIP container (handle unlock buttons and game buttons)
        const vipContainer = document.getElementById('vip-tiers-container');
        if (vipContainer) {
            // Unlock button handler
            vipContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('access-btn')) {
                    const tier = e.target.dataset.tier;
                    this.unlockVipTier(tier);
                } else if (e.target.id === 'max-elite-guess-btn') {
                    // Game guess button handler
                    this.checkMaxEliteGuess();
                }
            });
            
            // Enter key handler for password inputs
            vipContainer.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && e.target.classList.contains('password-input')) {
                    const tierCard = e.target.closest('.vip-tier-card');
                    const tier = tierCard.id.replace('-tier', '');
                    this.unlockVipTier(tier);
                } else if (e.key === 'Enter' && e.target.id === 'max-elite-guess-input') {
                    // Enter key handler for game input
                    this.checkMaxEliteGuess();
                }
            });
        }
    }

    switchTab(targetTab) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });

        // Show the target tab
        const targetElement = document.getElementById(targetTab);
        if (targetElement) {
            targetElement.style.display = 'block';
        }

        // Update active navigation item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.tab === targetTab) {
                item.classList.add('active');
            }
        });

        // Re-render VIP tiers whenever the VIP tab is opened to handle lock/unlock state
        if (targetTab === 'vip') {
            this.renderVipTiers();
        }
    }

    setCurrentYear() {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    setupPreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                setTimeout(() => preloader.remove(), 800);
            }, 1500);
        }
    }

    loadFreePredictions() {
        // Mock data for predictions
        const predictions = [
            { league: 'Premier League', teams: 'Liverpool vs Chelsea', type: 'Over 2.5 Goals', odds: '@1.85', status: 'status-free' },
            { league: 'La Liga', teams: 'Real Madrid vs Barcelona', type: 'BTTS Yes', odds: '@1.60', status: 'status-win' },
            { league: 'Serie A', teams: 'Inter Milan vs Juventus', type: 'Home Win', odds: '@2.10', status: 'status-loss' },
            { league: 'Bundesliga', teams: 'Bayern vs Dortmund', type: 'Double Chance 1X', odds: '@1.40', status: 'status-pending' }
        ];
        
        const html = predictions.map(p => `
            <div class="prediction-card">
                <div class="prediction-header">
                    <span class="league">${p.league}</span>
                    <span class="match-time">Today, 20:00 GMT</span>
                </div>
                <div class="match-teams">${p.teams}</div>
                <div class="prediction-details">
                    <span class="prediction-type">${p.type}</span>
                    <span class="prediction-odds">${p.odds}</span>
                </div>
                <div class="status-badge ${p.status}">
                    ${p.status.replace('status-', '').toUpperCase()}
                </div>
            </div>
        `).join('');

        const freeContainer = document.getElementById('free-predictions');
        const homeContainer = document.getElementById('home-predictions');
        if (freeContainer) freeContainer.innerHTML = html;
        if (homeContainer) homeContainer.innerHTML = html;
    }

    renderVipTiers() {
        const tiers = [
            { id: 'high-odds', title: 'High Odds Jackpot', icon: '<i class="fas fa-dice"></i>', odds: 'Odds @4.50+', description: 'Expert predictions for huge winnings.' },
            { id: 'odd5', title: 'Five-Fold Accumulator', icon: '<i class="fas fa-layer-group"></i>', odds: 'Odds @5.00', description: 'Selected high-confidence 5-fold accas.' },
            { id: 'btts', title: 'BTTS Masterclass', icon: '<i class="fas fa-futbol"></i>', odds: 'Odds @1.70+', description: 'Both Teams To Score daily locks.' },
            { id: 'max-elite', title: 'Max Elite Game Access', icon: '<i class="fas fa-gamepad"></i>', odds: 'Exclusive Content', description: 'Unlock this tier to play an exclusive game!' }
        ];

        const container = document.getElementById('vip-tiers-container');
        if (!container) return;
        
        // If Max Elite is unlocked, render the game instead of the tier card
        if (this.unlockedTiers.has('max-elite')) {
            container.innerHTML = this.renderMaxEliteGame();
            return;
        }
        
        // Otherwise, render all tiers (locked or with predictions)
        const html = tiers.map(tier => {
            const isUnlocked = this.unlockedTiers.has(tier.id);
            const tierIcon = isUnlocked ? '<i class="fas fa-lock-open" style="color:var(--success);"></i>' : tier.icon;
            
            let content;
            if (isUnlocked && tier.id !== 'max-elite') {
                // Show predictions for non-game tiers
                content = `<div class="unlocked-content">
                            <h3>Tier Unlocked!</h3>
                            <div class="predictions-container">${this.loadVipPredictions(tier.id)}</div>
                           </div>`;
            } else if (isUnlocked && tier.id === 'max-elite') {
                // Show the game content (this won't happen here as it returns early, but kept for logic safety)
                content = this.renderMaxEliteGame();
            } else {
                // Show password form for locked tiers
                content = `<p class="tier-description">${tier.description}</p>
                           <div class="access-form">
                               <input type="password" id="${tier.id}-password" class="password-input" placeholder="Enter Access Code">
                               <button class="access-btn btn-primary" data-tier="${tier.id}">Unlock</button>
                           </div>
                           <p class="unlock-status" id="${tier.id}-status"></p>`;
            }
                           
            return `<div class="vip-tier-card" id="${tier.id}-tier">
                        <div class="tier-icon">${tierIcon}</div>
                        <h3 class="tier-title">${tier.title}</h3>
                        <p class="tier-odds">${tier.odds}</p>
                        ${content}
                    </div>`;
        }).join('');

        container.innerHTML = html;
    }

    unlockVipTier(tier) {
        const inputElement = document.getElementById(`${tier}-password`);
        const statusElement = document.getElementById(`${tier}-status`);
        const password = inputElement ? inputElement.value.trim() : '';

        // Check if tier exists
        if (!this.passwords[tier]) {
            showMessage('Internal error: Tier not found.', 'error');
            return;
        }

        if (password === this.passwords[tier]) {
            this.unlockedTiers.add(tier);
            
            // Clear the input and show success message
            if (inputElement) inputElement.value = '';
            if (statusElement) statusElement.innerHTML = `<span class="status-success"><i class="fas fa-check-circle"></i> Access Granted!</span>`;
            
            if (tier === 'max-elite') {
                showMessage('🎉 Max Elite Game Unlocked! Enjoy the exclusive game.', 'success');
            } else {
                showMessage(`Tier **${tier.replace(/-/g, ' ').toUpperCase()}** unlocked!`, 'success');
            }
            
            // Re-render to show the unlocked content/game
            this.renderVipTiers(); 

        } else {
            if (statusElement) statusElement.innerHTML = `<span class="status-error"><i class="fas fa-times-circle"></i> Invalid Code.</span>`;
            showMessage('Invalid access code. Please check your code.', 'error');
        }
    }

    loadVipPredictions(tier) {
        // Mock data for unlocked prediction views
        const map = {
            'high-odds': 'High Stake Tip (Overnight)',
            'odd5': 'Accumulator Pick (5-Way)',
            'btts': 'BTTS Special (Guaranteed)'
        };
        
        const odds = {
            'high-odds': '@4.50',
            'odd5': '@5.20',
            'btts': '@1.80'
        };

        // This is where VIP predictions would be loaded from a database/API
        return `
            <div class="prediction-card" style="border: 2px solid var(--success);">
                <div class="prediction-header">
                    <span class="league">VIP - ${tier.replace(/-/g, ' ').toUpperCase()}</span>
                    <span class="match-time">CONFIRMED LOCK</span>
                </div>
                <div class="match-teams">Elite Match: The Chiefs vs The Gunners</div>
                <div class="prediction-details">
                    <span class="prediction-type">${map[tier]}</span>
                    <span class="prediction-odds">${odds[tier]}</span>
                </div>
                <div class="status-badge status-win">
                    VIEWED
                </div>
                <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
                    *** Exclusive Content Revealed ***
                </p>
            </div>
        `;
    }

    // ===== MAX ELITE GAME: NUMBER GUESSING GAME (Functional replacement for the game slot) =====

    renderMaxEliteGame() {
        // Initialize the secret number only when the game is first rendered/re-rendered
        if (this.maxEliteSecretNumber === null) {
            this.maxEliteSecretNumber = Math.floor(Math.random() * 10) + 1; // Number between 1 and 10
        }

        // HTML for the simple Number Guessing Game
        return `
            <div class="game-container" id="max-elite-game-content">
                <h3 style="color:var(--primary-dark); margin-bottom: 1rem;"><i class="fas fa-star-of-life"></i> Max Elite Guessing Game</h3>
                <p style="color:var(--text-secondary); margin-bottom: 1.5rem;">Guess the hidden number between 1 and 10 to win a bonus tip!</p>
                
                <input type="number" id="max-elite-guess-input" class="game-input" placeholder="Enter your guess (1-10)" min="1" max="10" />
                <button id="max-elite-guess-btn" class="game-button">Submit Elite Guess</button>
                
                <p id="max-elite-game-message" class="game-message"></p>
                <button id="max-elite-reset-btn" class="game-button" style="display: none; background-color: var(--secondary);" onclick="window.modHubOdds.resetMaxEliteGame()">Play Again</button>
            </div>
        `;
    }

    checkMaxEliteGuess() {
        const inputElement = document.getElementById('max-elite-guess-input');
        const messageElement = document.getElementById('max-elite-game-message');
        const resetBtn = document.getElementById('max-elite-reset-btn');
        const guessBtn = document.getElementById('max-elite-guess-btn');

        const guess = parseInt(inputElement.value, 10);
        
        if (isNaN(guess) || guess < 1 || guess > 10) {
            messageElement.textContent = 'Please enter a valid number between 1 and 10.';
            messageElement.style.color = 'var(--warning)';
            showMessage('Invalid guess. Must be between 1 and 10.', 'warning');
            return;
        }

        if (guess === this.maxEliteSecretNumber) {
            messageElement.textContent = `🎉 ELITE WIN! The number was ${this.maxEliteSecretNumber}. Here is your bonus tip: XXXXX`;
            messageElement.style.color = 'var(--success)';
            guessBtn.style.display = 'none';
            resetBtn.style.display = 'block';
            showMessage('🏆 Congratulations! You won the Elite Game!', 'success');
        } else if (guess < this.maxEliteSecretNumber) {
            messageElement.textContent = 'Too low. Try a higher Elite number.';
            messageElement.style.color = 'var(--info)';
        } else {
            messageElement.textContent = 'Too high. Try a lower Elite number.';
            messageElement.style.color = 'var(--info)';
        }

        // Clear input after guess
        inputElement.value = '';
    }

    resetMaxEliteGame() {
        this.maxEliteSecretNumber = Math.floor(Math.random() * 10) + 1;
        document.getElementById('max-elite-game-message').textContent = '';
        document.getElementById('max-elite-guess-input').value = '';
        document.getElementById('max-elite-guess-btn').style.display = 'block';
        document.getElementById('max-elite-reset-btn').style.display = 'none';
        showMessage('Game reset! Guess a new number (1-10).', 'info');
    }
}

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