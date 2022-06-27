let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.'

let storyWords = story.split(' ');
// console.log(storyWords.length);

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word)); 
// console.log(betterWords);

let veryCount = [];

let reallyCount = [];

let basicallyCount = [];

for (let i = 0; i < betterWords.length; i++) {
  for (let j = 0; j < overusedWords.length; j++) {
    if (betterWords[i] === 'very'){
    veryCount.push(betterWords[i]);
    } 
    else if (betterWords[i] === 'really'){
    reallyCount.push(betterWords[i]);
    } 
    else if (betterWords[i] === 'basically'){
    basicallyCount.push(betterWords[i]);
    }
    
  }
}
// console.log(veryCount.length)
// console.log(reallyCount.length)
// console.log(basicallyCount.length)

let sentenceCount = [];

for (let k = 0; k < storyWords.length; k++) {
  if (storyWords[k].includes('.') || storyWords[k].includes('!')){
    sentenceCount++;
  }
  };
// console.log(sentenceCount++);

// console.log(betterWords.length)

function logResults(wordCount, sentCount, vCount, rCount, bCount){
  console.log(`This contains ${wordCount} words.`);
  console.log(`This contains ${sentCount} sentences.`);
  console.log(`This uses the word 'very' ${vCount} times.`)
  console.log(`This uses the word 'really' ${rCount} times.`)
  console.log(`This uses the word 'basically' ${bCount} times.`)
} 
logResults(betterWords.length, sentenceCount, veryCount.length, reallyCount.length, basicallyCount.length);
