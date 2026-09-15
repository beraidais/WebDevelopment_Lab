 
passwElement1 = document.getElementById('generated-password-1')
passwElement2 = document.getElementById('generated-password-2')


const characters = [
  // Uppercase
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

  // Lowercase
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",

  // Numbers
  "0","1","2","3","4","5","6","7","8","9",

  // Symbols
  "~","`","!","@","#","$","%","^","&","*",
  "(",")","_","-","+","=",
  "{","[","}","]",
  "\\","|",
  ":",";",
  "\"","'",
  "<",">",",",".","?",
  "/"
]

function getRamdomCharacter() {

  randonIndex = Math.floor(Math.random() * characters.length)

  return characters[randonIndex]
}

function generatePassword(){
  password = ""

  for (let i = 0; i < 15; i++) {
    password += getRamdomCharacter()
  }

  return password
}

passwElement1.textContent = generatePassword()
passwElement2.textContent = generatePassword()


console.log(characters.length);



