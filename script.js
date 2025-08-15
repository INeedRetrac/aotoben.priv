function checkCode() {
    const code = document.getElementById("inviteCode").value.trim();
    if(code === "TEST") {
        document.getElementById("inviteBox").style.display = "none";
        document.getElementById("forum").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block";
    }
}
