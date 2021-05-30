// zdefinowane typy na github

export class DefinitelyTyped {
    _gitHubLink: string = 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/absolute';

    //komenda w konsoli tworząca package.json
    _npm: string = '~$npm init'

    //instalowanie bibliotek w terminalu
    _npmJQuery: string = '~$npm install @types/jquery --save-dev';

    public showLink(){
        return this._gitHubLink.toString();
    }
}
console.log(DefinitelyTyped.toString());
