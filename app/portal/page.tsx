import Link from "next/link";

export default function Portal() {
  return (
    <div>
      <div className="bg-gray-800 p-9">
        <ul className="block">
          <li className="inline m-5">
            <p className="text-white inline font-bold font-sans text-3xl">
              Techtack-Technologies | Portal
            </p>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="/">Welcome</Link>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="/portal">Portal</Link>
          </li>
        </ul>
      </div>
      <br />
      {/* Sign in portal */}
      <div className="bg-white container m-auto">
        <div className="bg-gray-800 p-9 pt-10 rounded">
          <h3 className="text-white font-bold font-sans text-center text-2xl">
            Login To Your Account.
          </h3>
          <div className="p-5 text-center">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
            />
          </div>
          <div className="m-5 text-center">
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              id="password"
            />
          </div>
          <div className="p-5 text-center">
            <button className="login" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
