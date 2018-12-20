import Link from "next/link";

export default props => {
  return (
    <footer>
      <img src="/static/images/payment-logo.png" className="img-fluid" />
      <ul>
        <li>
          <Link href="/privacy-policy" prefetch>
            <a>Privacy Policy</a>
          </Link>
        </li>
        <li>
          <Link href="/terms-of-use" prefetch>
            <a>Terms of Use</a>
          </Link>
        </li>
        <li>
          <Link href="/terms-of-sale" prefetch>
            <a>Terms of Sale</a>
          </Link>
        </li>
        <li>
          <Link href="/cookie-policy" prefetch>
            <a>Cookie Policy</a>
          </Link>
        </li>
        <li>
          <Link href="/disclaimer" prefetch>
            <a>Disclaimer</a>
          </Link>
        </li>
      </ul>
      <p>
        &copy; 2018 PRET. All Right Reserved | Powered by{" "}
        <a target="_blank" href="http://www.altitude-tech.com">
          Altitude Technology
        </a>
      </p>
      <span id="siteseal">
        <script
          async
          type="text/javascript"
          src="https://seal.godaddy.com/getSeal?sealID=3WM1WzVbJNVQhn75QDxKtBNHGaRcFYsuwzHuinwVeSr2bnnikIC1HRf9Nqlr"
        />
      </span>
    </footer>
  );
};
