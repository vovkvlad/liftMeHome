// This is a list of ES6 features that should be used in project. The main aim is to have handy list of most useful features
// It is not full yet and will be updated during development.
//
// ----------------------STRINGS--------------------------
// 1 String literals - https://leanpub.com/understandinges6/read#leanpub-auto-template-literals
//
// Examples:
//        ___________________________________________________
            var message = "Multiline \
              string";

              console.log(message);       // "Multiline string"
//        __________________________________________________
            let name = "Nicholas",
                message = `Hello, ${name}.`;

            console.log(message);
//        ___________________________________________________
// -------------------------------------------------------
//
// ----------------------FUNCTIONS------------------------
//
// 1 default parameters - https://leanpub.com/understandinges6/read#leanpub-auto-functions-with-default-parameter-values
// Example:
//        ___________________________________________________
            function makerequest(url, timeout = 2000, callback = function() {}) {
                // the rest of the function
            }
//        ___________________________________________________
// 2 rest parameters
// Example:
//        ___________________________________________________
            function pick(object, ...keys) {
                let result = Object.create(null);

                for (let i = 0, len = keys.length; i < len; i++) {
                    result[keys[i]] = object[keys[i]];
                }

                return result;
            }
//        ___________________________________________________

// 3 spread operator - https://leanpub.com/understandinges6/read#leanpub-auto-the-spread-operator
// Example:
//        ___________________________________________________
            let values = [25, 50, 75, 100];

            // equivalent to
            // console.log(Math.max(25, 50, 75, 100));
            console.log(Math.max(...values));           // 100
//        ___________________________________________________
// 4 arrow functions - https://leanpub.com/understandinges6/read#leanpub-auto-arrow-functions
// Example:
//        ___________________________________________________
            var sum = (num1, num2) => {
                return num1 + num2;
            };
//        ___________________________________________________
// -------------------------------------------------------
//
// ------------------------OBJECTS------------------------
// 1 property initializer shorthand - https://leanpub.com/understandinges6/read#leanpub-auto-object-literal-syntax-extensions
// Example:
//        ___________________________________________________
            function createPerson(name, age) {
                return {
                    name,
                    age
                };
            }
//        ___________________________________________________
// 2 Concise Methods
// Example:
//        ___________________________________________________
            var person = {
                name: "Nicholas",
                sayName() {
                    console.log(this.name);
                }
            };
//        ___________________________________________________
// 3 Object.is()/Object.assign() - https://leanpub.com/understandinges6/read#leanpub-auto-new-methods
// Example:
//        ___________________________________________________
                console.log(+0 == -0);              // true
                console.log(+0 === -0);             // true
                console.log(Object.is(+0, -0));     // false

                console.log(NaN == NaN);            // false
                console.log(NaN === NaN);           // false
                console.log(Object.is(NaN, NaN));   // true

                console.log(5 == 5);                // true
                console.log(5 == "5");              // true
                console.log(5 === 5);               // true
                console.log(5 === "5");             // false
                console.log(Object.is(5, 5));       // true
                console.log(Object.is(5, "5"));     // false
//        ___________________________________________________

                function EventTarget() { /*...*/ }
                EventTarget.prototype = {
                    constructor: EventTarget,
                    emit: function() { /*...*/ },
                    on: function() { /*...*/ }
                };

                var myObject = {};
                Object.assign(myObject, EventTarget.prototype);

                myObject.emit("somethingChanged");
//        ___________________________________________________
// 4 Object prototype access via super reference
// Example:
//        ___________________________________________________
                let friend = {
                    getGreeting() {
                        // in the previous example, this is the same as:
                        // Object.getPrototypeOf(this).getGreeting.call(this)
                        return super.getGreeting() + ", hi!";
                    }
                };
//        ___________________________________________________
// -------------------------------------------------------
//
// -----------------------DESTRUCTORS---------------------
// 1 object destructors - https://leanpub.com/understandinges6/read#leanpub-auto-object-destructuring
// 2 array destructors - https://leanpub.com/understandinges6/read#leanpub-auto-array-destructuring
// 3 destructor parameters - https://leanpub.com/understandinges6/read#leanpub-auto-destructured-parameters
// -------------------------------------------------------
//
//
//..add further resources preferably with links