function externe(msg) {
  // portée de closure (msg)
  function interne() {
    console.log(msg);
  }
  interne();
}

externe('Hello');

// pile d'appel
// ^
// |
// |log
// |interne
// |externe
// +--------------------------------> temps
//
