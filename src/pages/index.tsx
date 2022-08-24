import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import QuestionIcon from "../assets/icons/Question";
import UserIcon from "../assets/icons/User";

const Home: NextPage = () => {
  const adjectives = [
    "Prejudiced",
    "Irrational",
    "Skewed",
    "Biased",
    "Distorted",
    "Bent",
    "Influenced",
    "Warped",
    "Swayed",
  ];

  const [currentAdjective, setCurrentAdjective] = useState(adjectives[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdjective(adjectives[count % adjectives.length]);
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [adjectives, count]);

  return (
    <div className="relative mx-auto min-h-screen overflow-hidden px-8 pt-16 text-center">
      <Head>
        <title>Humanly</title>
        <meta
          name="description"
          content="Humanly is a daily quiz game based on behavorial psychology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex items-center justify-between">
        <QuestionIcon />
        <Link href="/">
          <a className="font-heading text-2xl uppercase">Humanly</a>
        </Link>
        <UserIcon />
      </nav>

      <main className="mt-10">
        <h2>
          Humans are{" "}
          <span className="block font-heading text-5xl uppercase leading-relaxed">
            {currentAdjective}
          </span>
        </h2>

        <p>Can you predict their behavior?</p>

        <button className="mt-12">
          <Image
            src="/images/play-button.png"
            alt=""
            height={120}
            width={120}
          />
          <span className="sr-only">Play</span>
        </button>
      </main>

      <footer>
        <img
          src="/images/aristotle.png"
          alt=""
          className="absolute bottom-0 -z-10"
        />
        <img
          src="/images/ellipse-left.svg"
          alt=""
          className="absolute bottom-14 left-4 -z-20"
        />
        <img
          src="/images/ellipse-right.svg"
          alt=""
          className="absolute left-60 bottom-[11.5rem] -z-20"
        />
      </footer>
    </div>
  );
};

export default Home;
