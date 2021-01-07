const TO_UPPERCASE = (lastWord) => {
  let sentence = `The little gecko ate the ${lastWord}`;
  let splitSentence = sentence.split("");
  let cutSentence = splitSentence.splice(splitSentence.length - lastWord.length -1);
  return `The changed sentence is: 
${splitSentence.join("")}
and the last word is:
${lastWord}`;
}

console.log(TO_UPPERCASE("bug"));