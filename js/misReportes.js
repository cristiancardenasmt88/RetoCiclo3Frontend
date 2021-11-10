function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://144.22.57.193:8080/api/Reservation/report-status",
        //url: "http://localhost:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
       myTable+="<th>Completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>Canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}
function traerReporteDate(){

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    
        $.ajax({
            url:"http://144.22.57.193:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            //url:"http://localhost:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaDate(respuesta);
            }
        });
    }
    function pintarRespuestaDate(respuesta){

        let myTable="<table>";
        myTable+="<tr>";
        myTable+="<td>Fecha Devolución</td>";
        myTable+="<td>Fecha Inicio</td>";
        myTable+="<td>Estado</td>";
    "</tr>";
        for(i=0;i<respuesta.length;i++){
        myTable+="<th>Total</th>";
            myTable+="<td>"+cnvFecha(respuesta[i].devolutionDate)+"</td>";
            myTable+="<td>"+cnvFecha(respuesta[i].startDate)+"</td>";
            myTable+="<td>"+respuesta[i].status+"</td>";
          
          
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoDate").html(myTable);
    }
    function cnvFecha(fecha){
        return fecha.substring(0,10);
    }

    function traerReporteClientes(){
        $.ajax({
            url:"http://144.22.57.193:8080/api/Reservation/report-clients",
            //url: "http://localhost:8080/api/Reservation/report-clients",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaClientes(respuesta);
            }
        });
    }
    function pintarRespuestaClientes(respuesta){

        let myTable="<table>";
        myTable+="<tr>";
        myTable+="<td></td>";
        myTable+="<td>Total</td>";
        myTable+="<td>Nombre</td>";
        myTable+="<td>Email</td>";
        myTable+="<td>Años</td>";
    "</tr>";
        for(i=0;i<respuesta.length;i++){
        myTable+="<th>Total</th>";
            myTable+="<td>"+respuesta[i].total+"</td>";
            myTable+="<td>"+respuesta[i].client.name+"</td>";
            myTable+="<td>"+respuesta[i].client.email+"</td>";
            myTable+="<td>"+respuesta[i].client.age+"</td>";
          
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoClientes").html(myTable);
    }