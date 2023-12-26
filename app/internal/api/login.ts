// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Replace this with your actual authentication logic
    // For demonstration purposes, just check if the email and password are not empty
    if (email && password) {
      // Authentication successful
      res.status(200).json({ message: "Login successful" });
    } else {
      // Authentication failed
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
