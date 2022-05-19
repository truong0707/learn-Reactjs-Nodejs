

// HTML DOM

// 1. Element : ID, class, tag, Css selector, HTML collection

//
var headingnode =  document.getElementById("heading")
console.log(headingnode)

console.log({
    element: headingnode
});

//
var headingnodes = document.getElementsByClassName("heading2");
console.log(headingnodes);

//
var headingnodes2 = document.getElementsByTagName("h1");
console.log(headingnodes2);

var headingnode3 = document.querySelector('.heading2') ;// Lấy 1 thằng đầu tiên
console.log(headingnode3);

//

var headingnode4 = document.querySelectorAll('.heading2'); // Lấy tất cả 

console.log(headingnode4);

//
console.log(document.forms);
console.log(document.forms.testform);


// 2. Attribute (vd: id là 1 attribute node)
// 3. Text

