var refreshCount = 0;
var refreshInterval = setInterval(function() {
  window.location.reload();
  refreshCount++;
  if (refreshCount >= 11) {
    clearInterval(refreshInterval);
  }
}, 5000);
