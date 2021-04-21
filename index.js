// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(Garfield) {
    cats.pop();
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift();
}

function appendCat(name) {
   const cats2 = [...cats, name]
   return cats2
}

function prependCat(name) {
    const cats3 = [name, ...cats]
    return cats3
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1)
}

//const allCities = ['Los Angeles', ...coolCities];