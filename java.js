var longWordTests = [
    {
        parameters: ["localization"],
        expectedResult: "l10n"
    },
    {
        parameters: ["internationalization"],
        expectedResult: "i18n"
    },
    {
        parameters: ["word"],
        expectedResult: "word"
    },
    {
        parameters: [""],
        expectedResult: ""
    },
    {
        parameters: ["1"],
        expectedResult: "1"
    }
];


function longWord(word) {
    if   ( parameters.length > 10) {
        expectedResult = (parameters[0]+[parameters.length-2]+parameters[parameters.length-1]);
    }
    else {return expectedResult;}
}