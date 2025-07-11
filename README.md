## Promises in JavaScript (then, catch and finally)

A promise is an object that represents the completion or failure of an asynchronous operation. Basically, as its name suggests, it saves the promise to display a result after executing an operation. It returns a returned object to which callback functions are attached, instead of passing callbacks to a function.

This allows for certain guarantees, such as: they will never be called before the completion of the current JavaScript event loop. Functions added with then(), even after the asynchronous operation has succeeded or failed, will be called with .then(). Multiple callback functions can be added by calling then() multiple times. Each one is executed one after the other, in insertion order. This does not include chaining.

- .then() Called when the promise is resolved successfully.

- .catch() Called when the promise is rejected (an error occurs).

- .finally() Called after the promise is settled, whether it was resolved or rejected.

```
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => response.json())
  .then(data => {
    console.log("Pokémon:", data.name);
  })
  .catch(error => {
    console.error("Error fetching Pokémon:", error);
  })
  .finally(() => {
    console.log("Request completed");
  });
```