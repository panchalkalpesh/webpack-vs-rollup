function Module2A(){
    console.log('Module2A');
}

function Module2B(){
    console.log('Module2B');
}

function Module2C(){
    console.log('Module2C');
}

var Module2 = Object.freeze({
	Module2A: Module2A,
	Module2B: Module2B,
	Module2C: Module2C
});

Module2.Module2B();
