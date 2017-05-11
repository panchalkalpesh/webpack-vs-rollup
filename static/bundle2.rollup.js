function Module2B(){
    console.log('Module2B');
}

function mod() {
    console.log('trying to access Module2.Module2B()');
    Module2B();
}

mod();
