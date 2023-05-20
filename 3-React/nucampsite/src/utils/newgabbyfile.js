console.log("Hey Hunter");
function greetIfHey(name, message) {
        if (message.toLowerCase() === 'hey') {
        return `Hello, ${name}!`;
        } else {
        return "Please say 'hey' first.";
        }
    }
    
    // Example usage
    const userInput = prompt("Enter your message:");
    const result = greetIfHey("Christopher Hunter", userInput);
    console.log(result);
    