// Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("main-heading").textContent = "You changed the heading! 🎉";
  });
  
  // Toggle CSS styles
  document.getElementById("toggle-style-btn").addEventListener("click", function () {
    const desc = document.getElementById("description");
    desc.style.color = desc.style.color === "blue" ? "black" : "blue";
    desc.style.fontWeight = desc.style.fontWeight === "bold" ? "normal" : "bold";
  });
  
  // Add or remove a paragraph element
  let isElementAdded = false;
  document.getElementById("add-remove-btn").addEventListener("click", function () {
    const container = document.getElementById("dynamic-content");
    if (!isElementAdded) {
      const newPara = document.createElement("p");
      newPara.textContent = "🎈 A new paragraph has been added!";
      newPara.id = "new-para";
      container.appendChild(newPara);
      isElementAdded = true;
    } else {
      const existing = document.getElementById("new-para");
      if (existing) {
        container.removeChild(existing);
      }
      isElementAdded = false;
    }
  });
  