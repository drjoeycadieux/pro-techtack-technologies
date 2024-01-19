export default function Page() {
  return (
    <div>
      <head>
        <title>Techtack-Technologies | Internal Access</title>
      </head>
      <div className="bg-gray-800 p-6">
        <p className="text-white font-sans font-bold text-center text-3xl">
          Internal Access
        </p>
      </div>
      <h3>Login</h3>
      <br />
      <div>
        <div className="bg-blue-700 p-9 pt-10 w-96 m-auto rounded text-center">
          <input type="email" name="email" id="email" placeholder="User ID" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          />
          <br />
          <button
            className="p-3 bg-blue-600 hover:bg-blue-500 w-48 py-2 text-white font-bold rounded"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
