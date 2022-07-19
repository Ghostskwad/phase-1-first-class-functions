function receivesAFunction (callBackFunction) {
    callBackFunction ()
}

function returnsANamedFunction () {
    function aNamedFunction () {
        return `I am a named function`
    }
    return aNamedFunction
}

function returnsAnAnonymousFunction () {
    return (function () {console.log ()})
}