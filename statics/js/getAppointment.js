function getAppointment(){
    let month = Number(document.getElementById('month').value);
    let day = Number(document.getElementById('day').value);
    let time_slot = Number(document.getElementById('time_slot').value);
    let treffer = false;

    for (i=0; i< timeTable.length;i++){
        if(month==timeTable[i][0] && day ==timeTable[i][1]){
            if(time_slot<0){
                for(z=0;z<8;z++){
                    if(timeTable[i][2+z]==0){
                        treffer = true;
                    }
                }
            }
            else if(timeTable[i][2+time_slot]==0){
                treffer = true;
            }
        }
    }
    document.getElementById('output').innerHTML = "Terminsolt frei: " + treffer
    return treffer
}