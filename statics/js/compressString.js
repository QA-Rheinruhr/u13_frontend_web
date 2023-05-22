function compressString(){

    for(i = 0; i< stringUncompressed.length; i++){
        let anzahl = 1;

        while (stringUncompressed[i] == stringUncompressed[i+1] && i < stringUncompressed.length-2 ){
            anzahl = anzahl +1;
            i = i +1;
        }
        
        if (anzahl >= 5){
            StringCompressed.push("%");
            StringCompressed.push(anzahl);
            StringCompressed.push(stringUncompressed[i]);
        }
        else {
            for(j=0; j<anzahl; j++){
                StringCompressed.push(stringUncompressed[i])
            }
        }
        
    }


    document.getElementById('output_compressedString').innerHTML = StringCompressed;
    return true
}