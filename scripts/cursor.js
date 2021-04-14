// let circle = document.getElementById("circle");
// const onMouseMove = (e) =>{
//   circle.style.left = e.pageX + 'px';
//   circle.style.top = e.pageY + 'px';
// }
// document.addEventListener('mousemove', onMouseMove);

// document.addEventListener('mousemove', function(e) {
//     let body = document.querySelector('body');
//     let circle = document.getElementById('circle');
//     let left = e.offsetX ;
//     let top = e.offsetY;

//     circle.style.left = e.pageX+ 'px';
//     circle.style.top = e.pageY+ 'px';
//   });

// document.getElementById("circle").addEventListener("mouseenter", run);
// function run() {
//     var btn = document.getElementById("circle");
//     if (!btn.style.left) {
//         // Default to 500 to start
//         btn.style.left = "500px";
//     } else {
//         var posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
//         if (posLeft >= 800) {
//             btn.style.left = "200px";
//         } else if (posLeft > 450) {
//             posLeft += 150;
//             btn.style.left = (posLeft + 150) + "px";
//         }
//     }
// }