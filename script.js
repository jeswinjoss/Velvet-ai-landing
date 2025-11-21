// Policy Modal Functions
function openPolicyModal() {
    document.getElementById('policyModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePolicyModal() {
    document.getElementById('policyModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('policyModal');
    if (event.target === modal) {
        closePolicyModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePolicyModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href
const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and showcase items
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .showcase-item, .policy-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '15px 60px';
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.padding = '20px 60px';
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
```

---

## **📋 HOW TO CREATE THE FILES:**

### **Step 1: Create index.html**
1. Open **Notepad** (Windows) or **TextEdit** (Mac)
2. Copy everything from "FILE 1: index.html" above
3. Paste it into Notepad
4. Click **File → Save As**
5. Name it: `index.html`
6. Save type: **All Files**
7. Save it in a new folder (e.g., "VelvetAI")

### **Step 2: Create styles.css**
1. Open **Notepad** again
2. Copy everything from "FILE 2: styles.css" above
3. Paste it into Notepad
4. Click **File → Save As**
5. Name it: `styles.css`
6. Save type: **All Files**
7. Save it in the **SAME folder** as index.html

### **Step 3: Create script.js**
1. Open **Notepad** again
2. Copy everything from "FILE 3: script.js" above (the complete code I just provided)
3. Paste it into Notepad
4. Click **File → Save As**
5. Name it: `script.js`
6. Save type: **All Files**
7. Save it in the **SAME folder** as the other files

### **Step 4: Open Your Website**
1. Go to the folder where you saved all three files
2. Double-click on `index.html`
3. It will open in your web browser!

---

## **✅ IMPORTANT:**
- All 3 files MUST be in the **same folder**
- Use exactly these names: `index.html`, `styles.css`, `script.js`
- Don't add `.txt` extension - they should not be text files

**Your folder should look like this:**
```
VelvetAI/
├── index.html
├── styles.css
└── script.js
