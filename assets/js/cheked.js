function funcion()
{
   
    if(document.getElementById("demo-priority-normal").checked)
    {
        document.getElementById("boton").href="forma-pago-visa.html";
    
    }
    else if(document.getElementById("demo-priority-low").checked)
    {
        document.getElementById("boton").href="file:///C:/Users/Leslie%20Alarrazabal/Desktop/BARIX/template_1/ELBARO/forma-pago-paypal.html#";
    
    }
    else{
        document.getElementById("boton").href="#"
    }
}