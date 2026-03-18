/**
 * Proteção anti-cópia avançada - dificulta cópia mesmo para usuários experientes
 */
(function() {
  'use strict';

  function block(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  function blockKey(e) {
    var k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && ['c','x','u','s','a','p'].indexOf(k) !== -1) return block(e);
    if (e.key === 'F12' || e.key === 'PrintScreen' || e.key === 'Snapshot') return block(e);
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i','j','c'].indexOf(k) !== -1) return block(e);
    if ((e.ctrlKey || e.metaKey) && k === 'p') return block(e);
  }

  document.addEventListener('contextmenu', block, true);
  document.addEventListener('copy', block, true);
  document.addEventListener('cut', block, true);
  document.addEventListener('paste', block, true);
  document.addEventListener('selectstart', block, true);
  document.addEventListener('dragstart', block, true);
  document.addEventListener('keydown', function(e) { if (blockKey(e)) return; }, true);

  var style = document.createElement('style');
  style.textContent = '*,*::before,*::after{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;-webkit-touch-callout:none!important}::selection,::-moz-selection{background:transparent!important;color:transparent!important}input,textarea{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}';
  (document.head || document.documentElement).appendChild(style);

  setInterval(function() {
    try { debugger; } catch (_) {}
  }, 1500);

  if (window.top !== window.self) {
    try { window.top.location = window.self.location; } catch (_) {}
  }
})();
