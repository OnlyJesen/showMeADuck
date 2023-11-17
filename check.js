function checkPassword() {
    if(document.getElementById('passwordInput').value == "quack") {
        document.getElementById('passwordContainer').remove()
        document.getElementById('secretImage').src = "https://i.pinimg.com/736x/54/0b/af/540bafd48fa53c29d9a0f8940df12640.jpg"
        document.getElementById('secretImage').style.display = "block"
        document.getElementById('secretSubtitle').innerText = "Draw me like one of your french ducks"
    }
}