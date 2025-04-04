console.log("Hello Learning Node JS");

//CLI Input With Process.argv

const name = process.argv[2];
//Multiple Inputs - const age = process.argv[3]

if(!name){
    console.log("Plase provide a name");
}
else{
    console.log(`Hi ${name},`, "Welcome to Backend World");
}

console.log("Node path:");
console.log(process.argv[0]);

console.log("Script path:");
console.log(process.argv[1]);

console.log("User input:");
console.log(process.argv[2]);

//Learning global Varaibles

console.log("Current File Path", __filename);
console.log("Current folder path:", __dirname);
console.log("Terminal input:", process.argv);

//Playing with node
const Name = "TNC"
const Goal = "Become a Full Stack Developer"
const Learning = "Node JS"

console.log("Name: ", name);
console.log("Goal: ", Goal);
console.log("Current Learning: ", Learning);
console.log("Learning Node is fun!");

