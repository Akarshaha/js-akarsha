// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
 (function chai() {
    console.log(`db connected`);
    
//  })(); always using semicolon is must to execute next function
// IIFE IS TO EXECUTE IMMEDIATELY TO PREVENT FROM GLOBAL SCOPE POLLUTION
((name) => (
    console.log(`db connnected 2 ${name}`)
    
// ))('gunda') named iife