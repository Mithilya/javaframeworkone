function nameGenerator() {

    const names = ['Ethan', 'Ava', 'Jackson', 'Harry', 'Tyler','Mary','Simone','Emilia','Ruggero','Maxi'];
    return {
   
        
      get name() {
        
        return names[Math.floor(Math.random() * names.length)];
    },
  }
}

