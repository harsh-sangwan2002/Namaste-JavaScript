// Closures: Function bunded to its lexical scope
function z() {
    var b = 9;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();

// Uses of closures
// 1. Data hiding
// 2. Partial application
// 3. Memoization
// 4. Currying
// 5. Function factories
// 6. Event handlers
// 7. Maintaining state
// 8. Asynchronous programming
// 9. Module pattern
// 10. Callbacks
// 11. Function composition
// 12. Function decorators
// 13. Function chaining