import Link from "next/link";

export default function Page() {
  return (
    <div>
      <head>
        <title>Techtack-Technologies | Found an Issues</title>
      </head>
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
          <div className="container m-auto">
            <p className="text-white font-bold font-sans text-center">
              For Technical Issues, Please Send An Email To
              <a href="#">Redirect</a>
            </p>
          </div>
        </div>
        <div className="container-sm m-auto p-9">
          <h1 className="text-white text-center text-1xl font-sans font-bold bg-gray-700 p-7 w-11/12 m-auto rounded">
            Issues Reporting Form.
          </h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeeEwYeOKxT60uaECMPWvNB6Ub62lFhraw0JfTVWFMDx3qXJg/viewform?embedded=true"
            width="640"
            height="800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Chargement en cours…
          </iframe>
        </div>
      </div>
    </div>
  );
}
