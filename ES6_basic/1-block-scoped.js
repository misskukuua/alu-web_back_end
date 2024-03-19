export default function taskBlock(trueOrFalse) {
    let task = false; // Use let instead of var
    let task2 = true; // Use let instead of var
  
    if (trueOrFalse) {
      task = true; // Update the existing variable, don't redeclare
      task2 = false; // Update the existing variable, don't redeclare
    }
  
    return [task, task2];
  }
  