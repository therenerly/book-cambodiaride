function book() {
    let number = "+85581859000";

    let datetime = document.getElementById('datetime').value;
    let name = document.getElementById('name').value;
    let pickup = document.getElementById('pickup').value;
    let tour = document.getElementById('tour').value;
    let pax = document.getElementById('pax').value;
    let vehicle = document.getElementById('vehicle').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text="
        + "Date & time : " + datetime + "%0a"
        + "Your name : " + name + "%0a"
        + "Pick up location : " + pickup + "%0a"
        + "Tour type : " + tour + "%0a"
        + "No of Pax : " + pax + "%0a"
        + "Car type : " + vehicle + "%0a"
        + "Message : " + message + "%0a%0a";

    window.open(url, '_blank').focus();
}