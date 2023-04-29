function generateCard() {
	const sender = document.getElementById("sender").value;
	const receiver = document.getElementById("receiver").value;
	const message = document.getElementById("message").value;

	if (!sender || !receiver || !message) {
		alert("Please fill in all fields");
		return;
	}

	const card = `
		<div>
			<h2>${receiver},</h2>
			<p>${message}</p>
			<p>Love,</p>
			<p>${sender}</p>
		</div>
	`;

	document.getElementById("card").innerHTML = card;
}
