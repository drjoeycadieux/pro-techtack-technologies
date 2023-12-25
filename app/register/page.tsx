import Link from "next/link";
import Head from "next/head";

export default function Portal() {
  return (
    <div>
      <div>
        <head>
          <title>Techtack-Technologies | Portal</title>
        </head>
      </div>
      <div className="bg-gray-800 p-9">
        <ul className="block">
          <li className="inline m-5">
            <p className="text-white inline font-bold font-sans text-3xl">
              Techtack-Technologies
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
      <div className="bg-white container m-auto">
        <div className="bg-gray-800 p-9 pt-10 rounded">
          <h3 className="text-white font-bold font-sans text-center text-2xl">
            Please, contact us to be registered on our site.
          </h3>
          <p className="text-gray-600 text-center font-sans">
            Dont Have An Account
            <span className="text-white">Joey@tech-center.com</span>
          </p>
          <br />
          <div className="bg-gray-700 w-3/6 m-auto rounded p-5 text-center">
            <p className="text-gray-400 text-center font-sans font-bold">
              Dont have account No problem. Just let us know your email address
              and we will email your info that will allow you to get setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
