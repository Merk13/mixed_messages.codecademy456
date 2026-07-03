/* Goal: A random message generator that displays a cohesive 
   message set made of a fortune, advice, and lucky number. */

const generateFortune = () => {
    // Define the message components
    const fortunes = [
        "Signs point to yes.", "Ask again later.", "Better not tell you now.",
        "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.",
        "It is certain.", "It is decidedly so.", "Most likely.", 
        "My reply is no.", "My sources say no.", "Outlook not so good.", 
        "Outlook good.", "Reply hazy, try again.", "Very doubtful.", 
        "Without a doubt.", "Yes - definitely.", "You may rely on it."
    ];

    const advice = [
        "Focus on progress, not perfection.", 
        "You become who you spend the most time with.", 
        "Never take criticism from someone whose advice you wouldn't take.", 
        "Every action you take is a vote for the type of person you wish to become.", 
        "A year from now you may wish you had started today.", 
        "Do what you can, with what you have, where you are.", 
        "Failure is not the opposite of success, it is a stepping stone towards it."
    ];

    const luckyNumbers = Array.from({length: 100}, (_, i) => i + 1);

    // Helper function to randomly select an element from an array
    const getRandomElement = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    // Select the cohesive components
    const myFortune = getRandomElement(fortunes);
    const myAdvice = getRandomElement(advice);
    const myLuckyNumber = getRandomElement(luckyNumbers);

    // Assemble and display the message
    console.log("Say or think your question to get your fortune:");
    console.log("--------------------------------------------");
    console.log(`🔮 Your Fortune: ${myFortune}`);
    console.log(`💡 Your Advice:  ${myAdvice}`);
    console.log(`🍀 Lucky Number: ${myLuckyNumber}`);
    console.log(`                            ⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⠾⠛⠋⠉⠉⠉⠉⢙⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⢀⣼⠟⠁⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⢠⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⡟⣷⡀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⣾⢇⣤⣶⣶⣦⣤⣀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠁⢹⣇⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⢠⡿⠁⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⣠⣤⡙⠻⢿⣿⣿⣿⣿⣿⣋⣠⣤⡶⠟⢁⣤⡄⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣷⣤⣈⣉⠉⠛⠛⠉⣉⣠⣤⣾⣿⣿⡟⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⣾⣦⣀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⢋⣠⣴⣷⠀⠀⠀⠀
                ⠀⠀⠀⠀⢿⣿⣿⣿⣷⣶⣤⣬⣭⣉⣉⣉⣩⣭⣥⣤⣶⣾⣿⣿⣿⡿⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠛⠛⠛⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀ `)
    console.log("--------------------------------------------");
};

// Run the generator
generateFortune();
