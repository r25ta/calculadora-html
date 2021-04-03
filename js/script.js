var param1, param2, operacao, resultado;

function exibeValor(valor){
  
    
  var display = document.getElementById("display").value;
  
  if(valor=="/" || valor=="*" || valor=="-" || valor=="+"){
    if(display==null || display==""){  
      alert("Informar valor numerico");
      
    }else if(param1==null){
      if(resultado!=null){
        document.getElementById("display").value="";    
      }else{
        param1 = display;
        operacao = valor;
        document.getElementById("display").value = display+valor;
      }
    }
  }else if(valor=="clr"){
    document.getElementById("display").value="";
    param1=null;
    param2=null;
    operacao=null;
    
  }else if(valor=="="){
    var buscar = /[+*-/]/gi;
    var idx = display.search(buscar);
    
    param2 = display.substr(idx - (display.length-1));
    
    
    if(operacao=="/"){
      resultado = parseInt(param1) / parseInt(param2);
      
    }else if(operacao=="*"){
      resultado = parseInt(param1) * parseInt(param2);
      
    }else if (operacao=="+"){
      resultado = parseInt(param1) + parseInt(param2);
      
    }else if (operacao=="-"){
      resultado = parseInt(param1) - parseInt(param2);
      
    }
    
    document.getElementById("display").value = display+valor+resultado;
    param1=null;
    param2=null;
    operacao=null;
  }else{
    console.log("display " + display);
    if(resultado!=null){
      document.getElementById("display").value=valor;
      resultado=null;
      
    }else{
      document.getElementById("display").value = display + valor;  
    }
    
  }
}

