let q = window.location.search;
let params = new URLSearchParams(q);
let firstName = params.get("firstName");
let lastName = params.get("lastName");
let age = params.get("age");
console.log({ firstName, lastName, age });
