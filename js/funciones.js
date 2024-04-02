function capturar_datos(){
    var m_esfera=parseFloat(document.getElementById('m_esfera').value);
    var m_barra=parseFloat(document.getElementById('m_barra').value);
    var longitud=parseFloat(document.getElementById('longitud').value);
    var radio=parseFloat(document.getElementById('radio').value);
    var theta1=parseFloat(document.getElementById('theta1').value);
    var theta2=parseFloat(document.getElementById('theta2').value);
    var k=parseFloat(document.getElementById('k').value);
   


    var regex = /^[0-9]+$/;
    
    //validaciones
    if (
        m_esfera === "" ||
        m_barra === "" ||
        longitud === "" ||
        radio === "" ||
        theta1 === "" ||
        theta2 === "" ||
        k === ""
    ) {
        alert('Todos los campos deben ser completados');
    } else if (
        isNaN(m_esfera) || isNaN(m_barra) || isNaN(longitud) ||
        isNaN(radio) || isNaN(theta1) || isNaN(theta2) || isNaN(k)
    ) {
        alert('Todos los campos deben contener solo números o no estar vacios');
    } else if (
        m_esfera <= 0 || m_barra <= 0 || longitud <= 0 ||
        radio <= 0 || theta1 <= 0 || theta2 <= 0 || k <= 0
    ) {
        alert('Los números deben ser mayores a cero');
    } else {
        var inercia=((1/12)*m_barra*(Math.pow(longitud,2))) + 2*(((2/5)*m_esfera*(Math.pow(longitud/2,2)))+
        (m_esfera*(Math.pow(((longitud/2)+radio),2))))
       var w=Math.sqrt(k/inercia)
       var fhi=2*Math.PI- Math.abs(Math.atan(theta1/(-w*theta2)))
       var A=theta2/(Math.cos(fhi))
       console.log(w)
 
       document.getElementById('inercia').value = inercia.toFixed(3);
       document.getElementById('Velocidad').value = w.toFixed(3);
       document.getElementById('phi').value = fhi.toFixed(3);
       document.getElementById('A').value = A.toFixed(3);

       document.getElementById('ecu2').value = '\u03B8 = '+A.toFixed(2)+'*cos('+w.toFixed(2)+'*t + '+fhi.toFixed(2)+')';
       document.getElementById('ecu1').value = '\u03B8 = A*cos(w*t + \u03C6)'
       document.getElementById('ecu3').value = 'θ̇ = -'+A.toFixed(2)+'*'+w.toFixed(2)+'*sen('+w.toFixed(2)+'*t + '+fhi.toFixed(2)+')';

       //"cos(" + fhi + ")";
       alert('Calculos realizados')
    

    }

}
function limpiar_datos() {
    // Limpiar campos del primer formulario
    document.getElementById('m_esfera').value = "";
    document.getElementById('m_barra').value = "";
    document.getElementById('longitud').value = "";
    document.getElementById('radio').value = "";
    document.getElementById('theta1').value = "";
    document.getElementById('theta2').value = "";
    document.getElementById('k').value = "";

    // Limpiar campos de resultados y ecuaciones
    document.getElementById('inercia').value = "";
    document.getElementById('Velocidad').value = "";
    document.getElementById('phi').value = "";
    document.getElementById('A').value = "";

    document.getElementById('ecu1').value = "";
    document.getElementById('ecu2').value = "";
    document.getElementById('ecu3').value = "";
    
    // Opcional: Puedes mostrar un mensaje de alerta después de limpiar los campos
    alert('Datos limpiados');
    
}

