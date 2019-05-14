var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

//console.log(mary.phoneNumber);

//Displays people from the list
function printPerson(person){
  console.log(person.firstName + " " + person.lastName);
}

//printPerson(contacts[0]);
//printPerson(contacts[1]);

//Lists everyone in contact list
function list(){
  var contactsLength = contacts.length;
  for (var i=0; i < contactsLength; i++) {
    printPerson(contacts[i]);
  }
}

//finding someone special
function search(lastName){
  var contactsLength = contacts.length;
  for (var i=0; i < contactsLength; i++) {
    if (lastName == lastName){
      printPerson(contacts[i]);
    } else {
      console.log("Sorry no name has been found");
    };
  };
}

function add(firstName, lastName, email, phoneNumber){
  contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber
  }
};

add("Steve", "Jobs", "sbjobs@example.com", "(555) 555-4949");
search("Jones");
list();
