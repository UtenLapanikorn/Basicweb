<<<<<<< HEAD
function setAlert() {
    setTimeout(function(){
        confirm("พักสายตาสักหน่อยไหม?");
    }, 4 * 1000) 
}

function setAlert1() {
    let intervalId = 0;
    intervalId = setInterval(function (){
const isBreak = confirm("คุณควรพักสายตาสักครู่ คุณต้องการหยุดหารแจ้งเตือนหรือไม่?")
if (isBreak) {
    clearInterval(intervalId);
    alert("ขอบคุณที่พักสายตา");
}
    }, 10 * 1000)
=======
function setAlert() {
    setTimeout(function(){
        confirm("พักสายตาสักหน่อยไหม?");
    }, 4 * 1000) 
}

function setAlert1() {
    let intervalId = 0;
    intervalId = setInterval(function (){
const isBreak = confirm("คุณควรพักสายตาสักครู่ คุณต้องการหยุดหารแจ้งเตือนหรือไม่?")
if (isBreak) {
    clearInterval(intervalId);
    alert("ขอบคุณที่พักสายตา");
}
    }, 10 * 1000)
>>>>>>> c1cd76c4ef5508ff74f0548f40f77d8a582c5e62
}