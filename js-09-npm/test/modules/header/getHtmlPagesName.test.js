


//test( "descripción de la prueba", ()=>{} );

test("Debería retornar el nombre de la página html", ()=>{

    const filePath = "src/pages/home.html";
    const expected = "home.html";
    
    const result = getHtmlPageName( filePath );


    expect( result ).toBe( expected );

});