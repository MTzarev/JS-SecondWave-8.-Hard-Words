function hardWords(input) {
    let text = input.shift();
    let newWords = input.shift();
    let splittedText = text.split(` `);

    for (let word of splittedText) {
        for (let wordN of newWords) {
            let wordNew = wordN.length;
            if (word.includes(`_`)) {
                let hole = word;
                let lastIndex = hole.lastIndexOf(`_`);
                let holeL=lastIndex+1;
                let holeToChange = `_`.repeat(holeL)
                if (holeL === wordNew) {
                    text=text.replace(holeToChange, wordN)
                }
            }
        }
    }
    console.log(text);
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
