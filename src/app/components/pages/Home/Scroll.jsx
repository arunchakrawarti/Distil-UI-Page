"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Scroll = () => {
  const containerRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const speed = 2;
    let scroll = container.scrollLeft;
    let requestId;

    const animate = () => {
      if (!isPaused) {
        scroll += speed * direction;
        container.scrollLeft = scroll;

        if (direction === 1 && scroll >= container.scrollWidth - container.clientWidth) {
          setIsPaused(true);
          setTimeout(() => {
            setDirection(-1);
            setIsPaused(false);
          }, 5000);
        }

        if (direction === -1 && scroll <= 0) {
          setIsPaused(true);
          setTimeout(() => {
            setDirection(1);
            setIsPaused(false);
          }, 5000);
        }
      }
      requestId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(requestId);
  }, [direction, isPaused]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden relative whitespace-nowrap h-[150px] sm:h-[180px] md:h-[210px] lg:h-[238px] scrollbar-none"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>
        {`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div className="inline-block w-full h-full relative">
        <Image
          src="/img/Banner1.png"
          alt="Banner1"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      <div className="inline-block w-full h-full relative">
        <Image
          src="/img/Banner2.png"
          alt="Banner2"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Scroll;
