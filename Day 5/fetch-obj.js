const axios = require('axios');
let data = {};

axios.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(json => {
    data = json.data;
  });

  data.title = "Dibimbing Batch 9";
  console.log(data);
