import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#C9F9D1] relative overflow-hidden">
          <Image
            src="/CreateRealityWBG.webp"
            alt="Create Reality Image"
            fill
            className="object-contain mt-8 md:mt-24 px-14 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Live a truly great life - join the waitlist now
          </h1>
          <p className="text-gray-500">
            To live a truly great life one must understand and utilise the Laws by which reality operates. Interested yet? Join.
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
