


// Warning: This code contains high levels of fun!
function tellAJoke() {
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why did the JavaScript developer wear glasses? Because he couldn't C#.",
        "Why do Python programmers have low self-esteem? Because they're constantly comparing their self to others.",
        "Why did the computer get cold? It left its Windows open!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log("Here's a funny joke for you:");
    console.log(randomJoke);
    console.log("\nIf you didn't laugh, please upgrade your sense of humor!");
}

tellAJoke();
