// src/pages/index.js
import { Inter } from "@next/font/google";
import Dashboard from "@/components/Dashboard";
import { OpenApiSvg } from "@/components/OpenApiSvg";
import Image from "next/image";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>

        <style jsx>{`.svg-image {widht: auto;}`}</style>

        <main className={"bg-white min-h-screen flex flex-col"}>

          <header className="text-center">

            <h1 className="text-4xl md:text-6xl font-bold">
              <div className="flex flex-row align-middle justify-center">
                <div>
                  <img height={0} width={50} src="https://cdn-icons-png.flaticon.com/512/6400/6400264.png" alt="heading clipboard icon" />
                </div>
                <div>Job Description Generator
                  <span className="text-4xl md:text-6xl font-bold text-blue-600">.</span>
                </div>
              </div>
            </h1>

            <div className="flex flex-col items-center justify-center px-4 py-2">
              <small className="mt-3 text-2xl">
                Create Beautiful
                <span className="text-2xl font-bold text-blue-600">
                  {" "}
                  Job Descriptions{" "}
                </span>
                in Seconds
              </small>
            </div>

            <hr />
          </header>

          <section className="flex-1">
            <Dashboard />
            <div className="w-11/12 m-auto mb-10">
              <hr />
            </div>
            <OpenApiSvg />
          </section>

          <footer className="bg-slate-300 p-4 text-center">
            <div className=" flex flex-col">
              <small>Built with</small>
              <div className="m-auto">
                <Image className="svg-image" width={100} height={50} src='/next.svg' alt="nextjs icon"></Image>
              </div>
              <div>
                <small className="align-sub">by</small>
              </div>
              <div className="m-auto">
                <Image className="svg-image" width={50} height={0} src="/vercel.svg" alt="vercel icon" />
              </div>
            </div>
          </footer>

        </main>
      </Layout>
    </>
  );
}