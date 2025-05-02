const userName = window.prompt("คุณชื่ออะไร?")
if (userName !== ""){
document.getElementById("show-name").innerText = "สวัสดี" + userName;
}

function showInfo() {
    const userAgent = navigator.userAgent;
    window.alert("User Agent: ") + userAgent
}

function openyt() {
    window.open("https://www.youtube.com/");
}