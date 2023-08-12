"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { getShowcases } from "/src/utils.js";

export default function Showcase() {
  const [showcases, setShowcases] = useState(null);
  const [loading, setLoading] = useState(true);
  const [i, setI] = useState(0); // index of showcase on display

  const fetchShowcases = async () => {
    const s = await getShowcases();
    setShowcases(s);
    setLoading(false);
  };

  useEffect(() => {
    fetchShowcases();
  });

  function handleLeft() {
    setI(i == 0 ? showcases.length - 1 : i - 1);
  }

  function handleRight() {
    setI(i == showcases.length - 1 ? 0 : i + 1);
  }

  return (
    <main className="flex flex-col m-5 justify-center items-center">
      {!loading ? (
        <>
          <h1 className="text-2xl text-center">{showcases[i].fields.title}</h1>
          <img
            src={showcases[i].fields.coverPhoto.fields.file.url}
            className="w-40"
          />
          <div className="flex flex-row my-2">
            <button onClick={handleLeft} className="px-2">
              Left
            </button>
            <p className="px-2">
              {i + 1} / {showcases.length}
            </p>
            <button onClick={handleRight} className="px-2">
              Right
            </button>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
