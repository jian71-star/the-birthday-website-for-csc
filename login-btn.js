document.getElementById("enter-botton").addEventListener("click",() =>{
    const input_passwd = document.getElementById("passwd").value;
    const corret_passwd = "070509";

    if(input_passwd == corret_passwd)
    {
        document.getElementById("login-screen").classList.remove("active") //隱藏login page

        document.getElementById("animation-screen").classList.add("active")//顯示animation page
    }
})