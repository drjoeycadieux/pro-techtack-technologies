import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";

export default function Internal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        console.log("Login successful");

        // Redirect to the dashboard page
        router.push("/dashboard");
      } else {
        // Handle failed login
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div>
        <head>
          <title>Techtack-Technologies | Internal Access</title>
        </head>
      </div>
      <div className="container p-9">
        <p className="text-center underline p-5 text-gray-800 font-bold text-5xl font-sans">
          Internal Access
        </p>
      </div>
      <div className="bg-white text-center p-9 pt-10">
        <div className="p-9 w-96 m-auto rounded bg-gradient-to-r from-green-400 via-cyan-900 to-blue-800">
          <div>
            <input
              type="email"
              placeholder="Your Internal Email"
              name="internal-email"
              id="internal-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Your Internal Password"
              name="internal-password"
              id="internal-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="py-2 p-2 w-24 bg-blue-700 rounded font-bold text-white hover:bg-blue-800"
            type="submit"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
