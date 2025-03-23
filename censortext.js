var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(text) {
 for idx in censoredWords) {
  inStr = inStr.replace(censoredWords[idx], "****");
 }
 for idx in customCensoredWords) {
 inStr = inStr.replace(customCensoredWords[idx], "****");
 }
 return inStr;
}
function adCensoredWord(word) {
 customCensoredWords.push(word);
}
function getCensoredWords() {
 return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = adCensoredWord;
exports.getCensoredWords = getCensoredWords;