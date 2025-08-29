document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    
    // تنظیم نام کاربری و رمز عبور (در یک پروژه واقعی، این اطلاعات باید در سمت سرور بررسی شوند)
    const validUsername = 'admin';
    const validPassword = 'admin123';
    
    // بررسی اگر کاربر قبلاً وارد شده است
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // هدایت مستقیم به سایت خارجی
        window.location.replace('https://finalone-theta.vercel.app');
        return;
    }
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === validUsername && password === validPassword) {
            // ذخیره اطلاعات ورود در localStorage
            const loginTime = new Date().getTime();
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loginTime', loginTime);
            
            // هدایت مستقیم به سایت خارجی بعد از ورود موفق
            // از window.location.replace به جای window.location.href استفاده می‌کنیم
            // تا مطمئن شویم که صفحه کاملاً جایگزین می‌شود و امکان بازگشت نباشد
            window.location.replace('https://finalone-theta.vercel.app');
        } else {
            errorMessage.textContent = 'نام کاربری یا رمز عبور اشتباه است.';
        }
    });
});
