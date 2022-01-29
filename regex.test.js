'use strict';



/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false   [A-Za-z]+[A$]    [A-Za-z]+\s[A$]*/

function capitalA(s){
    let valedation = /[A-Za-z]+[A$]/&&/[A-Za-z]+\s[A$]/ ;
    return valedation.test(s)
}


/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io)  ([a-zA-Z]{7})@([a-zA-Z]+)\.([a-zA-Z]{2})$*/

function ioEmail(email){
    let valedation3 = /([a-zA-Z]{7})@([a-zA-Z]+)\.([a-zA-Z]{2})$/;
    return valedation3.test(email)
}

/* You have a text that contain image names with their extention you need to write a function to 
find all images in that text and return their names and extention in an array 

required extention are jpg, jpeg and png.  [a-zA-Z]{3}\.(?:jpg|jpeg|png) . [a-zA-Z]{3}\.(png) [a-zA-Z]{3}\.(jpeg)   [a-zA-Z]{3}\.(jpg)*\

*/

function imagesSearcher(text){
    let arr = 0
    const reg1 = /[a-zA-Z]{3}\.(png)/;
    const reg2 = /[a-zA-Z]{3}\.(jpeg)/;
    const reg3 = /[a-zA-Z]{3}\.(jpg)/;
    const regArry = [];
    regArry.push(reg1);
    regArry.push(reg2);
    regArry.push(reg3);
    for(let i =0 ;i<=regArry.length;i++){
        arr = text.match(regArry[i]);}
    
    return arr
}

describe("Test capitalA", ()=>{
    test("It should return true if the input has uppercase and lowercase characters (no numbers and symbols) and it should end with capital A else return false ", () => {
        expect(capitalA("Hello world A")).toStrictEqual(true);

        expect(capitalA("Hello world")).toStrictEqual(false);

        expect(capitalA("Hello world a")).toStrictEqual(false);
    })
});

describe("Test ioEmail", () => {
    test("It should return true if the input is in email format that end with .io", () => {
        expect(ioEmail("example@example.io")).toStrictEqual(true);
        expect(ioEmail("ex@ample@example.io")).toStrictEqual(false);
        expect(ioEmail("ex.ample@example.io")).toStrictEqual(false);
        expect(ioEmail("example@example.gmail")).toStrictEqual(false);
    })
});


describe("Test imagesSearcher", () => {
    test("It should return all images names that end with jpg, jpeg and png extention", () => {
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toStrictEqual(['cat.png', 'dog.jpg', 'cow.jpeg']);
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toStrictEqual([]);
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. horse.gif Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore dolphin.pdf eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa mouse.tiff qui officia deserunt mollit anim id est laborum.")).toStrictEqual([]);
    })
})