"use strict";

function generateTags(el) {
  const input = el.value;
  const tags = input
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);

  const tagSection = document.getElementById("generate");

  tagSection.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("div");
    tagElement.className = "tag";
    tagElement.textContent = tag;

    const hashtag = document.createElement("div");
    hashtag.className = "hashtag";
    hashtag.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
      </svg>
    `;

    tagElement.appendChild(hashtag);
    tagSection.appendChild(tagElement);
  });
}
