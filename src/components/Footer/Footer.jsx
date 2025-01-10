// --------- STYLES ---------
import './Footer.scss'

export default function Footer() {

    return (
        <section className="footer">
            <ul className="footer__segments">
                <li className="footer__segment-block">
                    <svg className="footer__segment-icon" version="1.1" id="HOUSE" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="20px" height="20px" viewBox="0 0 1800 1800" enable-background="new 0 0 1800 1800" xml:space="preserve">
                        <g>
                            <path fill="#333333" d="M1783.877,760.195L1448.221,519.4c0.936-5.06,1.49-10.252,1.49-15.58V88.032
		                    c0-47.163-38.371-85.533-85.533-85.533h-124.246c-47.162,0-85.533,38.37-85.533,85.533v220.587L918.581,139.452
		                    c-4.537-3.26-9.654-5.051-14.847-5.618c-1.234-0.156-2.483-0.246-3.732-0.255c-1.249,0.009-2.497,0.099-3.732,0.255
		                    c-5.188,0.567-10.309,2.358-14.846,5.618l-865.3,620.743c-14.143,10.142-17.383,29.829-7.236,43.971
		                    c6.155,8.581,15.822,13.149,25.63,13.149c6.361,0,12.78-1.921,18.341-5.913L900.002,203.69l254.396,182.496l63.024,45.211
		                    l132.331,94.932l64.783,46.473l332.604,238.601c5.562,3.991,11.979,5.913,18.341,5.913c9.809,0,19.476-4.568,25.631-13.149
		                    C1801.26,790.027,1798.02,770.337,1783.877,760.195z M1217.423,353.834V88.032c0-12.411,10.099-22.509,22.509-22.509h124.246
		                    c12.41,0,22.509,10.098,22.509,22.509v387.226L1217.423,353.834z"/>
                            <path fill="#333333" d="M1534.746,800.935c-17.404,0-31.512,14.107-31.512,31.512v894.17c0,1.895-6.37,7.86-17.418,7.86h-353.228
		                    v-548.772c0-17.404-14.107-31.512-31.513-31.512H698.928c-17.404,0-31.512,14.107-31.512,31.512v548.772H314.188
		                    c-11.048,0-17.418-5.966-17.418-7.86v-894.17c0-17.405-14.107-31.512-31.512-31.512c-17.404,0-31.512,14.107-31.512,31.512v894.17
		                    c0,1.169,0.136,2.303,0.197,3.459c2.071,37.474,37.214,67.426,80.245,67.426h384.74c17.405,0,31.512-14.108,31.512-31.513v-548.771
		                    h339.125v548.771c0,17.404,14.107,31.513,31.512,31.513h384.74c43.031,0,78.174-29.952,80.244-67.426
		                    c0.063-1.156,0.198-2.29,0.198-3.459v-894.17C1566.259,815.042,1552.151,800.935,1534.746,800.935z"/>
                            <path fill="#333333" d="M1073.253,782.176c0-95.411-77.624-173.04-173.04-173.04s-173.04,77.628-173.04,173.04
		                    c0,95.416,77.624,173.04,173.04,173.04S1073.253,877.592,1073.253,782.176z M790.198,782.176
		                    c0-60.663,49.352-110.016,110.016-110.016s110.015,49.353,110.015,110.016c0,60.664-49.352,110.016-110.015,110.016
		                    S790.198,842.84,790.198,782.176z"/>
                        </g>
                    </svg>
                    <h4 className="footer__segment-title">Not yet a client?</h4>
                    <p className="footer__segment-text">Speak to a wealth professional today</p>
                    <a href="https://www.scotiawealthmanagement.com/ca/en/connect-with-us.html" className="footer__segment-link">Connect with us</a>
                </li>
                <li className="footer__segment-block">
                    <svg className="footer__segment-icon" stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 20a6 6 0 0 0-12 0"></path>
                        <circle cx="12" cy="10" r="4"></circle>
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <h4 className="footer__segment-title">Already a client?</h4>
                    <p className="footer__segment-text">Locate your wealth professional</p>
                    <a href="https://findus.scotiawealthmanagement.com/" className="footer__segment-link">Find an advisor</a>
                </li>
                <li className="footer__segment-block">
                    <svg className="footer__segment-icon" width="20px" height="20px" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m420 144c-32.824 0-60 27.176-60 60v84h-228c-32.824 0-60 27.176-60 60v648c0 32.824 27.176 60 60 60h936c32.824 0 60-27.176 60-60v-648c0-32.824-27.176-60-60-60h-228v-84c0-32.824-27.176-60-60-60zm0 48h360c7.0625 0 12 4.9375 12 12v84h-384v-84c0-7.0625 4.9375-12 12-12zm-288 144h936c7.0625 0 12 4.9375 12 12v245.62c-45.844 13.512-93.984 25.262-144 34.875v-28.5c0-15.066-11.262-24-24-24h-96c-12.566 0-24 11.434-24 24v49.875c-62.074 6.5352-126.23 10.125-192 10.125-65.871 0-129.85-3.832-192-10.5v-49.5c0-12.566-11.434-24-24-24h-96c-13.066 0-24 13.184-24 24v28.5c-50.035-9.6211-98.176-21.375-144-34.875v-245.62c0-7.0625 4.9375-12 12-12zm180 288h48v96h-48zm528 0h48v96h-48zm-720 19.875c46.051 13.039 94.176 24.141 144 33.375v66.75c0 12.566 11.434 24 24 24h96c12.566 0 24-11.434 24-24v-46.125c62.246 6.3906 126.3 10.125 192 10.125 65.699 0 129.78-3.4297 192-9.75v45.75c0 12.566 11.434 24 24 24h96c12.566 0 24-11.434 24-24v-66.375c49.848-9.2773 97.91-20.629 144-33.75v352.12c0 7.0625-4.9375 12-12 12h-936c-7.0625 0-12-4.9375-12-12z" fiil="none" />
                    </svg>
                    <h4 className="footer__segment-title">Client resource centre</h4>
                    <p className="footer__segment-text">Plan information and more</p>
                    <a href="https://www.scotiawealthmanagement.com/ca/en/resource-centre.html" className="footer__segment-link">Visit the client resource centre</a>
                </li>
                <li className="footer__segment-block">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 0.25H1.24609C0.558594 0.25 0 0.816406 0 1.51172V16.4883C0 17.1836 0.558594 17.75 1.24609 17.75H16.25C16.9375 17.75 17.5 17.1836 17.5 16.4883V1.51172C17.5 0.816406 16.9375 0.25 16.25 0.25ZM5.28906 15.25H2.69531V6.89844H5.29297V15.25H5.28906ZM3.99219 5.75781C3.16016 5.75781 2.48828 5.08203 2.48828 4.25391C2.48828 3.42578 3.16016 2.75 3.99219 2.75C4.82031 2.75 5.49609 3.42578 5.49609 4.25391C5.49609 5.08594 4.82422 5.75781 3.99219 5.75781ZM15.0117 15.25H12.418V11.1875C12.418 10.2188 12.3984 8.97266 11.0703 8.97266C9.71875 8.97266 9.51172 10.0273 9.51172 11.1172V15.25H6.91797V6.89844H9.40625V8.03906H9.44141C9.78906 7.38281 10.6367 6.69141 11.8984 6.69141C14.5234 6.69141 15.0117 8.42188 15.0117 10.6719V15.25Z" fill="#4B5563" />
                    </svg>
                </li>
            </ul>
            <ul className="footer__legal">
                <li className="footer__legal-item"><a href="https://www.scotiabank.com/careers/en/careers.html?_ga=2.73213459.1280179005.1736452201-460876359.1736452201" className="footer__legal-item-links">Careers</a></li>
                <li className="footer__legal-item"><a href="https://www.scotiabank.com/ca/en/security.html?_ga=2.73213459.1280179005.1736452201-460876359.1736452201" className="footer__legal-item-links">Security and Fraud</a></li>
                <li className="footer__legal-item"><a href="https://www.scotiabank.com/ca/en/about/contact-us/legal.html?_ga=2.73213459.1280179005.1736452201-460876359.1736452201" className="footer__legal-item-links">Legal</a></li>
                <li className="footer__legal-item"><a href="https://www.scotiabank.com/ca/en/about/contact-us/privacy.html?_ga=2.73213459.1280179005.1736452201-460876359.1736452201" className="footer__legal-item-links">Privacy</a></li>
                <li className="footer__legal-item"><a href="https://www.scotiabank.com/ca/en/about/accessibility.html?_ga=2.73213459.1280179005.1736452201-460876359.1736452201" className="footer__legal-item-links">Accessibility</a></li>
                <li className="footer__legal-item"><a href="https://www.scotiabank.com/ca/en/about/contact-us/privacy/privacy-cookies.html" className="footer__legal-item-links">Cookie Settings</a></li>
            </ul>
            <div className="footer__end">© Scotiabank. All Rights Reserved.</div>
        </section>
    );
}