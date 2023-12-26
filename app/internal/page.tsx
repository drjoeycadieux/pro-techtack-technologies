import Link from "next/link";

export default function Internal() {
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
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Your Internal Password"
              name="internal-password"
              id="internal-password"
            />
          </div>
          <button
            className="py-2 p-2 w-24 bg-blue-700 rounded font-bold text-white hover:bg-blue-800"
            type="submit"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
