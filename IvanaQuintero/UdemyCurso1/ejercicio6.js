fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then (json =>console.log (json.userid) )
     .catch ( e => console.log (e))