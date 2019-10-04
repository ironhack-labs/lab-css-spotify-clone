const testArray = [
  ['L','z','x','C','v','B'],
  ['t','i','I','p','e','7'],
  ['w','y','s','r','m','x'],
  ['q','U','l','b','k','H'],
  ['A','i','G','Y','o','L'],
  ['n','f','d','W','z','n']
];

function concatFirstDiagonal(twoDimArray) {
    for (let i = 0; i<twoDimArray.length; i++) { 
        let diagonal = [i] + [i+1];
        return diagonal;
    }
}

console.log(concatFirstDiagonal(testArray));