// function f ( name ) {
//     let sum = 0;
//     for ( let i = 1, l = arguments.length; i < l; i ++ ) {
//         sum += arguments [ i ];
//     }
//     let m = sum / ( arguments.length - 1 );
//     console.log ( name + ": " + m );
// }


function f ( name, ...grades ) {
    let sum = 0;
    grades.forEach ( g => { sum += g; } )
    let m = sum / grades.length;
    console.log ( name + ": " + m );
}



f ( "Gholam", 13, 15, 20, 9, 12 );
