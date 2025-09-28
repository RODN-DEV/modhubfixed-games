// --- script.js ---

// Define passwords for different VIP tiers
const VIP_PASSWORDS = {
    highOdds: "modhub21",
    odd5: "modhub22", 
    btts: "modhub23",
    maxElite: "modhub24"
};

const PRELOADER_DURATION = 40000;

// Define a function to create a single tip card with status
function createTipCard(league, time, team1, team2, tip, odds, status = 'pending', isVip = false) {
    const statusBadge = `<div class="status-badge status-${status}">${status.toUpperCase()}</div>`;
    
    const vipBadge = isVip ? '<div class="vip-badge"><i class="fas fa-crown"></i> VIP</div>' : '';
    
    return `
        <div class="tip-card">
            ${vipBadge}
            <div class="tip-header">
                <span class="league">${league}</span>
                <span class="time">${time}</span>
            </div>
            <div class="teams-score">
                <div class="teams">${team1} vs ${team2}</div>
                <div class="tip-odds">
                    <span class="tip">${tip}</span>
                    <span class="odds">@${odds}</span>
                </div>
            </div>
            ${statusBadge}
        </div>
    `;
}

// --- FREE TIPS DATA ---
const freeTipsData = [
    { league: "Slovakia", time: "28.09 12:30", team1: "MSK Zilina B", team2: "Tatran Liptovsky M.", tip: "Both teams to score", odds: "1.76", status: "pending" },
    { league: "Austria", time: "28.09 12:30", team1: "Kapfenberg", team2: "First Vienna FC 18..", tip: "Over 2,5 goals", odds: "2.35", status: "pending" },
    { league: "Poland", time: "28.09 14:00", team1: "Miedz Legnica", team2: "Znicz Pruszków", tip: "Miedz Legnica Win", odds: "1.63", status: "pending" },
    { league: "Italy", time: "28.09 14:30", team1: "Potenza", team2: "Atalanta U23", tip: "Both teams to score", odds: "2.24", status: "pending" },
];

// --- VIP TIERS DATA ---

// High Odds VIP (Existing VIP tips)
const highOddsVipData = [
    { league: "J2 League", time: "28.09 10:00", team1: "Kataller Toyama", team2: "Tokushima Vortis", tip: "Away Win (2)", odds: "1.97", status: "pending" },
    { league: "K League 1", time: "28.09 11:30", team1: "FC Anyang", team2: "Gwangju FC", tip: "Home Win or Draw (12)", odds: "1.33", status: "pending" },
    { league: "K League 2", time: "28.09 11:30", team1: "Gyeongnam FC", team2: "Ansan Greeners", tip: "Home Win or Draw (1X)", odds: "1.28", status: "pending" },
    { league: "J1 League", time: "28.09 12:00", team1: "Yokohama FC", team2: "Shonan Bellmare", tip: "Home Win or Draw (1X)", odds: "1.25", status: "pending" },
    { league: "Premier League", time: "28.09 12:00", team1: "Taichung Futuro", team2: "Taipower", tip: "Home Win or Away Win (12)", odds: "1.27", status: "pending" },
];

// Odd 5 VIP (from first two images)
const odd5VipData = [
    { league: "Germany Bundesliga", time: "28.09 18:30", team1: "FC Koln", team2: "Stuttgart", tip: "Under 3.5 Goal", odds: "1.57", status: "pending" },
    { league: "Turkey Super League", time: "28.09 20:00", team1: "Fenerbahce", team2: "Antalyaspor", tip: "Over +2.5 Goal", odds: "1.53", status: "pending" },
    { league: "Spain LaLiga", time: "28.09 21:00", team1: "Barcelona", team2: "Real Sociedad", tip: "Barcelona Wins", odds: "1.40", status: "pending" },
    { league: "Greece League", time: "28.09 19:30", team1: "Panetolikos", team2: "Panathinalikos", tip: "Panathinalikos Wins", odds: "1.45", status: "pending" },
];

// BTTS VIP (from third image)
const bttsVipData = [
    { league: "Spain LaLiga", time: "28.09 17:00", team1: "Elche CF", team2: "Celta de Vigo", tip: "BTTS Yes", odds: "1.85", status: "pending" },
    { league: "Scotland Premiership", time: "28.09 18:00", team1: "Livingston", team2: "Rangers", tip: "BTTS Yes", odds: "1.75", status: "pending" },
    { league: "Germany Bundesliga", time: "28.09 19:30", team1: "Freiburg", team2: "Hoffenheim", tip: "BTTS Yes", odds: "1.65", status: "pending" },
    { league: "Czech Republic League", time: "28.09 16:00", team1: "Jablonec", team2: "Mladá Boleslav", tip: "BTTS Yes", odds: "1.70", status: "pending" },
];

// MAX ELITE VIP (from last two images)
const maxEliteVipData = [
    { league: "Thai League 1", time: "28.09 15:00", team1: "BG Pathum United", team2: "Port FC", tip: "Home Win (1)", odds: "1.80", status: "pending" },
    { league: "Superliga", time: "28.09 21:00", team1: "Broendby IF", team2: "Odense Boldklub", tip: "Home Win (1)", odds: "2.10", status: "pending" },
    { league: "Bundesliga", time: "28.09 20:30", team1: "Union Berlin", team2: "Hamburger SV", tip: "Home Win (1)", odds: "1.95", status: "pending" },
];

// Function to populate the tips sections
function populateTips(containerId, tipsArray, isVip = false) {
    const container = document.getElementById(containerId);
    let htmlContent = '';
    
    if (tipsArray.length === 0) {
        htmlContent = '<p class="no-tips">No tips available at the moment. Check back soon!</p>';
    } else {
        tipsArray.forEach(tip => {
            htmlContent += createTipCard(
                tip.league, 
                tip.time, 
                tip.team1, 
                tip.team2, 
                tip.tip, 
                tip.odds, 
                tip.status,
                isVip
            );
        });
    }
    container.innerHTML = htmlContent;
}

// Function to handle tab switching
function switchTab(tabName) {
    // Remove 'active' from all buttons and hide content
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Activate the clicked tab
    document.getElementById(tabName + 'Btn').classList.add('active');
    const contentElement = document.getElementById(tabName + 'Content');
    contentElement.classList.add('active');

    // Handle VIP tab - focus on first password input
    if (tabName === 'vipTips') {
        setTimeout(() => {
            const firstInput = document.querySelector('.tier-password input');
            if (firstInput) firstInput.focus();
        }, 300);
    }
}

// Function to unlock specific VIP tier
function unlockVipTier(tier) {
    const tierCard = document.querySelector(`[data-tier="${tier}"]`);
    const passwordInput = tierCard.querySelector('input');
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === VIP_PASSWORDS[tier]) {
        // Correct password: unlock the tier
        const tierContent = document.getElementById(tier + 'Content');
        tierContent.style.display = 'block';
        
        // Populate the tier tips
        switch(tier) {
            case 'highOdds':
                populateTips('highOddsTipsContainer', highOddsVipData, true);
                break;
            case 'odd5':
                populateTips('odd5TipsContainer', odd5VipData, true);
                break;
            case 'btts':
                populateTips('bttsTipsContainer', bttsVipData, true);
                break;
            case 'maxElite':
                populateTips('maxEliteTipsContainer', maxEliteVipData, true);
                break;
        }
        
        // Show success message
        showNotification(`${getTierName(tier)} unlocked successfully!`, 'success');
        
        // Clear password field
        passwordInput.value = '';
        
    } else {
        // Incorrect password
        showNotification('Incorrect password. Please try again.', 'error');
        passwordInput.value = '';
        passwordInput.focus();
        
        // Shake animation for wrong password
        passwordInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
    }
}

// Helper function to get tier display name
function getTierName(tier) {
    const names = {
        highOdds: 'High Odds VIP',
        odd5: 'Odd 5 VIP',
        btts: 'BTTS VIP',
        maxElite: 'MAX ELITE VIP'
    };
    return names[tier] || 'VIP Tier';
}

// Function to show notification
function showNotification(message, type) {
    // Remove any existing notifications
    document.querySelectorAll('.notification').forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                animation: slideIn 0.3s ease;
                max-width: 400px;
            }
            .notification.success { background: #4CAF50; }
            .notification.error { background: #f44336; }
            .notification button {
                background: transparent;
                border: none;
                color: white;
                font-size: 1.2em;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Function to skip preloader
function skipPreloader() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    
    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 50);
    }, 500);
}

// Initial script execution
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Populate the free tips section
    populateTips('freeTipsContainer', freeTipsData);
    
    // Set the default active tab (Free Tips)
    switchTab('freeTips');
    
    // --- WELCOME ANIMATION / LOADING LOGIC ---
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const skipButton = document.querySelector('.skip-preloader');
    
    // Ensure the main content is hidden initially for the animation to work
    mainContent.style.display = 'none';
    
    // Add event listener to skip button
    skipButton.addEventListener('click', skipPreloader);
    
    // Set the exact 40-second timer
    const preloaderTimer = setTimeout(() => {
        skipPreloader();
    }, PRELOADER_DURATION);
    
    // Allow Enter key to submit VIP passwords
    document.querySelectorAll('.tier-password input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const tierCard = this.closest('.vip-tier-card');
                const tier = tierCard.dataset.tier;
                unlockVipTier(tier);
            }
        });
    });
});

// Add CSS for VIP badges and status badges
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .vip-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: #000;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.7em;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 4px;
    }
    
    .status-badge {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.8em;
        font-weight: 600;
        margin-top: 8px;
    }
    
    .status-pending {
        background: rgba(255, 165, 0, 0.1);
        color: #ff9800;
        border: 1px solid rgba(255, 165, 0, 0.3);
    }
    
    .status-won {
        background: rgba(76, 175, 80, 0.1);
        color: #4CAF50;
        border: 1px solid rgba(76, 175, 80, 0.3);
    }
    
    .status-lost {
        background: rgba(244, 67, 54, 0.1);
        color: #f44336;
        border: 1px solid rgba(244, 67, 54, 0.3);
    }
    
    .vip-content {
        display: block;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(additionalStyles);
