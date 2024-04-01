const screen = document.getElementById('screen');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


function fetchQuotes(){
    try {
        fetch('https://api.quotable.io/quotes')
        .then(res => res.json())
        .then(data => {
            const mainQuotes = data.results;
            const rand = Math.floor(Math.random() * 21)
            const subQuotes = mainQuotes[rand];
            const quoteContent = subQuotes.content;
            const quoteAuthor = subQuotes.author;
            screen.innerHTML = `"${quoteContent}" <br> <br> - ${quoteAuthor}`
        })
    } catch (error) {
        console.log(error);
    }
}

fetchQuotes();

setInterval(fetchQuotes,10000);
