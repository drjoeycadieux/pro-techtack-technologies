import Link from "next/link";
import Head from "next/head";

export default function Page() {
  return (
    <div>
      <head>
        <title>Techtack-Technologies | Home</title>
      </head>
      <div>
        <div>
          <div className="bg-blue-600 p-3">
            <div className="container m-auto">
              <p className="text-white text-center font-bold font-sans text-1xl">
                Welcome to Techtack-Technologies
              </p>
            </div>
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
                <Link href="/home">Home</Link>
              </li>
              <li className="text-white font-bold inline m-8 hover:text-gray-600">
                <Link href="/found-an-issues">Found an Issues</Link>
              </li>
              <li className="text-white font-bold inline m-8 hover:text-gray-600">
                <Link href="/portal">Portal</Link>
              </li>
            </ul>
          </div>
          <div className="inner"></div>
          <div className="bg-red-600 p-3">
            <p className="text-white font-bold font-sans text-center">
              <span>
                <i className="bi bi-exclamation-triangle-fill"></i>
              </span>
              For Technical Issues, Please Send An Email To
              <a
                className="text-gray-500"
                href="mailto:joeycadieux161@gmail.com, joey@tech-center.com"
              >
                Redirect to mail
              </a>
            </p>
          </div>
          <div className="container m-auto p-9">
            <div className="bg-gray-700 w-64 m-auto p-6 rounded">
              <p className="text-white text-2xl font-bold font-sans text-center">
                Issues Reporting Form.
              </p>
            </div>
          </div>
          <div className="p-9 text-center">
            <iframe
              src="https://forms.gle/rYaQq9zP3M5eJi817"
              width={800}
              height={800}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6">
        <p className="text-white font-mono text-center">
          &copy; Copyright 2020-2023 Powered By TeamLitho.
          Techtack-Technologies. All right reserved.
        </p>
      </div>
      <div className="inner"></div>
      <div className="bg-gray-900 p-5">
        <p className="text-white p-2 font-bold font-sans text-center">
          Help us improve our website by sending feedback about your usage of
          our website.
          <a className="text-blue-600 hover:text-blue-400" href="#">
            Send FeedBack!
          </a>
        </p>
      </div>
    </div>
  );
}
