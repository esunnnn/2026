import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans  bg-red-300 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] bg-red-300 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/globe.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            yellow
            
            
          </li>
          <li className="tracking-[-.01em]">
           hello
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28X0Y27D188946754W10000H4671/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/ok-sticker.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            dont deploy
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://www.tiktok.com/@adventureswithambs/video/7539961896317766934?is_from_webapp=1&sender_device=pc&web_id=7545311686707103240"
            target="_blank"
            rel="noopener noreferrer"
          >
            watch tiktok
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2"
          href="https://tr.rbxcdn.com/180DAY-7ed55ea8baea4709419d104ed37fb9bd/500/280/Image/Jpeg/noFilter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          dont learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://i.redd.it/the-dti-dolls-are-real-v0-n5sr517equse1.png?width=1972&format=png&auto=webp&s=395ebed91bda77b4c970acca46decc82e697b3d5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          no examples
        </a>
        <a
          className="flex items-center gap-2 "
          href="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2023/01/image4-1024x576.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          sn baitsgaanuuu →
        </a>
      </footer>
    </div>
  );
}
