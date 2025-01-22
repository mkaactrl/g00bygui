chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("websim.ai")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  } else {
    alert("fag, you know what to do.");
  }
});
