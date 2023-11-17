function checkPassword() {
    if(document.getElementById('passwordInput').value == "quack") {
        document.getElementById('passwordContainer').remove()
        document.getElementById('secretImage').src = "https://i.pinimg.com/736x/54/0b/af/540bafd48fa53c29d9a0f8940df12640.jpg"
        document.getElementById('secretImage').style.display = "block"
        document.getElementById('secretSubtitle').innerText = "Draw me like one of your french ducks"
    } else {
        document.getElementById('passwordInput').style.borderColor = 'rgba(255, 0, 0, 1)';
        document.getElementById('passwordInput').style.color = 'rgba(255, 0, 0, 1)';
        setTimeout(() => {
            document.getElementById('passwordInput').style.borderColor = 'rgba(255, 0, 0, 0)';
            document.getElementById('passwordInput').style.color = 'rgba(0, 0, 0, 1)';
        }, 1000)
    }
}