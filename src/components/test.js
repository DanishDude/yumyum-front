const dataText = [
  "Discover new flavors",
  "Learn new tricks in the kitchen",
  "What can I cook in my fridge",
  "Share your kitchen serets"];

const speech = "Hello David";

const saySpeech = text => {
  
}

const dataText = [
  "Discover new flavors",
  "Learn new tricks in the kitchen",
  "What can I cook in my fridge",
  "Share your kitchen serets"];

const typeWriter = textArray => {
  let typeWriterOutput = '';
  
  textArray.forEach(text => {
    const phrase = text.split('')
    console.log(phrase);
    
    for (let i=0; i > phrase.length; i++) {
      console.log(phrase[i]);
      console.log(phrase.length);
      
      setTimeout(
        typeWriterOutput += phrase[i]
      , 7)
    };
  });

  return typeWriterOutput
}


/* const typeWriter = textArray => {
  let typeWriterOutput = '';
  
  textArray.forEach(text => {
    const phrase = text.split('')
    
    for (let i=0; i < phrase.length; i++) {
      setTimeout(() => {
        typeWriterOutput += phrase[i];
      }, 700)
    };
  });

  return typeWriterOutput
}

typeWriter(dataText); */