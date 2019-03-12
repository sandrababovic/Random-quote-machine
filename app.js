
//quotes array

const quotes = ["Lighten up, just enjoy life, smile more, laugh more, and don't get so worked up about things.",
              "There is only one happiness in this life, to love and be loved.",
              "Life is full of happiness and tears; be strong and have faith.",
              "Change your life today. Don't gamble on the future, act now, without delay.",
              "Live life to the fullest, and focus on the positive.",
              "The biggest adventure you can take is to live the life of your dreams."];
             
// authors array

const authors = ["-Kenneth Branagh","-George Sand","-Kareena Kapoor Khan","-Simone de Beauvoir","-Matt Cameron","-Oprah Winfrey"];

const colors = ['#ff9999','#6600ff','#ff3333','#ffff80','#00e699','#b3ffb3','#a6ff4d','#c2d1f0','#ff9933'];



// function to show quotes

function showQuote() {

	let randomNum = Math.floor(Math.random() * (quotes.length));
    let randomQuote = quotes[randomNum];
    let randomAuth = authors[randomNum];

    document.getElementById('text').innerHTML=randomQuote;
    document.getElementById('author').innerHTML=randomAuth;

   let bg=document.querySelector('body');
   let randomColor=Math.floor(Math.random()*colors.length);
   bg.style.backgroundColor=colors[randomColor];

   }


let btn=document.getElementById("new-quote");
btn.addEventListener('click', showQuote);


//show random quote and author on the first load 

showQuote();

//function to tweet quotes

function Tweet() {

window.open("https://twitter.com/intent/tweet?text=" + document.getElementById("text").innerHTML +
 document.getElementById("author").innerHTML);
}

let tweet=document.getElementById("twitter");
tweet.addEventListener('click', Tweet);





