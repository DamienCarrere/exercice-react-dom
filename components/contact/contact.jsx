import { useState, useEffect } from "react";
import "./contact.css";

export default function Contact() {
	const [nom, setNom] = useState("");
	const [email, setEmail] = useState("");
	const [telephone, setTelephone] = useState("");
	const [message, setMessage] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		console.log("Data mise à jour:", data);
	}, [data]);

	const envoyerFormulaire = (e) => {
		e.preventDefault();

		const nouveauForm = { nom, email, telephone, message };
		setData((ancienForm) => [...ancienForm, nouveauForm]);

		alert("Formulaire envoyé, retrouvez-le dans votre console navigateur!");
		// console.log(`Nom: ${nom}`);
		// console.log(`Email: ${email}`);
		// console.log(`Téléphone: ${telephone}`);
		// console.log(`Message: ${message}`);
		setNom("");
		setEmail("");
		setTelephone("");
		setMessage("");
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
					<input
						type="text"
						name="name"
						onChange={(e) => setNom(e.target.value)}
						required
					/>
				</label>
				<br />

				<label>
					Email :
					<input
						type="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<br />

				<label>
					Numéro de téléphone:
					<input
						type="tel"
						name="telephone"
						pattern="[0-9]{10}"
						placeholder="0123456789"
						onChange={(e) => setTelephone(e.target.value)}
						required
					/>
				</label>
				<br />

				<label>
					Message :
					<textarea
						name="message"
						rows="5"
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</label>
				<br />

				<button type="submit">Envoyer</button>
			</form>
		</div>
	);
}
