var a;
// a is set to undef. during the creation phase of the exec. context

a = null;
// the js engine coerces this to false.

a = undefined;
// false

a = "";
// false

a = "hello";
// this will coerce to true and the console log will trigger.

if (a){
  console.log("something is there.");
}

// another example.

var a = 0;

if (a || a === 0){
  console.log("something is there");
}

// this will coerce to true because the strict equality operator is higher on precedence list.
