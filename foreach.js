const a = [ 12, 14, 15, 15, 26 ];

a.forEach ( ( item, index, arr ) => {
    console.log ( `${ index } => ${ item }` )
} );



// ***


// ***

function barayeHar ( a , b ) {
    for ( let i=0 , l=a.length ; i<l ; i++){
        b( a[i] , i , a );
    }
}

barayeHar ( a, ( item, index, arr ) => {
    console.log ( `${ index } => ${ item }` )
} );
