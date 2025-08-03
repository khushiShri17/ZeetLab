import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="text-zinc-300 px-6 py-12 border-t border-neutral-800 w-full">
        <div className="max-w-6xl mx-auto w-full flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 ml-28">
            <div>
             <div className=" -mt-6">
               <Link to="/" className="flex items-center gap-2">
            <img
              src="/ZeetLab_Logo.jpg"
              alt="ZeetLab Logo"
              className="h-10 md:h-14 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
              ZeetLab
            </span>
          </Link>
             </div>
              <p className="text-sm text-gray-400 mb-4">
                Empowering developers to become coding masters through practice,
                challenges, and community.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/srvjha"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/J_srv001"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saurav-jha-a30362196/"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/problemset"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Challenges
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contest"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contest
                  </Link>
                </li>
                <li>
                  <Link
                    to="/discuss"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Discussion Forum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sheets"
                    className="hover:text-blue-400 transition-colors"
                  >
                   Sheets
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/problemset"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/problemset"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/problemset"
                    className="hover:text-blue-400 transition-colors"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ZeetLab. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/"
                className="text-sm text-gray-400 hover:text-blue-400"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-400 hover:text-blue-400"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-400 hover:text-blue-400"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
