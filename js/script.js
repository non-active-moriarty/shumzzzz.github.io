

function theme() {
	let now = new Date();
	hours = now.getSeconds();
	if (hours < 30) {
		let navbar = document.getElementById('navbar');
		navbar.classList.remove('navbar-light');
		navbar.classList.add('navbar-dark-bg');
		let nav = document.getElementById('nav');
		navbar.classList.remove('light');
		navbar.classList.add('dark');
		let collapseBtn = document.getElementById('navbar-toggler');
		collapseBtn.classList.remove('navbar-light');
		collapseBtn.classList.add('navbar-dark');
	}
}	
theme()