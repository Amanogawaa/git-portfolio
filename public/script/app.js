const userName = "Amanogawaa";

//to make template more cleaner
const iconsTech = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    alt: "Angular",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg",
    alt: "VS Code",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original-wordmark.svg",
    alt: "Godot",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg",
    alt: "Unity",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    alt: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    alt: "PHP",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python",
  },
];

const techUse = document.querySelector(".icon-container");

iconsTech.forEach((icon) => {
  const image = document.createElement("img");
  image.src = icon.src;
  image.alt = icon.alt;
  techUse.appendChild(image);
});

// gets data of user and display it
fetch(`https://api.github.com/users/${userName}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector(".pfpimage").src = data.avatar_url;
    document.querySelector(".username").textContent = data.login;
    document.querySelector(".nickname").textContent = data.name;
    document.querySelector(".bio").textContent = data.bio;
    document.querySelector(".followers").textContent =
      data.followers + " followers";
    document.querySelector(".following").textContent =
      data.following + " following";
    document.querySelector(".location").textContent = data.location;
  })
  .catch((error) => console.error("Error fetching profile:", error));

// user repositories
fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const reposList = document.getElementById("repositories");
    data.forEach((repo) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      reposList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching repositories:", error));
