
radio = [
    {nombre: 'Francisca Rojas', rut: '9.878.782-1', prevision: 'Fonasa', hora: '11:00', especialista: 'Ignacio Schulz'},
    {nombre: 'Pamela Estrada', rut: '15.345.241-3', prevision: 'Isapre', hora: '11:30', especialista: 'Federico Subercaseaux'},
    {nombre: 'Armando Luna', rut: '16.445.345-9', prevision: 'Isapre',hora: '15:00', especialista: 'Fernando Wurthz'},
    {nombre: 'Manuel Godoy', rut: '17.666.419-0', prevision: 'Fonasa', hora: '15:30', especialista: 'Ana Maria Godoy'},
    {nombre: 'Ramón Ulloa', rut: '14.989.389-K', prevision: 'Fonasa', hora: '16:00', especialista: 'Patricia Suazo'},
]
trauma =[
	{nombre: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA', hora:'8:00', especialidad:'MARIA PAZ ALTUZARRA'},
	{nombre: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE', hora:' 10:00', especialidad:'RAUL ARAYA'},
	{nombre: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE', hora:' 10:30', especialidad:'MARIA ARRIAGADA'},
	{nombre: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE', hora:' 11:00', especialidad:'ALEJANDRO BADILLA'},
	{nombre: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA', hora:' 11:30', especialidad:'CECILIA BUDNIK'},
	{nombre: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE', hora:' 12:00', especialidad:'ARTURO CAVAGNARO'},
	{nombre: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE', hora:' 12:30', especialidad:'ANDRES KANACRI'},
]
dental = [
    {nombre: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE', hora:'8:30', especialidad:'ANDREA ZUÑIGA'},
    {nombre: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE', hora:'11:00', especialidad:'MARIA PIA ZAÑARTU'},
    {nombre: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA', hora:'11:30', especialidad:'SCARLETT WITTING'},
    {nombre: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA', hora:'13:00', especialidad:'FRANCISCO VON TEUBER'},
    {nombre: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA', hora:'13:30', especialidad:'EDUARDO VIÑUELA'},
    {nombre: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE', hora:'14:00', especialidad:'RAQUEL VILLASECA'},
] 

    //SEGUNDA PARTE//
//ejercicio 1
    trauma.push (
        {nombre:'RENE POBLETE', rut: '13.123.329-7', especialidad: 'ANA GELLONA', hora: '09:00', prevision: 'ISAPRE'},
        {nombre:'MARIA SOLAR', rut: '12.221.451-K', especialidad: 'RAMIRO ANDRADE', hora: '09:30', prevision: 'FONASA'},
        {nombre:'RAUL LOYOLA', rut: '10.112.348-3', especialidad: 'CARMEN ISLA', hora: '10:00', prevision: 'ISAPRE'},
        {nombre:'ANTONIO LARENAS', rut: '13.453.234-1', especialidad: 'PABLO LAOYZA', hora: '10:30', prevision: 'ISAPRE'},
        {nombre:'MATIAS ARAVENA', rut: '14.345.656-6', especialidad: 'SUSANA POBLETE', hora: '12:00', prevision: 'ISAPRE'},
    );

// document.write('Pacientes totales Traumatologia '+ trauma.length); 

//ejercicio 2
     radio.pop(); //quita el último elemento de array
    radio.shift(); //quita primer elemento de array
    //document.write('Pacientes totales Radiologia '+ radio[0].nombre + ' ' + radio[radio.length - 1].nombre);
 
//ejercicio 3
     dental.forEach(function(dental){
        document.write('Paciente Dental: ' + dental.nombre + '  -  ' + dental.rut + '  -  ' + dental.especialidad + '  -  ' + dental.hora + '  -  ' + dental.prevision + '<br>')
    }
    ) 
document.write('<hr>');
//ejercicio 4
    dental.forEach(function(dental){
        document.write(dental.nombre + '<br>');
    })
    trauma.forEach(function(trauma){
        document.write(trauma.nombre + '<br>');
    })
    radio.forEach(function(radio){
        document.write(radio.nombre + '<br>');
    }) 
    document.write('<hr>');
   /*  document.write('Atenciones para hoy: <br><br>'+'Radiología: ' + radio.length + ' pacientes <br>' + 'Traumatología: ' + trauma.length + ' pacientes <br>' + 'Dental: ' + dental.length + ' pacientes <hr><br>') */

//ejercicio 5
   dental.forEach(function(dental){
    if(dental.prevision == 'ISAPRE'){
        dental.prevision = 'FONASA';
    }
 else{dental.prevision = 'ISAPRE';}
 document.write(dental.prevision + ' / ' + dental.rut + '<br>');
 }) 
 
