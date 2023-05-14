const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('Whats your name? Nicknames are also acceptable :)', (answer) => {
  answers.push(answer);

  rl.question('Whats an activity you like doing? ', (answer) => {
    answers.push(answer);

    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer);

      rl.question('Which meal is your favourite (e.g. dinner, brunch, etc.)?', (answer) => {
        answers.push(answer);

        rl.question('Whats your favourite thing to eat for that meal?)?', (answer) => {
          answers.push(answer);

          rl.question('Which sport is your absolute favourite?', (answer) => {
            answers.push(answer);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              answers.push(answer);

              const [name, activity, music, meal, food, sport, superpower] = answers;
              const profile = `Hi, my name is ${name} (but you can call me ${name}). I like ${activity} and usually listen to ${music} while doing it. My favorite meal is ${meal}, and I love eating ${food} for it. My absolute favorite sport is ${sport}, and if I could have any superpower, it would be ${superpower}.`;
              console.log(profile);
              
              rl.close();
});
});
});
});
});
});
});