if (window !== window.top) {
  return;
}

const ofWin = fin.Window.getCurrentSync();
ofWin.updateOptions({frame: false});

window.addEventListener('DOMContentLoaded', function() {
  let styleOverrides = document.createElement('style');
  
  styleOverrides.innerHTML =  location.pathname === '/' ?
    `
    /* OpenFin - Login Window Style Overrides */
    
    #content {
      -webkit-app-region: no-drag;
    }
    
    #left {
      -webkit-app-region: drag;
    }
    ` 
  : !location.search.includes('windowed=true') ?
    `
    /* OpenFin - Main Window Style Overrides */
    
    .slds-global-header * {
      -webkit-app-region: no-drag;
    }
    
    .slds-global-header, .slds-global-header__logo {
      -webkit-app-region: drag;
    }
    `
  :
    `
    /* OpenFin - Popout Window Style Overrides */
    
    .slds-col--bump-left {
      -webkit-app-region: no-drag;
    }
    
    .slds-utility-panel__header {
      -webkit-app-region: drag;
    }
    `
  ;
  
  document.head.appendChild(styleOverrides);
});