import { useState } from "react";

export default function LoginForm() {
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = {
			username: (form.elements.namedItem("username") as HTMLInputElement).value,
			password: (form.elements.namedItem("password") as HTMLInputElement).value,
		};

		const res = await fetch("https://play.purestyle.se/api/login", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		});

		if (res.ok) {
			window.location.href = "/dashboard";
		} else {
			setError("Invalid username or password");
		}
		console.log("login...", res);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="username" placeholder="Username" />
			<input type="password" name="password" placeholder="Password" />
			<button type="submit">Login</button>
			{error && <p className="text-red-500">{error}</p>}
		</form>
	);
}
