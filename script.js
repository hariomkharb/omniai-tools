// 1. Tool Filter karne ka function (With No Results check)
function filterTools() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let cards = document.getElementsByClassName('card');
    let noResults = document.getElementById('noResults');
    let found = false;

    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getAttribute('data-name');
        if (name) {
            name = name.toUpperCase();
            if (name.includes(input)) {
                cards[i].style.display = "";
                found = true;   
            } else {
                cards[i].style.display = "none";
            }
        }
    }
    
    // Agar koi tool match nahi hua toh error message dikhao
    if (noResults) {
        noResults.style.display = found ? "none" : "block";
    }
}

// 2. Visit बटन पर लोडिंग इफेक्ट
function showLoading(btn) {
    let originalText = btn.innerHTML; // "Visit" ya "Book Now" text save kiya
    btn.innerHTML = "Redirecting...";
    btn.style.backgroundColor = "#555";
    btn.disabled = true;

    // 2 सेकंड बाद वापस सामान्य करें
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = ""; // CSS se defaults pick karega
        btn.disabled = false;
    }, 2000);
}

// 3. लॉगिन मॉडल (Modal) खोलने का फ़ंक्शन
function openModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// 4. लॉगिन मॉडल (Modal) बंद करने का फ़ंक्शन
function closeModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 5. अगर यूजर बॉक्स के बाहर कहीं क्लिक करे, तो भी मॉडल बंद हो जाए
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 6. Login Form Submit करने का फ़ंक्शन (Naya Logic)
function submitLogin() {
    let emailInput = document.getElementById('loginEmail');
    let passInput = document.getElementById('loginPassword');
    
    let email = emailInput ? emailInput.value : "";
    let pass = passInput ? passInput.value : "";

    if (email.trim() === "" || pass.trim() === "") {
        alert("कृपया ईमेल और पासवर्ड दोनों भरें!");
    } else {
        alert("लॉगिन सफल! NexGen AI Agency में आपका स्वागत है।");
        
        // Navbar ke "SIGN IN" button ko badal kar "LOGOUT" karna
        const authBtn = document.querySelector('.btn-auth');
        if (authBtn) {
            authBtn.innerHTML = "LOGOUT";
            authBtn.setAttribute("onclick", "handleLogout()"); // Ab click karne par logout hoga
        }

        closeModal(); // Popup close karein
        
        // Fields clear karein
        if (emailInput) emailInput.value = "";
        if (passInput) passInput.value = "";
    }
}

// 7. Logout करने का फ़ंक्शन (Naya Logic)
function handleLogout() {
    let confirmLogout = confirm("क्या आप सच में Logout करना चाहते हैं?");
    if (confirmLogout) {
        alert("आप सफलतापूर्वक लॉगआउट हो गए हैं।");
        
        // "LOGOUT" button ko wapas se "SIGN IN" banana
        const authBtn = document.querySelector('.btn-auth');
        if (authBtn) {
            authBtn.innerHTML = "SIGN IN";
            authBtn.setAttribute("onclick", "openModal()"); // Ab click karne par fir se Modal khulega
        }
    }
}