let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt("请输入你的名字。");

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}



myButton.onclick = function() {
    setUserName();
}