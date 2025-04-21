export default function Footer() {
  return (
   <footer
        className="py-8 border-t border-gray-200"
        style={{ backgroundColor: "rgb(27, 34, 80)" }}
      >
        <div className="container mx-auto px-4">
          <ul className="grid md:grid-cols-4 gap-8">
            <li className="">
              <h2 className="font-medium text-lg mb-4 text-white">Company</h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.calm.com/blog/about"
                    target=""
                    className="text-gray-300 hover:text-[#3a97d3]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/careers"
                    target=""
                    className="text-gray-300 hover:text-[#3a97d3]"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/blog/press"
                    target=""
                    className="text-gray-300 hover:text-[#3a97d3]"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/mindfulness-tips"
                    target=""
                    className="text-gray-300 hover:text-[#3a97d3]"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/blog/tamara-levitt"
                    target=""
                    className="text-gray-300 hover:text-[#3a97d3]"
                  >
                    Meet our Instructor
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/science"
                    target=""
                    className="text-gray-300 hover:text-[#3a97d3]"
                  >
                    Calm Science
                  </a>
                </li>
              </ul>
            </li>
            <li className="sc-c9ff3d55-1 btHgWW">
              <h2 className="sc-aXZVg bgMXDB sc-c9ff3d55-3 dseIOn font-medium text-lg mb-4 text-white">Offers</h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.calm.com/gift"
                    target=""
                    className="text-gray-300 hover:text-[#3a97d3]"
                  >
                    Buy a Gift
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/redeem"
                    target=""
                    className="text-gray-300 hover:text-[#3a97d3]"
                  >
                    Redeem a Gift
                  </a>
                </li>
                <li>
                  <a
                    href="https://health.calm.com/"
                    target="_blank"
                    className="text-gray-300 hover:text-[#3a97d3]"
                    rel="noreferrer"
                  >
                    Calm Health
                  </a>
                </li>
                <li>
                  <a
                    href="https://health.calm.com/self-serve-checkout/"
                    target=""
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                  >
                    Calm for Organizations
                  </a>
                </li>
              </ul>
            </li>
            <li className="sc-c9ff3d55-1 btHgWW">
              <h2 className="sc-aXZVg bgMXDB sc-c9ff3d55-3 dseIOn font-medium text-lg mb-4 text-white">Help</h2>
              <ul className="sc-c9ff3d55-2 YiFJP space-y-3">
                <li>
                  <a
                    href="https://www.calm.com/faq/web"
                    target="_blank"
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                    rel="noreferrer"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.calm.com/hc/en-us/requests/new"
                    target="_blank"
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                    rel="noreferrer"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/terms"
                    target=""
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    target=""
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy#information-for-california-residents"
                    target=""
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                  >
                    CCPA Notice
                  </a>
                </li>
                <li>
                  <a
                    tabIndex={0}
                    role="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="cookie-preferences-banner"
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                  >
                    Opt Out of Targeted Ads
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/cookies"
                    target=""
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calm.com/en/accessibility-statement"
                    target=""
                    className="sc-c9ff3d55-4 blUDiK text-gray-300 hover:text-[#3a97d3]"
                  >
                    Accessibility Statement
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="sc-c9ff3d55-6 jSPgoc flex space-x-4">
                <li>
                  <a
                    aria-label="Link to Calm's Facebook"
                    tabIndex={0}
                    role="link"
                    className="sc-c9ff3d55-7 dmmZVc block w-8 h-8"
                  >
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="text-gray-300 hover:text-[#3a97d3]"
                    >
                      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Link to Calm's Instagram"
                    tabIndex={0}
                    role="link"
                    className="sc-c9ff3d55-7 dmmZVc block w-8 h-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="text-gray-300 hover:text-[#3a97d3]"
                    >
                      <path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"></path>
                      <path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"></path>
                      <circle cx="393.6" cy="118.4" r="17.056"></circle>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Link to Calm's Twitter"
                    tabIndex={0}
                    role="link"
                    className="sc-c9ff3d55-7 dmmZVc block w-8 h-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="text-gray-300 hover:text-[#3a97d3]"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="text-center text-gray-300 mt-8">
          Copyright © {new Date().getFullYear()} Calm. All rights reserved
        </div>
      </footer>
  );
}
