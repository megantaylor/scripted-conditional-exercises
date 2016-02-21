var a = true;
var b = false;
var c = a && !b;
//  What will c's value be after the above code has run?


c = c || true;
c = c && false;
c = c && true;
// What is c's value now?


c = (a || b) || (a && !a) || !(b && !c) || (c || !(b && a));
// What is c's value now?

// Was there a quick way to figure out what c's value would be?
// Did you need to look at everything in parentheses?