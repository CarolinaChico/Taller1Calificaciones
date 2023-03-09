function CalificacionFinal(){
    
    let Cal1= parseInt(document.getElementById("C1").value);
    let Cal2= parseInt(document.getElementById("C2").value);
    let Cal3= parseInt(document.getElementById("C3").value);
    let ExamFinal= parseInt(document.getElementById("Ef").value);
    let TrabFinal= parseInt(document.getElementById("Tf").value);
  

    let x=(Cal1+Cal2+Cal3)/3;
    let Total=(x*0.55)+(ExamFinal*0.3)+(TrabFinal*0.15);

    let resultado= document.getElementById("resultado");
    resultado.value= Total;
    return Total;
}
