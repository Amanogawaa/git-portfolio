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
const repositoryContainer = document.getElementById("repository-container");

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
fetch(`https://api.github.com/users/${userName}/repos`)
  .then((response) => response.json())
  .then((data) => {
    const maxCharacter = 100;

    data.forEach((repository) => {
      const repoList = document.createElement("li");
      repoList.className = "border border-slate-400 rounded-md p-3 list-none";
      repoList.innerHTML = `
         <div class="inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-book-marked w-4 me-1"
                  >
                    <path d="M10 2v8l3-3 3 3V2" />
                    <path
                      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                    />
                    <span class="text-sm font-medium text-blue-500">
                    ${repository.name}
                    </span>
                    <span
                      class="ms-1 text-sm px-2 py-.5 badge rounded-full bg-[#2a313c] border border-[#6b6c6e]"
                    >
                     ${repository.private ? "Private" : "Public"}
                    </span>
                  </svg>
                </div>
                <p class="block font-thin text-sm text-wrap my-2">
                  ${
                    truncateDescription(repository.description, maxCharacter) ||
                    ""
                  }                
                </p>
                <div class="block">
                  <span
                    class="bg-white text-xs font-medium me-1 px-2 py-.5 rounded-full"
                  >
                  </span>
                  <span class="font-thin text-xs">${
                    repository.language || ""
                  }</span>
                </div>
      `;

      repositoryContainer.appendChild(repoList);
    });
  })
  .catch((error) => console.error("Error fetching repositories:", error));

function truncateDescription(text, maxLength) {
  return text && text.length > maxLength
    ? `${text.substring(0, maxLength)} ...`
    : text;
}
