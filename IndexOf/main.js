"use strict";

let groups = [{
    name: "f(x)",
    isActive: false,
    agency: "SME"
}, {
    name: "So Nyuh Shi Dae",
    isActive: true,
    agency: "SME"
}, {
    name: "TxT",
    isActive: true,
    agency: "BIG HIT"
}, {
    name: "Twice",
    isActive: true,
    agency: "JYP"
}, {
    name: "Seventeen",
    isActive: true,
    agency: "BIG HIT"
}]

let group = ["Twice", "Seventeen", "Viviz", "TxT"]

function findIndexOf(tab, value) {
    let index = 0;
    while (tab[index] != value) {
        index++;
        if (index == tab.length + 1) {
            return -1
        }
    }
    return index;
}

// console.log(findIndexOf(group, "TxT"));

function findIndexOfObject(tab, prop, value) {
    let index = 0
    while (tab[index][prop] != value) {
        index++
        if (index == tab.length) {
            return -1;
        }
    }
    return index;
}

// console.log(findIndexOfObject(groups, "name", "Seventeen"));



function findIndexOfObjectNoProp(tab, value) {
    let index = 0;
    let j = 0;
    let props = Object.keys(tab[0])
    let prop = props[0]
    while (tab[index][prop] != value) {
        console.log(tab[0].name.value);
        
        while (j != props.length + 1) {
            console.log(props.length, j);
            prop = props[j]
            j++;
        }
        index++;
        if (index == tab.length) {
            return -1
        }
    }
    return index;
}

console.log(findIndexOfObjectNoProp(groups, "So Nyuh Shi Da"));