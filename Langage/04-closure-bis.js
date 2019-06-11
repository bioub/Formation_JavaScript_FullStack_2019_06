function externe(msg) {
    // portée de closure (msg)
    function interne() {
        console.log(msg);
    }
    return interne;
}

const hello = externe('Hello');
hello();

// pile d'appel
// ^
// |
// |
// |          log
// |externe - interne/hello
// +--------------------------------> temps
// 

/*
function createButton(value) {
    const btn = document.createElement('button');
    btn.innerText = value;
    btn.addEventListener('click', function() {
        console.log(value);
    });
    document.body.appendChild(btn);
}
createButton('Hello 1');
createButton('Hello 2');
createButton('Hello 3');
*/

// 3 3 3 
for (var i=0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// 0 1 2
for (var i=0; i<3; i++) {
    setTimeout(externe(i), 1000);
}