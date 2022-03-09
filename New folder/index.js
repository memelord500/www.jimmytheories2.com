var password = "max123"

function passcheck() {

if(document.getElementById('pass1').value != password) {
alert('wrong password, try agian');
return false;
}
if(document.getElementById('pass1').value == password) {
    alert('correct password. click ok to enter webpage');
}
}

