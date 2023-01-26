import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
        <div class="container ">
        <Link href="/">
          <h2>W(ai)ter</h2>
          </Link>

          <p>&copy; Made with ❤️</p>
        </div>
      </footer>
  );
}
