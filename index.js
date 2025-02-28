const string = "Hello!";

function shout(string) {
    return string.toUpperCase();
}

function logShout(string) {
console.log(string);
console.log(string.toUpperCase());

console.log(string === string.toUpperCase());
}

// const string = "Hello!";

function whisper(string) {
    return string.toLowerCase();
  }
  
function logWhisper(string) {
    console.log(string.toLowerCase());
    console.log(string === string.toLowercase)
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  

 