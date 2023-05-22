function bubblesort(){
    let tmp = '';
    let output = '';
    for(let p = 0; p<= array.length-2;p++){
      for(let i = 0;i <= array.length-2-p; i++){
        output = output + array + "<br>"
        if(array[i] > array[i+1]){
          tmp = array[i+1];
          array[i+1] = array[i];
          array[i] = tmp;
        }
      }
    }
    document.getElementById('outputArray').innerHTML = "Sorted Array: " +array
    document.getElementById('outputIncrement').innerHTML = output
    return true
  }

function pushArray(){
    array.push(document.getElementById('input').value);
    document.getElementById('output').innerHTML = array;
}