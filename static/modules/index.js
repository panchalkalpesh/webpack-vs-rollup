import * as Module1 from './Module1.js';
import * as Module2 from './Module2.js';

export function mod() {
    console.log('trying to access Module2.Module2B()');
    Module2.Module2B();
}

export function mod2(){
    console.log('new function from modules/index.js');
}