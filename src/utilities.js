export const drawRect = (detections, ctx) =>{
  // Loop through each prediction

  let empPresent = false;
  let cpPresent = false;

  const calculateCount = (arr, query) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === query){
          count++;
          continue;
      };
      if(Array.isArray(arr[i])){
        count += calculateCount(arr[i], query);
      }
    };
    return count;
  };
  
  detections.forEach(prediction => {

    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox']; 
    const text = prediction['class']; 


    if (text === 'person' || text === 'cell phone' ){

      // Set styling
      const color = Math.floor(Math.random()*16777215).toString(16);
      ctx.strokeStyle = '#' + color
      ctx.font = '18px Arial';

      // Draw rectangles and text
      ctx.beginPath();   
      ctx.fillStyle = '#' + color
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height); 
      ctx.stroke();

      if(text === 'person'){
        empPresent = true
      }

      if(text === 'cell phone'){
        cpPresent = true
      }
    }

  });

  if(!empPresent){
    document.getElementById('personText').innerHTML = 'Employee is not present'
  }else{
    document.getElementById('personText').innerHTML = 'Employee is present'
  }
  // if(!cpPresent){
  //   document.getElementById('personText').innerHTML = 'Employee is not with a phone'
  // }else{
  //   document.getElementById('personText').innerHTML = 'Employee is with a phone'
  // }
  if(cpPresent){
    document.getElementById('personText').innerHTML = 'Employee is with a phone'
  }

  // if(calculateCount(detections, 'person') !== 0){
  //   document.getElementById('personText').innerHTML = 'Employee is present'
  // }
}
