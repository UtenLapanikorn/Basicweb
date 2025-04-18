const headline = document.getElementsByTagName("h1");
headline[5].innerText = 'หยุดพัก อาจารย์ไม่อยู่'
console.log(headline, typeof headline)

const getByClass = document.getElementsByClassName("font-thai");
console.log(getByClass)

/*const b = window.confirm("เปิด Google มั้ย?");
if (b) {
    window.open("https://www.google.co.th/?hl=th");
}*/

/*const c = window.confirm("ดู URL ของเว็บนี้มั้ย");
if (c) {
    window.alert(window.location.href);
}*/

const d = window.confirm("ดู Screen มั้ย?")
if (d) {
   window.alert("Screen: " + screen.availHeight)
}
