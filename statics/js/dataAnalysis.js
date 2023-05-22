function analyseData(){
    let anzahl_u30 = 0;
    let gesamt = 0;
    let index = 0;
    while (index < alter.length){
        gesamt = gesamt + alter[index];
        if (alter[index]<30){
            anzahl_u30 = anzahl_u30 + 1;
        }
        index = index +1;
    }
    let durchschnittsAlter = gesamt / alter.length;
    let anteil_prozentual = (anzahl_u30*100)/alter.length;
    document.getElementById('output_durchschnittsAlter').innerHTML = "durchschnittsAlter: " + durchschnittsAlter;
    document.getElementById('output_anteil_prozentual').innerHTML = "anteil_prozentual: " + anteil_prozentual;
    return true
}