// ==UserScript==
// @name         Vatnik Alert
// @namespace    tampermonkey
// @version      0.1
// @description  Adds a "vatnik alert" sign next to Twitter user handles that frequently post pro-Russia propaganda
// @author       Phial
// @match        https://twitter.com/*
// @grant        none
// @run-at      document-idle
// ==/UserScript==
// Retrieve all tweets on the page
setInterval(function() {
const tweets = document.querySelectorAll('article[role="article"]');

// Propaganda keywords to look out for
(async function() {
'use strict';
const propagandaKeywords = [
  "russophobia",
  "ukrop",
  "ukrainian nazi",
  "russophobia",
  "russophobic",
  "ukraine aggression",
  "kiev junta",
  "fascist",
  "banderite",
  "neo-nazi",
  "ukrainian nationalist",
  "ukrainian ultra-nationalist",
  "galician",
  "oun-upa",
  "shukhevych",
  "stepan bandera",
  "volyn massacre",
  "ukrainian genocide",
  "ukrainian holocaust",
  "ukrainian fascists",
  "ukrainian rebels",
  "ukrainian agressors",
  "nazi azov battalion",
  "donbass",
  "ukranian aggression",
  "8 years",
  "8 years of bombing donbass",
  "kiev regime",
  "zelenskyy regime",
  "hohol"
];

// Function to check if tweet contains propaganda keywords
function tweetContainsPropaganda(tweet) {
  const tweetText = tweet.querySelector('div[dir="auto"]').innerText.toLowerCase();
  return propagandaKeywords.some(keyword => tweetText.includes(keyword));
}

// For each tweet on the page:
tweets.forEach(tweet => {
  // Check if tweet contains propaganda keywords
  if (tweetContainsPropaganda(tweet)) {
    // Add red toilet icon next to the user's handle
    const usernameElement = tweet.querySelector('.css-901oao');
    const toiletIcon = document.createElement('span');
    toiletIcon.innerHTML = '&#x1F4A9;';
    toiletIcon.style.marginLeft = '4px';
    usernameElement.after(toiletIcon);
    // Add a tooltip indicating that the tweet contains propaganda
    usernameElement.title = 'This tweet contains pro-Russian propaganda';
  }
});
})();
}, 1500);
