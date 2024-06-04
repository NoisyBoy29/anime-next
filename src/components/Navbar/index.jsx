import Link from "next/link";
import Image from "next/image";
import InputSearch from "./InputSearch";
import { Outfit } from "next/font/google";
import UserActionButton from "./UserActionButton";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "700",
});

export default function Navbar() {
  return (
    <header className="shadow-md bg-color-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 p-4 mx-auto md:flex-row md:items-center">
        <Link
          href="/"
          className={`${outfit.className} text-2xl font-bold text-gray-800`}
          aria-label="Home"
        >
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczNrGH54cnvDIjP7TxK9S59fey9ekGNmAiokfBKhtpv6iKtJafZSI_TwEj-cXich0g8h5GbIoawcHsjJeS9z2zWP86Gum6unifRDBipKuSuiKFviZXiyy8NtmImzyyGO-MWF-MtHdEQOwNrIaTui6ihO=w958-h403-s-no-gm?authuser=0"
            alt="Header Logo"
            width={150}
            height={7}
            className="mx-auto md:mx-0"
          />
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
}
