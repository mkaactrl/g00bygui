console.log("g00bygui activated on Websim!");

// Create the tool interface and add it to the page
const container = document.createElement('div');
container.innerHTML = `
  <div style="position: fixed; top: 10px; left: 10px; background: #282c34; color: white; padding: 10px; z-index: 10000; border-radius: 5px; font-family: Arial, sans-serif;">
    <span style="font-weight: bold;">g00bygui</span>
    <button id="runScript" style="margin-left: 10px;">Run Script</button>
    <br>
    <a href="https://github.com/mkaactrl/g00bygui/blob/main/g00byguibackground.webp" target="_blank" style="color: #61dafb; font-size: 12px; text-decoration: none; margin-top: 5px; display: inline-block;">GitHub Repository</a>
  </div>`;
document.body.appendChild(container);

// Add functionality to the "Run Script" button
document.getElementById('runScript').addEventListener('click', () => {
  const userScript = prompt("Enter your JavaScript code to execute:");
  if (userScript) {
    try {
      eval(userScript); // Experimental, handle with caution
    } catch (error) {
      console.error("g00bygui Error:", error);
    }
  }
});
