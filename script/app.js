// const username = "Amanogawaa"; // Replace with your GitHub username

// // Fetch GitHub profile
// fetch(`https://api.github.com/users/${username}`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const profileDiv = document.getElementById("profile");
//     profileDiv.innerHTML = `
//     <img src="${data.avatar_url}" alt="${data.login}" width="100" height="100">
//     <div>
//     <h2>${data.name}</h2>
//     <p>${data.bio}</p>
//     <p><a href="${data.html_url}" target="_blank">View GitHub Profile</a></p>
//     </div>
//     `;
//   })
//   .catch((error) => console.error("Error fetching profile:", error));

// // Fetch GitHub repositories
// fetch(`https://api.github.com/users/${username}/repos`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const reposList = document.getElementById("repositories");
//     data.forEach((repo) => {
//       const listItem = document.createElement("li");
//       listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
//       reposList.appendChild(listItem);
//     });
//   })
//   .catch((error) => console.error("Error fetching repositories:", error));
