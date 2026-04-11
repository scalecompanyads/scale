"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  videoId: string; // YouTube video ID
  thumbnailSrc: string;
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

const textVariants = {
  enter: (direction: "left" | "right") => ({
    x: direction === "right" ? 50 : -50,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: "left" | "right") => ({
    x: direction === "right" ? -50 : 50,
    opacity: 0,
  }),
};

export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPlaying, setIsPlaying] = useState(false);

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  const thumbnailReviews = reviews
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  return (
    <div
      className={`tslider-container ${className || ''}`}
    >
      <div className="tslider-grid">
        {/* Left Column: Meta and Thumbnails */}
        <div className="tslider-meta">
          <div className="tslider-pagination">
            <span className="tslider-pagination-text">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            <h2 className="tslider-vertical-label">
              Depoimentos
            </h2>
          </div>

          <div className="tslider-thumbnails">
            {thumbnailReviews.map((review) => {
              const originalIndex = reviews.findIndex(
                (r) => r.id === review.id
              );
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="tslider-thumb-btn"
                  aria-label={`Ver depoimento de ${review.name}`}
                >
                  <img
                    src={review.thumbnailSrc}
                    alt={review.name}
                    className="tslider-thumb-img"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Column: YouTube Video */}
        <div className="tslider-image-col">
          {isPlaying ? (
            <iframe
              key={`iframe-${currentIndex}`}
              src={`https://www.youtube-nocookie.com/embed/${activeReview.videoId}?autoplay=1&rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="tslider-main-img"
              style={{ border: 0 }}
            />
          ) : (
            <div
              className="tslider-video-thumb"
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              aria-label="Assistir depoimento"
            >
              <img
                src={`https://img.youtube.com/vi/${activeReview.videoId}/maxresdefault.jpg`}
                alt={activeReview.name}
                className="tslider-main-img"
              />
              {/* Play button overlay */}
              <div className="tslider-play-overlay">
                <div className="tslider-play-btn">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5.14v14l11-7-11-7z" fill="white" fillOpacity="0.95"/>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Text and Navigation */}
        <div className="tslider-content-col">
          <div className="tslider-text-wrap">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="tslider-affiliation">
                  {activeReview.affiliation}
                </p>
                <h3 className="tslider-name">
                  {activeReview.name}
                </h3>
                <blockquote className="tslider-quote">
                  "{activeReview.quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="tslider-nav">
            <button
              className="tslider-nav-btn tslider-nav-outline"
              onClick={handlePrev}
              aria-label="Depoimento anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="tslider-nav-btn tslider-nav-filled"
              onClick={handleNext}
              aria-label="Próximo depoimento"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Scale-branded review data with YouTube video IDs
const scaleReviews: Review[] = [
  {
    id: 1,
    name: "Eduardo Macedo",
    affiliation: "Boxcar Motorsport",
    quote: "Levamos a empresa de zero a R$ 70 mil de faturamento em menos de três meses investindo menos de R$ 2 mil/mês. São grandes incentivadores do seu negócio.",
    videoId: "mVUz7iBpI6A",
    thumbnailSrc: "https://img.youtube.com/vi/mVUz7iBpI6A/mqdefault.jpg",
  },
  {
    id: 2,
    name: "Rafael",
    affiliation: "Bike Center",
    quote: "Tivemos um aumento de 30% a 40% no faturamento. O tráfego pago é muito importante para a minha empresa e para todas que querem crescer.",
    videoId: "R3ID5_VP7Y8",
    thumbnailSrc: "https://img.youtube.com/vi/R3ID5_VP7Y8/mqdefault.jpg",
  },
  {
    id: 3,
    name: "Carlos Ângelo",
    affiliation: "Agência BRTM",
    quote: "O diferencial que vejo na Scale é ela comprar o meu propósito e entender que, se queremos escalar, podemos contar com eles.",
    videoId: "6YA2xmW1Y4Y",
    thumbnailSrc: "https://img.youtube.com/vi/6YA2xmW1Y4Y/mqdefault.jpg",
  },
];

export default function ScaleTestimonialSlider() {
  return <TestimonialSlider reviews={scaleReviews} />;
}
