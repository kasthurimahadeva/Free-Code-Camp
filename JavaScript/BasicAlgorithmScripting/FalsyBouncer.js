// Falsy Bouncer
// my idea
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter((arg) => (Boolean(arg)));
}
  
bouncer([7, "ate", "", false, 9]);


// Short way
function bouncer(arr) {
    return arr.filter(Boolean);
}