const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button")
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

// random qoute function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
});

}
soundBtn.addEventListener("click",()=>{
    // the SpeechSynthesisUtterance is a web speech api that re[resents a speech request
    let utterance = new SpeechSynthesisUtterance (`${quoteText.innerText} by ${authorName.innerTex} `);
    speechSynthesis.speak(utterance); // pseak method of speechSynthesis speaks the utternance
})
copyBtn.addEventListener("click",()=>{
   // copying the quotes text on copyBtn click
   // writeText() property writes the specified text string to  to system clipbord
   navigator.clipboard.writeText(quoteText.innerText);
})
twitterBtn.addEventListener("click",()=>{
   let tweetUrl = `https://twitter.com/home/url=${quoteText.innerText}`;
   window.open(tweetUrl, "_blank")
})

quoteBtn.addEventListener("click", randomQuote);
