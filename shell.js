(function () {
  // ── Active page from body attribute ─────────────────────────
  const activePage = document.body.dataset.page || '';

  // ── CSS ──────────────────────────────────────────────────────
  const css = `
    .bn-shell{
      display:flex;align-items:center;
      background:#fff;
      padding:8px 48px 8px 14px;
      gap:120px;
      flex-shrink:0;
      box-shadow:0 0 2px rgba(34,54,73,.2),0 2px 4px rgba(34,54,73,.2);
      z-index:100;
      position:relative;
      box-sizing:border-box;
    }
    .bn-shell-left{display:flex;align-items:center;gap:16px;height:52px;flex-shrink:0;}
    .bn-shell-logo-wrap{display:flex;align-items:center;flex-shrink:0;}
    .bn-shell-menu-btn{
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:8px;border:none;
      background:transparent;cursor:pointer;flex-shrink:0;
    }
    .bn-shell-menu-btn:hover{background:rgba(0,0,0,.06);}
    .bn-shell-brand-btn{
      display:flex;align-items:center;justify-content:center;gap:6px;
      min-height:36px;padding:10px;border-radius:8px;
      border:1px solid transparent;background:transparent;
      cursor:pointer;white-space:nowrap;flex-shrink:0;
    }
    .bn-shell-brand-btn:hover{background:rgba(0,0,0,.05);}
    .bn-shell-brand-text{
      font-family:"72","72full",Arial,sans-serif;
      font-size:16px;font-weight:700;color:#002a86;line-height:1;
    }
    .bn-shell-brand-arrow{width:16px;height:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .bn-test-tag{
      display:flex;align-items:center;
      background:#f8d6ff;border:1px solid #f8d6ff;
      color:#a100c2;font-size:12px;font-weight:700;
      font-family:"72","72full",Arial,sans-serif;
      border-radius:8px;padding:3px 8px;
      white-space:nowrap;flex-shrink:0;line-height:16px;
    }
    .bn-shell-center{
      position:absolute;left:0;right:0;
      display:flex;justify-content:center;
      pointer-events:none;
    }
    .bn-search-wrap{
      width:400px;display:flex;align-items:center;
      background:#eff1f2;border-radius:18px;
      box-shadow:inset 0 0 0 1px rgba(85,107,129,.25);
      padding:4px 4px 4px 0;height:36px;box-sizing:border-box;
      pointer-events:all;
    }
    .bn-search-menu-btn{display:flex;align-items:center;justify-content:flex-end;padding-right:5px;width:100px;flex-shrink:0;}
    .bn-search-select-inner{
      display:flex;align-items:center;gap:6px;
      min-height:26px;padding:5px 8px;
      border-radius:8px;border:1px solid transparent;
      background:transparent;cursor:pointer;
    }
    .bn-search-select-inner:hover{background:rgba(0,0,0,.05);}
    .bn-search-select-text{font-family:"72","72full",Arial,sans-serif;font-size:14px;color:#556b82;flex:1;min-width:0;}
    .bn-search-select-arrow{width:16px;height:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .bn-search-sep{width:1px;height:24px;background:#556b81;border-radius:12px;flex-shrink:0;}
    .bn-search-input{
      flex:1;border:none;background:transparent;outline:none;
      font-family:"72","72full",Arial,sans-serif;
      font-size:14px;font-style:italic;color:#556b82;padding:0 8px;
    }
    .bn-search-btn{
      background:transparent;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:8px;flex-shrink:0;
    }
    .bn-search-btn:hover{background:rgba(0,0,0,.06);}
    .bn-shell-right{display:flex;align-items:center;justify-content:flex-end;gap:16px;margin-left:auto;flex-shrink:0;}
    .bn-shell-enterprise-wrap{display:flex;align-items:center;gap:16px;flex-shrink:0;}
    .bn-shell-enterprise{font-family:"72","72full",Arial,sans-serif;font-size:14px;color:#556b82;white-space:nowrap;}
    .bn-shell-divider{width:1px;height:24px;background:#d9d9d9;flex-shrink:0;}
    .bn-shell-actions{display:flex;align-items:center;gap:8px;}
    .bn-icon-btn{
      background:transparent;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      width:44px;height:44px;border-radius:8px;flex-shrink:0;
    }
    .bn-icon-btn:hover{background:rgba(0,0,0,.06);}
    .bn-avatar{
      width:32px;height:32px;border-radius:50%;
      background:#e76500;color:#fff;
      font-family:"72","72full",Arial,sans-serif;
      font-size:12px;font-weight:700;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;position:relative;flex-shrink:0;
    }
    .bn-avatar-dot{
      position:absolute;bottom:0;right:0;
      width:10px;height:10px;background:#6bb700;border-radius:50%;
      border:2px solid #fff;
    }
    .app-body{display:flex;flex:1;min-height:0;}
    .bn-sidenav{
      width:62px;min-width:62px;background:#fff;
      display:flex;flex-direction:column;justify-content:space-between;
      box-shadow:0 0 2px rgba(34,53,72,.2),0 2px 4px rgba(34,53,72,.2);
      z-index:5;flex-shrink:0;height:100%;
    }
    .bn-sidenav-content{flex:1;display:flex;flex-direction:column;gap:4px;padding:8px 8px 0 8px;}
    .bn-nav-item{
      display:flex;align-items:center;
      width:48px;height:32px;
      padding-left:2px;padding-right:14px;
      border-radius:8px;border:none;background:#fff;
      cursor:pointer;position:relative;overflow:hidden;
      flex-shrink:0;box-sizing:border-box;
    }
    .bn-nav-item:hover{background:#f5f5f5;}
    .bn-nav-item.active{background:#ebf8ff;}
    .bn-nav-item.active .bn-nav-indicator{display:block;}
    .bn-nav-indicator{display:none;position:absolute;left:0;top:0;bottom:0;width:3px;background:#0064d9;}
    .bn-nav-icon-wrap{
      display:flex;align-items:center;justify-content:center;
      width:44px;height:100%;flex-shrink:0;
      padding:8px 14px;margin-right:-12px;box-sizing:border-box;color:#556b82;
    }
    .bn-nav-item.active .bn-nav-icon-wrap{margin-right:-3px;color:#0064d9;}
    .bn-nav-arrow{
      display:none;align-items:center;justify-content:center;
      width:12px;height:12px;flex-shrink:0;margin-right:-12px;color:#556b82;
    }
    .bn-nav-item.has-arrow .bn-nav-arrow{display:flex;}
    .bn-nav-item.active .bn-nav-arrow{margin-right:-3px;}
    .bn-sidenav-footer{
      display:flex;flex-direction:column;gap:4px;align-items:center;
      padding:4px 0 8px 0;flex-shrink:0;width:62px;
    }
    .bn-sidenav-sep{height:1px;background:#d9d9d9;width:46px;margin:0 8px;}
    .bn-footer-write{
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:8px;
      border:1px solid #bcc3ca;background:#fff;cursor:pointer;
      box-sizing:border-box;color:#556b82;
    }
    .bn-footer-write:hover{background:#f5f5f5;}
    .bn-footer-icon{
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:8px;
      border:none;background:#fff;cursor:pointer;
      box-sizing:border-box;color:#556b82;
    }
    .bn-footer-icon:hover{background:#f5f5f5;}
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Shell Bar HTML ────────────────────────────────────────────
  const shellHTML = `
<div class="bn-shell">
  <div class="bn-shell-left">
    <div class="bn-shell-logo-wrap">
      <button class="bn-shell-menu-btn" title="Main menu">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15.25 12.5C15.664 12.5003 16 12.8359 16 13.25C16 13.6641 15.664 13.9997 15.25 14H0.75C0.335786 14 0 13.6642 0 13.25C0 12.8358 0.335786 12.5 0.75 12.5H15.25ZM15.25 7C15.664 7.00026 16 7.33595 16 7.75C16 8.16405 15.664 8.49974 15.25 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75C0 7.33579 0.335786 7 0.75 7H15.25ZM15.25 2C15.664 2.00026 16 2.33595 16 2.75C16 3.16405 15.664 3.49974 15.25 3.5H0.75C0.335786 3.5 0 3.16421 0 2.75C0 2.33579 0.335786 2 0.75 2H15.25Z" fill="#131E29"/></svg>
      </button>
      <svg width="60" height="29" viewBox="0 0 60 29" fill="none" style="display:block;margin-left:2px;" aria-label="SAP">
        <g clip-path="url(#sap-clip-sh)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 29.3478H29.983L59.3257 0H0V29.3478Z" fill="url(#sap-grad-sh)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.2068 5.86961H29.3477L29.3673 19.65L24.2653 5.86504H19.2064L14.8512 17.3779C14.3881 14.4483 11.3594 13.4374 8.97639 12.6803C7.40269 12.1748 5.73247 11.4313 5.74943 10.6096C5.76247 9.93526 6.64291 9.30983 8.39269 9.40309C9.5666 9.46635 10.6036 9.56091 12.6664 10.5574L14.6946 7.02265C12.8138 6.06526 10.2129 5.4607 8.0803 5.45874H8.06726C5.58052 5.45874 3.50986 6.26418 2.22639 7.59135C1.3316 8.51744 0.848995 9.69526 0.829429 10.9977C0.796821 12.7898 1.45356 14.0603 2.83356 15.0757C3.99965 15.93 5.49117 16.4844 6.8053 16.8913C8.42595 17.3935 9.74986 17.8305 9.73356 18.7605C9.72052 19.0996 9.59269 19.4166 9.34878 19.6722C8.94443 20.0896 8.32486 20.2461 7.46726 20.2631C5.81269 20.2983 4.5866 20.0381 2.63269 18.8831L0.828125 22.4635C2.78008 23.5735 4.85204 24.1305 7.20639 24.1305L7.73595 24.1266C9.78508 24.0894 11.4481 23.5983 12.7694 22.5353C12.8451 22.4746 12.9129 22.4133 12.9833 22.3513L12.7616 23.494L17.7051 23.4783L18.592 21.2074C19.5246 21.5257 20.5851 21.7018 21.7107 21.7018C22.8077 21.7018 23.8394 21.5348 24.7544 21.2348L25.3727 23.4783L34.2423 23.4868L34.2638 18.3098H36.1512C40.7131 18.3098 43.4099 15.9881 43.4099 12.0946C43.4086 7.75831 40.7868 5.86961 35.2068 5.86961ZM21.7107 17.6492C21.0292 17.6492 20.3901 17.5305 19.8403 17.3218L21.6899 11.4816H21.7257L23.5453 17.3381C22.9975 17.5337 22.3733 17.6492 21.7101 17.6492H21.7107ZM35.5499 14.2937H34.2625V9.587H35.5505C37.2657 9.587 38.6353 10.1583 38.6353 11.91C38.634 13.7231 37.2657 14.2937 35.5505 14.2937" fill="white"/>
        </g>
        <defs>
          <linearGradient id="sap-grad-sh" x1="29.6628" y1="0" x2="29.6628" y2="29.3485" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00AEEF"/><stop offset="0.212" stop-color="#0097DC"/>
            <stop offset="0.519" stop-color="#007CC5"/><stop offset="0.792" stop-color="#006CB8"/>
            <stop offset="1" stop-color="#0066B3"/>
          </linearGradient>
          <clipPath id="sap-clip-sh"><rect width="60" height="29" fill="white"/></clipPath>
        </defs>
      </svg>
      <button class="bn-shell-brand-btn" title="Business Network">
        <span class="bn-shell-brand-text">Business Network</span>
        <span class="bn-shell-brand-arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.8292 6.27342C13.0923 6.59309 13.0462 7.06578 12.7267 7.32909L8.4796 10.8291C8.20272 11.0572 7.8025 11.0571 7.5255 10.8291L3.27355 7.32909C2.95375 7.06587 2.90782 6.59324 3.17101 6.27342C3.43423 5.95363 3.90686 5.9077 4.22667 6.17088L8.00206 9.27831L11.7735 6.17088C12.0932 5.90781 12.5659 5.95387 12.8292 6.27342Z" fill="#131E29"/></svg>
        </span>
      </button>
    </div>
    <span class="bn-test-tag">Test Mode</span>
  </div>

  <div class="bn-shell-center">
    <div class="bn-search-wrap">
      <div class="bn-search-menu-btn">
        <div class="bn-search-select-inner">
          <span class="bn-search-select-text">Select</span>
          <span class="bn-search-select-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.8292 6.27342C13.0923 6.59309 13.0462 7.06578 12.7267 7.32909L8.4796 10.8291C8.20272 11.0572 7.8025 11.0571 7.5255 10.8291L3.27355 7.32909C2.95375 7.06587 2.90782 6.59324 3.17101 6.27342C3.43423 5.95363 3.90686 5.9077 4.22667 6.17088L8.00206 9.27831L11.7735 6.17088C12.0932 5.90781 12.5659 5.95387 12.8292 6.27342Z" fill="#131E29"/></svg>
          </span>
        </div>
      </div>
      <div class="bn-search-sep"></div>
      <input class="bn-search-input" placeholder="Search" />
      <button class="bn-search-btn" title="Search">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7 1C10.3137 1 13 3.68629 13 7C13 8.38646 12.528 9.66175 11.7383 10.6777L14.7803 13.7197C15.0732 14.0126 15.0732 14.4874 14.7803 14.7803C14.4874 15.0732 14.0126 15.0732 13.7197 14.7803L10.6777 11.7383C9.66175 12.528 8.38646 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1ZM7 2.5C4.51472 2.5 2.5 4.51472 2.5 7C2.5 9.48528 4.51472 11.5 7 11.5C9.48528 11.5 11.5 9.48528 11.5 7C11.5 4.51472 9.48528 2.5 7 2.5Z" fill="#131E29"/></svg>
      </button>
    </div>
  </div>

  <div class="bn-shell-right">
    <div class="bn-shell-enterprise-wrap">
      <span class="bn-shell-enterprise">Enterprise</span>
      <div class="bn-shell-divider"></div>
    </div>
    <div class="bn-shell-actions">
      <button class="bn-icon-btn" title="Joule">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#da-clip-sh)"><path d="M12 0C12.2475 2.04033e-05 12.4794 0.121993 12.6192 0.326274L15.8692 5.07776C16.05 5.34206 16.0426 5.69214 15.8516 5.94913L8.60158 15.7022C8.30639 16.0993 7.69364 16.0993 7.39844 15.7022L0.148377 5.94913C-0.0426493 5.69213 -0.0499916 5.34207 0.130799 5.07776L3.43747 0.253986C3.57884 0.0936257 3.78332 0 3.99997 0H12ZM1.67085 5.48414L8.00001 13.9976L14.3282 5.48414L11.6045 1.50047H4.39548L1.67085 5.48414ZM9.16994 3.23441C9.27994 2.92338 9.7201 2.92338 9.83011 3.23441C10.2001 4.31779 10.68 4.8094 11.7598 5.17057C12.0798 5.28093 12.0798 5.73255 11.7598 5.83288C10.68 6.20408 10.1901 6.68566 9.83011 7.76904C9.7201 8.08007 9.27994 8.08007 9.16994 7.76904C8.79998 6.68567 8.31999 6.19405 7.24024 5.83288C6.92024 5.72252 6.92024 5.2709 7.24024 5.17057C8.31999 4.79937 8.80998 4.31778 9.16994 3.23441Z" fill="#131E29"/></g><defs><clipPath id="da-clip-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
      </button>
      <button class="bn-icon-btn bn-notif-btn" id="bn-notif-btn" title="Notifications" style="position:relative;">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.99993 1C10.2093 1 11.6281 1.95567 12.4515 3.31543C13.2398 4.61717 13.4415 6.21709 13.4415 7.50488V8.14062C13.4415 9.2129 13.7823 10.1174 14.1324 10.7617C14.3206 11.1078 14.5411 11.4387 14.8009 11.7354C15.2431 12.204 14.8992 13 14.2546 13H10.4178C10.1367 14.15 9.16176 15 7.99993 15C6.83815 14.9999 5.86314 14.1499 5.5821 13H1.74524C1.09932 12.9998 0.756212 12.2016 1.20089 11.7334C1.23 11.7017 1.55014 11.3454 1.8674 10.7617C2.21754 10.1174 2.55835 9.21295 2.55835 8.14062V7.50488C2.55835 6.21712 2.76013 4.61716 3.54835 3.31543C4.37175 1.95566 5.79064 1.00006 7.99993 1ZM7.99993 2.5C6.30536 2.50006 5.37854 3.19013 4.83251 4.0918C4.25135 5.05158 4.05947 6.32926 4.05947 7.50488V8.14062C4.05947 9.54499 3.6099 10.7045 3.17405 11.5H12.8258C12.3897 10.7046 11.9404 9.54493 11.9404 8.14062V7.50488C11.9404 6.32922 11.7485 5.05159 11.1673 4.0918C10.6213 3.19014 9.69456 2.5 7.99993 2.5Z" fill="#131E29"/></svg>
        <span style="position:absolute;top:8px;right:8px;width:7px;height:7px;background:#bb0000;border-radius:50%;border:1.5px solid #fff;"></span>
      </button>
      <button class="bn-icon-btn" title="Campaigns">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#mc-clip-sh)"><path d="M14.8516 1.11612C15.1172 0.960815 15.3746 0.963672 15.6133 1.09561C15.8519 1.22771 16 1.47909 16 1.75186V12.2519C16 12.5247 15.8519 12.776 15.6133 12.9081C15.3745 13.0402 15.0827 13.0317 14.8516 12.8866C13.984 12.342 13.066 11.8656 12.1396 11.4306C10.882 10.84 9.44833 10.2908 8.19531 10.0868L8.7334 12.5946C8.7867 12.8434 8.71015 13.1023 8.53027 13.2821L7.03027 14.7821C6.8598 14.9526 6.61785 15.0307 6.37988 14.9921C6.14192 14.9535 5.93692 14.8025 5.8291 14.5868L3.53613 10.0019H3C1.34315 10.0019 0 8.65872 0 7.00187C2.73161e-05 5.34503 1.34316 4.00186 3 4.00186H7.25C8.68175 4.00186 10.5509 3.31917 12.1396 2.57315C12.1396 2.57315 14.5859 1.27142 14.8516 1.11612ZM3 5.50186C2.17159 5.50186 1.50003 6.17346 1.5 7.00187C1.5 7.83029 2.17157 8.50187 3 8.50187H4C4.28406 8.50187 4.54385 8.66284 4.6709 8.91691L6.70508 12.9853L7.18066 12.5097L6.5 9.25187V5.50186H3ZM14.5 3.05167C14.0282 3.31067 13.4369 3.62084 12.7773 3.93057C11.3909 4.58162 9.61242 5.27842 8 5.45694V8.54679C9.61241 8.72531 11.3909 9.42211 12.7773 10.0732C13.4367 10.3828 14.0283 10.6921 14.5 10.9511V3.05167Z" fill="#131E29"/></g><defs><clipPath id="mc-clip-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
      </button>
      <button class="bn-icon-btn" title="Messages">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.083 0C11.1389 0 12 0.861485 12 1.91782V3.0013H14.083C15.1389 3.0013 16 3.86278 16 4.91912V14.2562C16 14.9234 15.1554 15.2555 14.7012 14.7671L12.5889 12.4966H5.91699C4.86118 12.4966 4.00011 11.636 4 10.5798V9.49531H3.41113L1.29883 11.7658C0.844568 12.2542 0 11.9221 0 11.2549V1.91782C0 0.861484 0.861112 0 1.91699 0H10.083ZM12 7.57847C11.9999 8.63472 11.1388 9.49531 10.083 9.49531H5.5V10.5798C5.50011 10.8072 5.68961 10.996 5.91699 10.996H12.917C13.1251 10.9961 13.324 11.0829 13.4658 11.2353L14.5 12.3471V4.91912C14.5 4.69157 14.3105 4.50195 14.083 4.50195H12V7.57847ZM1.91699 1.50065C1.68954 1.50065 1.5 1.69027 1.5 1.91782V9.34583L2.53418 8.23403C2.67598 8.08163 2.87489 7.99476 3.08301 7.99467H10.083C10.3104 7.99467 10.4999 7.80593 10.5 7.57847V1.91782C10.5 1.69027 10.3105 1.50065 10.083 1.50065H1.91699Z" fill="#131E29"/></svg>
      </button>
      <button class="bn-icon-btn" title="Help">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#help-clip-sh)"><path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM8 11C8.55229 11 9 11.4477 9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11ZM8 3C9.65902 3 11 4.33149 11 5.99121C10.9998 7.39121 10.0445 8.55335 8.75 8.88379V9.25C8.74998 9.6642 8.4142 10 8 10C7.5858 10 7.25002 9.6642 7.25 9.25C7.25 9.25 7.25 8.62922 7.25 8.23145C7.25 7.68359 7.65701 7.51544 8.1543 7.47363C8.65158 7.43183 9.5 6.9344 9.5 5.99121C9.5 5.16574 8.83643 4.5 8 4.5C7.11719 4.5 6.58594 5.08203 6.49609 6.06738C6.45771 6.44565 6.13834 6.74121 5.75 6.74121C5.33594 6.74121 5.00025 6.40521 5 5.99121C5 4.33149 6.34098 3 8 3Z" fill="#131E29"/></g><defs><clipPath id="help-clip-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
      </button>
      <div class="bn-avatar" title="Sarah Rogers">SR<span class="bn-avatar-dot"></span></div>
    </div>
  </div>
</div>`;

  // ── Nav items config ─────────────────────────────────────────
  const navItems = [
    { key: 'home', title: 'Home', href: 'SBN_home.html', icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.12109 0.734287C7.1179 -0.1836 8.61361 -0.240692 9.67285 0.562412C9.67285 0.562412 13.8743 4.35539 14.3154 4.85831C14.7565 5.36123 15 6.00758 15 6.68253V13.2499C14.9999 14.7711 13.7734 15.9999 12.25 15.9999H3.75C2.22664 15.9999 1.00011 14.7711 1 13.2499V6.74991C1 6.00472 1.30018 5.19442 1.88574 4.65226L6.12012 0.735263L6.12109 0.734287ZM8.86133 1.83585C8.37261 1.38747 7.62622 1.38714 7.1377 1.83585L7.13867 1.83683L2.9043 5.75284C2.66358 5.97588 2.5 6.36779 2.5 6.74991V13.2499C2.50011 13.9434 3.05576 14.4999 3.75 14.4999H5V9.74991C5 8.7755 5.78914 7.99991 6.75 7.99991H9.25C10.2109 7.99991 11 8.7755 11 9.74991V14.4999H12.25C12.9442 14.4999 13.4999 13.9434 13.5 13.2499V6.68253C13.5 6.37095 13.3888 6.0759 13.1875 5.84659L8.86133 1.83585ZM6.75 9.49991C6.61086 9.49991 6.5 9.61062 6.5 9.74991V14.4999H9.5V9.74991C9.5 9.61062 9.38914 9.49991 9.25 9.49991H6.75Z" fill="#131E29"/></svg>` },
    { key: 'favorites', title: 'Favorites', href: null, icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#fav-sh)"><path d="M14.2519 14.4993C14.6664 14.4993 14.9948 14.8353 14.9948 15.2497C14.9948 15.6641 14.6664 16 14.2519 16H10.7523C10.3378 15.9999 9.99475 15.664 9.99475 15.2497C9.99475 14.8353 10.3378 14.4994 10.7523 14.4993H14.2519ZM8.68443 0.4352L10.7572 5.04182L15.3298 5.49906C15.9469 5.56076 16.2249 6.33734 15.7862 6.77602L14.7854 7.77648C14.4923 8.06946 14.0172 8.06949 13.7241 7.77648C13.4686 7.52094 13.4353 7.12656 13.6254 6.83562L10.1777 6.49171C9.91062 6.46497 9.67801 6.29772 9.56787 6.05303L8.00035 2.56997L6.43283 6.05303C6.32267 6.29773 6.09011 6.46501 5.82303 6.49171L2.32738 6.8405L4.79593 9.48528C4.95926 9.66022 5.02933 9.90284 4.98454 10.1379L4.2858 13.8037L6.88139 12.345C7.24248 12.1419 7.70023 12.2695 7.9036 12.6303C8.10672 12.9913 7.97913 13.4489 7.61824 13.6522L3.6154 15.9033C3.06965 16.2101 2.39295 15.7241 2.51013 15.109L3.4395 10.2307L0.196962 6.75745C-0.219112 6.31169 0.0642024 5.5598 0.670932 5.49906L5.24254 5.04182L7.36807 0.338475C7.68272 -0.153374 8.44396 -0.0989604 8.68443 0.4352ZM14.2548 11.9982C14.6693 11.9982 14.9948 12.3341 14.9948 12.7485C14.9948 13.1629 14.6693 13.4988 14.2548 13.4988H10.7523C10.3378 13.4988 9.99475 13.1629 9.99475 12.7485C9.99475 12.3341 10.3378 11.9982 10.7523 11.9982H14.2548ZM14.2548 9.497C14.6693 9.497 14.9948 9.83294 14.9948 10.2473C14.9948 10.6618 14.6693 10.9977 14.2548 10.9977H10.7523C10.3378 10.9976 9.99475 10.6617 9.99475 10.2473C9.99475 9.83297 10.3378 9.49705 10.7523 9.497H14.2548Z" fill="#131E29"/></g><defs><clipPath id="fav-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>` },
    { key: 'present', title: 'Present', href: null, icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#pres-sh)"><path d="M7.1279 0.00299706C7.54032 -0.0337224 7.90446 0.271229 7.94138 0.683661C7.97803 1.09591 7.67389 1.46002 7.26169 1.49714C3.95448 1.7929 1.5 4.56009 1.49997 8.00007C1.49997 11.6136 4.38641 14.5001 7.99997 14.5001C11.44 14.5001 14.2071 12.0456 14.5029 8.73835C14.5401 8.32618 14.9042 8.02201 15.3164 8.05866C15.7288 8.09555 16.0337 8.45972 15.997 8.87214C15.6282 12.9962 12.1725 16.0001 7.99997 16.0001C3.55798 16.0001 -3.03132e-05 12.4421 -3.05176e-05 8.00007C2.35234e-06 3.82761 3.00391 0.371809 7.1279 0.00299706ZM7.74997 3.00007C8.16416 3.00007 8.49994 3.33589 8.49997 3.75007V7.61628L11.2021 9.65534C11.5323 9.90485 11.5978 10.3746 11.3486 10.7051C11.0991 11.0358 10.6285 11.1021 10.2978 10.8526L7.29782 8.58894C7.11018 8.44725 7.00004 8.22543 6.99997 7.9903V3.75007C7.00001 3.33589 7.33578 3.00007 7.74997 3.00007ZM13.4687 0.299872L14.0967 1.66022L15.5566 1.86823C15.9633 1.92633 16.1407 2.43793 15.8574 2.73542L14.7939 3.85065L15.0605 5.39655C15.1325 5.81583 14.6714 6.14276 14.2998 5.93464L13 5.20612L11.6992 5.93464C11.3281 6.14201 10.8665 5.81554 10.9384 5.39655L11.2041 3.85065L10.1416 2.73542C9.85824 2.43764 10.0358 1.92677 10.4424 1.86823L11.9023 1.66022L12.5674 0.234442C12.7841 -0.0987738 13.3015 -0.0620918 13.4687 0.299872Z" fill="#131E29"/></g><defs><clipPath id="pres-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>` },
    { key: 'scexceptions', title: 'Exception Management', href: 'exception_management_card.html', hasArrow: true, icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#box-sh)"><path d="M8.72852 0.0459257C8.9254 -0.0262799 9.14363 -0.0129243 9.33008 0.0830351L14.1064 2.54983C14.1862 2.6051 14.2544 2.67597 14.3076 2.75784L15.8789 5.17483C15.9578 5.29636 15.9999 5.43812 16 5.58303V12.0274C16 12.3342 15.8132 12.6108 15.5283 12.7246L7.45215 15.9463C7.25126 16.0265 7.02561 16.0164 6.83301 15.918L0.40918 12.6348C0.158435 12.5067 0.000153832 12.2494 0 11.9678V3.77053C0.00013556 3.45604 0.196903 3.17473 0.492188 3.06643L8.72852 0.0459257ZM2.62305 3.88186L6.00684 5.6094C6.08726 5.66448 6.15714 5.7344 6.21094 5.81643L7.82129 8.27347C7.90185 8.39632 7.94479 8.54062 7.94434 8.68753L7.92676 14.1416L10.4727 13.126V7.67581L9.46191 7.14261C9.2162 7.01269 9.0625 6.75747 9.0625 6.47952V5.1885L4.87695 3.05569L2.62305 3.88186ZM1.5 11.5088L6.42676 14.0254L6.44238 9.24514L5.35449 8.48343C5.1541 8.34308 5.03517 8.11383 5.03516 7.86917V6.79007L1.5 4.99319V11.5088ZM6.79785 2.35061L10.0352 4.00882C10.1153 4.06384 10.1846 4.13401 10.2383 4.21585L11.8496 6.67288C11.9296 6.79499 11.9727 6.93804 11.9727 7.08401V12.5274L14.5 11.5186V6.01858L13.4932 5.49319C13.2457 5.36384 13.0898 5.10737 13.0898 4.82815V3.70608L8.93555 1.56741L6.79785 2.35061Z" fill="#131E29"/></g><defs><clipPath id="box-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>` },
    { key: 'forecast', title: 'Forecast', href: 'forecast_detail.html', hasArrow: true, icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#dim-sh)"><path d="M14.6465 6.1253C15.3635 6.06485 15.999 6.63235 15.999 7.37373V13.1404C15.9988 13.7308 15.5861 14.2418 15.0098 14.3653L7.5127 15.9718C6.73498 16.1385 6.00151 15.5445 6.00098 14.7479V8.88143C6.00106 8.28491 6.42113 7.771 7.00488 7.65355L14.6465 6.1253ZM7.50098 9.08591V14.4367L14.499 12.9378V7.67898L7.50098 9.08591ZM12.1494 3.0962C12.5573 3.02485 12.9452 3.29809 13.0166 3.70671C13.0878 4.11537 12.8151 4.50399 12.4072 4.57553L4.50098 5.96191V12.1003C4.50097 12.5153 4.16519 12.8517 3.75098 12.8517C3.33677 12.8517 3.00098 12.5153 3.00098 12.1003V5.75253C3.00101 5.14433 3.43724 4.6238 4.03516 4.51878L12.1494 3.0962ZM9.14941 0.0113273C9.55731 -0.0600301 9.9452 0.213172 10.0166 0.621844C10.0876 1.03036 9.815 1.41915 9.40723 1.49066L1.50098 2.87704V9.01547C1.50075 9.43026 1.16505 9.76687 0.750977 9.76687C0.336903 9.76687 0.0012036 9.43026 0.000976562 9.01547V2.66766C0.000976562 2.05945 0.437252 1.53896 1.03516 1.43391L9.14941 0.0113273Z" fill="#131E29"/></g><defs><clipPath id="dim-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>` },
  ];

  const arrowSVG = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6.27342 3.17088C6.59309 2.90781 7.06578 2.95387 7.32909 3.27342L10.8291 7.52049C11.0572 7.79737 11.0571 8.19759 10.8291 8.47459L7.32909 12.7265C7.06587 13.0463 6.59324 13.0923 6.27342 12.8291C5.95363 12.5659 5.9077 12.0932 6.17088 11.7734L9.27831 7.99803L6.17088 4.22655C5.90781 3.90688 5.95387 3.43419 6.27342 3.17088Z" fill="#131E29"/></svg>`;

  function buildNavItem(item) {
    const isActive = item.key === activePage;
    const classes = ['bn-nav-item', isActive ? 'active' : '', item.hasArrow ? 'has-arrow' : ''].filter(Boolean).join(' ');
    const clickHandler = item.href ? `onclick="window.location='${item.href}'"` : '';
    return `
      <button class="${classes}" title="${item.title}" data-key="${item.key}" ${clickHandler}>
        <span class="bn-nav-indicator"></span>
        <span class="bn-nav-icon-wrap">${item.icon}</span>
        ${item.hasArrow ? `<span class="bn-nav-arrow">${arrowSVG}</span>` : ''}
      </button>`;
  }

  const sidenavHTML = `
<div class="bn-sidenav">
  <div class="bn-sidenav-content">
    ${navItems.map(buildNavItem).join('')}
  </div>
  <div class="bn-sidenav-footer">
    <div class="bn-sidenav-sep"></div>
    <a href="admin.html" style="text-decoration:none;" title="Admin">
      <button class="bn-footer-icon${activePage === 'admin' ? ' active' : ''}" style="${activePage === 'admin' ? 'background:#ebf8ff;color:#0064d9;' : ''}" title="Admin">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1a.75.75 0 0 1 .743.648l.007.102v.8a5.25 5.25 0 0 1 1.574.652l.566-.566a.75.75 0 0 1 1.133.976l-.073.084-.566.566c.29.476.497.999.617 1.555l.028.019h.821a.75.75 0 0 1 .102 1.493L12.75 7h-.82a5.25 5.25 0 0 1-.652 1.574l.566.566a.75.75 0 0 1-.976 1.133l-.084-.073-.566-.566A5.25 5.25 0 0 1 8.75 10.27v.98a.75.75 0 0 1-1.493.102L7.25 11.25v-.98a5.25 5.25 0 0 1-1.574-.652l-.566.566a.75.75 0 0 1-1.133-.976l.073-.084.566-.566A5.25 5.25 0 0 1 3.99 7H3.25a.75.75 0 0 1-.102-1.493L3.25 5.5h.74a5.25 5.25 0 0 1 .652-1.574l-.566-.566a.75.75 0 0 1 .976-1.133l.084.073.566.566A5.25 5.25 0 0 1 7.25 2.45V1.75A.75.75 0 0 1 8 1zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor"/></svg>
      </button>
    </a>
    <button class="bn-footer-write" title="Write New">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#wn-sh)"><path d="M11.6211 0.521484C12.3048 -0.164901 13.4165 -0.165443 14.1006 0.520508L15.4844 1.9082C16.1673 2.59302 16.1649 3.70249 15.4795 4.38477L4.0293 15.7812C3.88875 15.9211 3.6983 16 3.5 16H0.75C0.335844 16 9.32638e-05 15.6641 0 15.25V12.5C3.2296e-05 12.3017 0.0787857 12.1112 0.21875 11.9707L11.6211 0.521484ZM1.80762 12.5L3.49902 14.1904L11.4346 6.29297L9.69238 4.58203L1.80762 12.5ZM13.0381 1.58008C12.9404 1.48215 12.7812 1.48209 12.6836 1.58008L10.751 3.51953L12.498 5.23535L14.4219 3.32129C14.5194 3.22379 14.5193 3.06548 14.4219 2.96777L13.0381 1.58008Z" fill="#131E29"/></g><defs><clipPath id="wn-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
    </button>
    <button class="bn-footer-icon" title="Widgets">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#wid-sh)"><path d="M15.8266 9.39684C16.055 9.62953 16.055 10.0069 15.8266 10.2396L14.4193 11.6693C14.4243 11.688 15.1384 14.3497 15.2455 14.93C15.3527 15.5121 14.8724 15.6371 14.7318 15.6253C14.5912 15.6136 14.4112 15.5473 14.3119 15.39L12.9555 13.1566L11.7768 14.3548L12.0033 15.4398C12.0355 15.5945 11.9886 15.7559 11.8783 15.8675C11.6599 16.0888 11.2933 16.0334 11.1478 15.7562L10.599 14.7093L9.56972 14.1527C9.29682 14.0051 9.24179 13.6314 9.46035 13.4095C9.57013 13.2974 9.72908 13.2509 9.88124 13.2826L10.9486 13.513L12.1273 12.3148L9.93007 10.9359C9.6781 10.7774 9.65371 10.4503 9.79824 10.2308C9.98258 9.95089 10.3059 9.98719 10.5863 10.0609L13.5912 10.8275L14.9984 9.39684C15.227 9.16542 15.5975 9.16543 15.8266 9.39684Z" fill="#131E29"/></g><defs><clipPath id="wid-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
    </button>
  </div>
</div>`;

  // ── Inject into page ─────────────────────────────────────────
  const shellRoot = document.getElementById('bn-shell-root');
  const sidenavRoot = document.getElementById('bn-sidenav-root');
  if (shellRoot) shellRoot.outerHTML = shellHTML;
  if (sidenavRoot) sidenavRoot.outerHTML = sidenavHTML;
})();
