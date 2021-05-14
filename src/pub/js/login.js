const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const url = new URL(window.location.href);
const isRegis = url.searchParams.get('r');
if (isRegis == "true") {
	signUpButton.click();
}
