// example of fallth through statement in js(switch)
var choice = 'x';

switch (choice){
    case 1:
        console.log('case 1');

    case 1.1:
        console.log('case 1.1');

    case 'x':
        console.log('case X');

    case 'y':
        console.log('case y');

    case undefined:
        console.log('undefined');

    case null:
        console.log('NULL case');

    default:
        console.log('default statement');
}


