function freieSitze(anzahlSitze=5){
    let sitzNr = 0
    let erg = []
    
    for (reihe = 0;reihe <=3;reihe++){
        let sitz = 0;
        while (sitz <= 10- anzahlSitze+1){
            if (kinoTable2d[reihe][sitz]){
                freieSitze = 0
                sitzNr = (reihe+1) * 100 + sitz +1

                while(sitz <=10 && kinoTable2d[reihe][sitz]){
                    freieSitze ++
                    sitz++
                    if (freieSitze == anzahlSitze){
                        while(sitz <=10 && kinoTable2d[reihe][sitz]){
                            freieSitze ++
                            sitz++
                        }
                        erg.push(sitzNr + '-freiePlätze' + freieSitze + '<br>')
                    }
                }
            }
            else{
                sitz++
            }
        }
    }
    document.getElementById('output').innerHTML = erg;
    return erg

}