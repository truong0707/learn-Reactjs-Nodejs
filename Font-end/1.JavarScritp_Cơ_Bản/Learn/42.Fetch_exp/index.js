var listCoursesBlock = document.querySelector("#list-courses");


var coursesApi = 'https://jsonplaceholder.typicode.com/users';


function start() {
    // vi dung call back nen truyen vao 1 fucntion
    /* getCourses(function(courses){

        renderCourses(courses);;
    }) */

    // get code vaf render
    getCourses(renderCourses)


    // chay ham login
    handleCreateForm();

}

// Start app
start();

// Function lay kho hoc
function getCourses(callback) {
    fetch(coursesApi)
        .then(function (response) {
            // de nhung cai then tiep theo nhan dc Json
            return response.json();
        })
        .then(callback)
}


// Create(add)
function createCourse(data, callback) {
    var options = {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
       body: JSON.stringify(data)
    }
    // 
    fetch(coursesApi, options)
    .then(function(res){
        res.json();
    })
    .then(callback);
}


//  render ra
function renderCourses(courses) {


    var htmls = courses.map(function (course) {
        return `
           <li>
           <h4>${course.name}</h4>
           <p>${course.catchPhrase}</p>
           </li>
        `;

    });

    listCoursesBlock.innerHTML = htmls.join('')

}


 // su ly button
function handleCreateForm(){
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function() {
        // lay du lieu khi onclik
        var name = document.querySelector('input[name="name"]').value //lay gia tri ma chon nhung thang input co name la name (vi du khi nhap vao 123 va bam onclick)
        var catchPhrase = document.querySelector('input[name ="catchPhrase"]').value


        var formData ={
            name: name,
            catchPhrase: catchPhrase,
        }
        // 
        createCourse(formData);
    }

}


// 21: 30