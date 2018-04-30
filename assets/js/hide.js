function hideextras() {
    var x = document.getElementById("extraslbl");
        x.style.display = "none";
    var x = document.getElementById("certificadoslbl");
    x.style.display = "block";

    var x = document.getElementById("auxcer");
    x.style.display = "none";
    var x = document.getElementById("auxext");
    x.style.display = "block";
    var x = document.getElementById("content2");
    x.style.display = "none";
    var x = document.getElementById("content");
    x.style.display = "block";
}

function hidecertificados() {
    var x = document.getElementById("certificadoslbl");
        x.style.display = "none";    
    var x = document.getElementById("extraslbl");
    x.style.display = "block";

    var x = document.getElementById("auxcer");
    x.style.display = "block";
    var x = document.getElementById("auxext");
    x.style.display = "none";

    var x = document.getElementById("content");
    x.style.display = "none";
    var x = document.getElementById("content2");
    x.style.display = "block";

}

function hide()
{
    var x = document.getElementById("auxcer");
    x.style.display = "none";
    var x = document.getElementById("auxext");
    x.style.display = "none";
    var x = document.getElementById("content2");
    x.style.display = "none";

}