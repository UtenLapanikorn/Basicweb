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
}