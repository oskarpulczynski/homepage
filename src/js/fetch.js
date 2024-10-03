const username = "oskarpulczynski";
const repositoriesContainer = document.querySelector(".repositories--js");

fetch(`https://api.github.com/users/${username}/repos`)
	.then(response => response.json())
	.then(response => {
		for (let repository of response) {
			const { name, html_url } = repository;
			const element = `<li><a href="${html_url}">${name}</a></li>`;
			repositoriesContainer.insertAdjacentHTML("beforeend", element);
		}
	})
	.catch(e => console.log(e));
