

// API (URL)) => Application programing interface

//  nó là 1 cổng giảo tiếp của các PM

// Backend -> API -> Fecth -> Dữ lieu JSON
// JSON.parse -> Javarscript type
// Render ra giao diện với HTML


var postApi = 'https://jsonplaceholder.typicode.com/users'

fetch(postApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        // render ra
        var htmls = posts.map(function (post) {
            return `<li>
              <h2>${post.name}</h2>
              <h2>${post.email}</h2>
              </li>`;


        });

        var html = htmls.join('');
        // choc vao dom
        document.getElementById('comment-block').innerHTML = html

    })
    .catch(function (err) {
        console.log("co loi" + err)
    });




    