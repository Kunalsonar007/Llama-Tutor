import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container flex min-h-[72px] items-center justify-between border-t border-[#D2D2D2] px-4 pb-3 pt-5 lg:min-h-[72px] lg:px-0 lg:py-5">
      <a href="/" className="flex items-center gap-2.5">
        <Image
          unoptimized
          src="/new-logo.svg"
          alt="footer"
          width={160}
          height={30}
        />
      </a>
      <div className="flex items-center gap-3">
        <Link href={"https://www.linkedin.com/in/krazyykunal/"} target="_blank">
          <Image
            unoptimized
            src="https://img.icons8.com/ios-glyphs/30/linkedin.png"
            alt="Linkedin"
            width={24}
            height={24}
            style={{ opacity: 0.7 }}
          />
        </Link>
        <Link href={"https://www.instagram.com/krazyykunal"} target="_blank">
          <Image
            unoptimized
            src={"https://img.icons8.com/windows/32/instagram-new.png"}
            alt="Instagram"
            width={25}
            height={25}
            style={{ opacity: 0.7 }}
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
