---
title: Cookie Settings
icon: fas fa-cog
order: 9
---

# Cookie Settings / Cookie 设置

Manage your cookie preferences for this website. Changes will take effect immediately.

管理您在本网站的 Cookie 偏好。更改将立即生效。

## Current Settings / 当前设置

<div id="cookie-status" class="alert alert-info">
  <i class="fas fa-info-circle me-2"></i>
  <span id="cookie-status-text">Loading your current cookie preferences...</span>
</div>

## Cookie Categories / Cookie 类别

### Essential Cookies / 必要 Cookie
<div class="card mb-3">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h6 class="card-title mb-1">Website Functionality / 网站功能</h6>
        <p class="card-text small text-muted">
          These cookies are necessary for the website to function and cannot be disabled.
          <br>这些 Cookie 是网站正常运行所必需的，无法禁用。
        </p>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="essential-cookies" checked disabled>
        <label class="form-check-label" for="essential-cookies">Always Active</label>
      </div>
    </div>
  </div>
</div>

### Analytics Cookies / 分析 Cookie
<div class="card mb-3">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h6 class="card-title mb-1">Google Analytics</h6>
        <p class="card-text small text-muted">
          Help us understand how visitors interact with our website by collecting anonymous information.
          <br>通过收集匿名信息帮助我们了解访问者如何与我们的网站互动。
        </p>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="analytics-cookies">
        <label class="form-check-label" for="analytics-cookies">Enable</label>
      </div>
    </div>
  </div>
</div>

### Advertising Cookies / 广告 Cookie
<div class="card mb-3">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h6 class="card-title mb-1">Google AdSense</h6>
        <p class="card-text small text-muted">
          Used to deliver relevant advertisements and measure ad performance.
          <br>用于投放相关广告并衡量广告效果。
        </p>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="advertising-cookies">
        <label class="form-check-label" for="advertising-cookies">Enable</label>
      </div>
    </div>
  </div>
</div>

## Actions / 操作

<div class="d-grid gap-2 d-md-flex justify-content-md-start">
  <button class="btn btn-primary" id="save-preferences">
    <i class="fas fa-save me-2"></i>Save Preferences / 保存偏好
  </button>
  <button class="btn btn-outline-secondary" id="reset-preferences">
    <i class="fas fa-undo me-2"></i>Reset to Default / 重置为默认
  </button>
</div>

<div class="mt-4">
  <h5>More Information / 更多信息</h5>
  <p>
    For more details about how we use cookies, please read our 
    <a href="{{ '/privacy-policy/' | relative_url }}">Privacy Policy</a>.
  </p>
  <p>
    有关我们如何使用 Cookie 的更多详细信息，请阅读我们的
    <a href="{{ '/privacy-policy/' | relative_url }}">隐私政策</a>。
  </p>
</div>

<script>
(function() {
  'use strict';
  
  // Cookie utility functions
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/;SameSite=Lax';
  }
  
  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Load current preferences
  function loadPreferences() {
    const consent = getCookie('cookie-consent');
    const analyticsCheckbox = document.getElementById('analytics-cookies');
    const advertisingCheckbox = document.getElementById('advertising-cookies');
    const statusText = document.getElementById('cookie-status-text');
    
    if (consent === 'accepted') {
      analyticsCheckbox.checked = true;
      advertisingCheckbox.checked = true;
      statusText.textContent = 'All cookies are currently enabled. / 当前已启用所有 Cookie。';
    } else if (consent === 'declined') {
      analyticsCheckbox.checked = false;
      advertisingCheckbox.checked = false;
      statusText.textContent = 'Optional cookies are currently disabled. / 当前已禁用可选 Cookie。';
    } else {
      analyticsCheckbox.checked = false;
      advertisingCheckbox.checked = false;
      statusText.textContent = 'No cookie preferences set. / 未设置 Cookie 偏好。';
    }
  }
  
  // Save preferences
  function savePreferences() {
    const analytics = document.getElementById('analytics-cookies').checked;
    const advertising = document.getElementById('advertising-cookies').checked;
    
    if (analytics && advertising) {
      setCookie('cookie-consent', 'accepted', 365);
    } else {
      setCookie('cookie-consent', 'declined', 365);
    }
    
    // Update Google Analytics consent
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': analytics ? 'granted' : 'denied'
      });
    }
    
    // Show success message
    const statusDiv = document.getElementById('cookie-status');
    const statusText = document.getElementById('cookie-status-text');
    statusDiv.className = 'alert alert-success';
    statusText.textContent = 'Preferences saved successfully! / 偏好设置已成功保存！';
    
    setTimeout(() => {
      statusDiv.className = 'alert alert-info';
      loadPreferences();
    }, 3000);
  }
  
  // Reset preferences
  function resetPreferences() {
    document.getElementById('analytics-cookies').checked = false;
    document.getElementById('advertising-cookies').checked = false;
    setCookie('cookie-consent', 'declined', 365);
    
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    loadPreferences();
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
    
    document.getElementById('save-preferences').addEventListener('click', savePreferences);
    document.getElementById('reset-preferences').addEventListener('click', resetPreferences);
  });
})();
</script>
