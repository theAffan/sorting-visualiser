var arrayGlobal = [];
function test() {

    let list = [];
    for (var i = 0; i < 50; i++) {
        list.push(Math.floor(Math.random() * 85));
    }
console.log(list);
    arrayGlobal = list;
    let canvas = document.getElementById("drawing_area");
    const height = canvas.offsetHeight;

    //clear canvas if already alloted arrays are present
    canvas.innerHTML = '';

    for (let i = 0; i < list.length; i++) {

        div = document.createElement('div');

        div.setAttribute('class', 'array_elements');
        div.setAttribute('id', i);

        div.style.height = (list[i] / height) * 3000 + "px";
        // console.log(div.style.height);
        div.textContent = list[i];
        canvas.appendChild(div);

    }
    console.log(arrayGlobal);
}