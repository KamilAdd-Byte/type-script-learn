"use strict";
//funkcje które nie zwracają nic nigdy to: 1. Niekończace sie petle i 2.funkcje ypu z rzuceniem errora
// sa to typy NEVER - nigdy nie wystąpią!
var showError = function (message) {
    throw new Error(message);
};
// nigdy się nie kończy pętla - typ Never
var showErrors = function () {
    while (true) {
        console.log('Error');
    }
};
var showLog = function () {
    console.log('some log');
};
if (showLog() === undefined) {
    console.log('undefined type!!!');
}
