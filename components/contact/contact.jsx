export default function Contact() {
	const envoyerFormulaire = (e) => {
		e.preventDefault();
		alert("Formulaire envoyé, retrouvez-le dans votre console navigateur!");
		console.log("Nom:", e.target.name.value);
		console.log("Email:", e.target.email.value);
		console.log("Message:", e.target.message.value);
		e.target.reset();
	};

	return (
		<div>
			<h1>Contact</h1>
			<p>
				Bon, ici je dois mettre la page de contact, donc voici mon mail:
				<br />
				<a href="mailto:damien.carrere@protonmail.ch">
					damien.carrere@protonmail.ch
				</a>
				<br />
				Au moins comme ça vous pourrez me spammer, de toutes façons je
				ne lirais rien.
			</p>
			<form onSubmit={envoyerFormulaire}>
				<label>
					Nom :
					<input type="text" name="name" required />
				</label>
				<br />

				<label>
					Email :
					<input type="email" name="email" required />
				</label>
				<br />

				<label>
					Message :
					<textarea name="message" rows="5" required></textarea>
				</label>
				<br />

				<button type="submit">Envoyer</button>
			</form>
		</div>
	);
}
