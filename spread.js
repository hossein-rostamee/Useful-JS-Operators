const oldGrades = [ 13, 12, 15, 15, 16 ];
const newGrades = [ 0, 1, 0, 16, 18, 19 ];


// For
// const allGrades = [];
// for ( let i = 0, l = oldGrades.length; i < l; i ++ )
//     allGrades.push ( oldGrades [ i ] )
// for ( let i = 0, l = newGrades.length; i < l; i ++ )
//     allGrades.push ( newGrades [ i ] )


// For in
// const allGrades = [];
// for ( let key in oldGrades )
//     allGrades.push ( oldGrades [ key ] );
// for ( let key in newGrades )
//     allGrades.push ( newGrades [ key ] );


// forEach
// const allGrades = [];
// oldGrades.forEach ( item => allGrades.push ( item ) );
// newGrades.forEach ( item => allGrades.push ( item ) );


// Spread Operator
const allGrades = [ ...oldGrades, ...newGrades ];



console.log ( allGrades );
