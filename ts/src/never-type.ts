//funkcje które nie zwracają nic nigdy to: 1. Niekończace sie petle i 2.funkcje typu z rzuceniem errora
// sa to typy NEVER - nigdy nie wystąpią!

const showError = (message:string) =>  {
    throw new Error(message);
}
// nigdy się nie kończy pętla - typ Never
const showErrors = () => {
    while (true){
        console.log('Error')
    }
}

const showLog = () => {
    console.log('some log');
}

if (showLog() === undefined){
    console.log('undefined type!!!')
}
