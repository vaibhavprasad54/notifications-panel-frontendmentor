console.log("I am connected!");

function markAllRead () {
    let element = document.getElementById('new');
    let element2 = document.getElementById('new2');
    let element3 = document.getElementById('new3');
    let checkIcon = document.getElementById('checkIcon');
    let count = document.getElementById('nCount');

    element.classList.remove("active-notification");
    element2.classList.remove("active-notification");
    element3.classList.remove("active-notification");
    checkIcon.style.display="block";
    count.innerHTML = "0";
}