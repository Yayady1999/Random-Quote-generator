let quotes = [
    {
        quote: " “It’s about” is a way to highlight the importance of something.",
        author: "Scott Belsky"
    },
    {
        quote: " “Think for yourself” means your thoughts should be your own—not what someone else has said or told you to think",
        author: "Coco Chanel"
    },
    {
        quote: " “What would you do if” is a way to ask about a possible scenario which may or may not ever happen",
        author: "Sheryl Sandberg"
    },
    {
        quote: " “It will work” is a way of saying “It will happen” or “It is possible.",
        author: "Maya Angelou,"
    },
    {
        quote: " To be intimidated” means to be afraid of something, usually because it seems too strong, big or impossible",
        author: "Sara Blakely"
    },
    {
        quote: " “To run” something means to control or lead it.",
        author: "Arianna Huffington"
    },
    {
        quote: " “To lose sight” means your ability to see gets worse and worse. If you completely lose sight of something, as in this quote, it means you can’t see it any longer.",
        author: "Andre Gide"
    },
    {
        quote: " “This quote means that you should be around people who are going to encourage you to do better. You should spend time with people who want to see you succeed",
        author: "Oprah Winfrey"
    },
    {
        quote: " Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered",
        author: "Michelle Obama"
    },
    {
        quote: " Anger is the ultimate destroyer of your own peace of mind",
        author: "Dalai Lama"
    },
    {
        quote: " Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot",
        author: "Wayne Gretzky"
    }


]

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let button = document.querySelector("button");

button.addEventListener("click",()=>{
   let random = Math.floor( Math.random() * quotes.length ); 
    console.log(random);
    
    h2.innerText = quotes[random].quote;
    h3.innerText = quotes[random].author;
});
















