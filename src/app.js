// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;
function createPop(array, Items) {

// Progression 2: add 2 variables: currIndex, check
let currIndex = NEG_INF;
let check = false;

// Progression 3: create a function "searchForElement" 
function searchForElement(array, givenItem) {
  array.forEach((Elements, Index) => {
    if (Elements == givenItem) {
      currIndex = Index;
      check = true;
    }
  });
}

// Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
return function () {
  searchForElement(array, Items);
  let Index = currIndex;
  let isPresent = check;
  if (isPresent) {
    return `The item is present and is at index ${Index}`;
  } else {
    return `The item is not present and is at index ${Index}`;
  }
};
}
const arrayofnumbers = [1, 2, 3, 4, 5, 6];
const itemstosearch = 4;
const pop = createPop(arrayofnumbers, itemstosearch);
pop();