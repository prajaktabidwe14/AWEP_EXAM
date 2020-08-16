function sumbit()
{
    let a = document.querySelector("#name").value;
    if(a == "")
    {
        alert("UserName Field is Empty!!");
    }
    else
    {
        let a1 = document.querySelector("#us");
        a1.innerHTML = "UserName :" + " " + a;
    }


    let b = document.querySelector("#pass").value;
    if(b == "")
    {
        alert("Password Field is Empty!!");
    }
    else
    {
        let b1 = document.querySelector("#ps");
        b1.innerHTML = "Password :" + " " + b;
    }

    document.querySelector("#name").value = "";
    document.querySelector("#pass").value = "";
}
