import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-600 p-3">
        <p className="text-gray-800 font-bold font-sans text-center">
          Our website is still in-development, This domain
          techtack-technologies.com will redirect here.
        </p>
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
          <li className="text-white font-bold inline m-8 hover:text-gray-600">
            <Link href="https://oldversion-techtacktechnologies.netlify.app/">
              Old Version
            </Link>
          </li>
        </ul>
      </div>
      <div className="inner"></div>
      <div className="h-screen bg-gray-700">
        <div className="container-md m-auto p-9 pt-10">
          <div className="bg-gray-600 p-9 rounded w-11/12 m-auto">
            <h3 className="text-white font-sans text-3xl text-center font-bold">
              Most Advanced Platform For Developers From Developers.
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6">
        <p className="text-white font-mono text-center">
          &copy; Copyright 2020-2023 Powered By TeamLitho Techtack-Technologies.
          All right reserved.
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
    </main>
  );
}
