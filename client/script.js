// url för hemsidan vi ska hämta users ifrån
url = "http://localhost:3000/users";

// Skapa upp ett table element som ska vara en tabell som users ska visas i
const user_table = document.createElement("table");

// Ge tabellen ett id
user_table.setAttribute("id", "table");

// Lägg in tabellen i body i html filen
document.body.appendChild(user_table);

// Fetch förfrågan
async function getUsers(url) {
  const response = await fetch(url);
  const users = await response.json();
  console.log(users);
  if (response.status == 200) {
    console.log("The request was successful!");
  } else {
    console.log("Something went wrong!");
  }
  displayUsers(users);
}

// Testa så att vi får ut en korrekt utskrift genom att anropa funktionen
getUsers(url);

// Funktion för att skapa upp tabell headers och lägga in users data i tabellen
function displayUsers(users) {
  let table_data = `<tr>
  <th>Id</th>
  <th>First name</th>
  <th>Last name</th>
  <th>Username</th>
  <th>Color</th>
  </tr>`;

  // Loopa över listan med userobjekt och hämta värden för varje attribut och sätt rätt färg för varje user
  for (let row of users) {
    table_data += `<tr>
    <td>${row.id}</td>
    <td>${row.firstName}</td>
    <td>${row.lastName}</td>
    <td>${row.username}</td>
    <td class = "color" style = background-color:${row.color}>${row.color}</td>
    </tr>`;
  }

  // Skriv ut alla users i tabellen i DOM-trädet
  document.getElementById("table").innerHTML = table_data;
}
