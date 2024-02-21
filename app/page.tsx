import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-screen grid md:grid-cols-2 gap-6 bg-[#121212]">
        <div className="relative overflow-hidden md:order-1 order-2">
          <div 
            style={{
              backgroundImage: `url('/CreateRealityWBG.webp')`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '100%',
            }}
            // Adjust the height here: larger on mobile, full height on desktop
            className="h-96 md:h-full bg-[#121212]"
          ></div>
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10 pl-6 md:order-2 order-1">
          <h1 className="font-semibold tracking-tight bg-[#FED545] text-3xl leading-tight md:text-4xl max-w-lg">
            Live a truly great life - join the waitlist now
          </h1>
          <p className="text-gray-200">
            To live a truly great life one must understand and utilise the Laws by which reality operates. Interested yet? Join.
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
