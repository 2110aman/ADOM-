"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Events.module.css";
import eventsData from "../../data/events.json";

export default function EventsSection() {
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const videoOverlayRef = useRef(null);

  useEffect(() => {
    const videoPlayer = videoRef.current;
    const playButton = playButtonRef.current;
    const videoOverlay = videoOverlayRef.current;

    if (videoPlayer && playButton && videoOverlay) {
      // Function to play video
      function playVideo() {
        videoPlayer.play();
        videoOverlay.style.display = "none";
        playButton.style.display = "none";
        // Remove poster when playing
        videoPlayer.removeAttribute("poster");
      }

      // Function to pause video and show thumbnail
      function pauseVideo() {
        videoPlayer.pause();
        // Set poster to show thumbnail when paused
        videoPlayer.setAttribute("poster", "/images/thumbnail.jpg");
        videoOverlay.style.display = "flex";
        playButton.style.display = "flex";
      }

      // Click event for play button
      playButton.addEventListener("click", function (e) {
        e.stopPropagation();
        playVideo();
      });

      // Click event for video overlay (to pause)
      videoOverlay.addEventListener("click", function (e) {
        e.stopPropagation();
        if (!videoPlayer.paused) {
          pauseVideo();
        }
      });

      // Click event for video player (to pause)
      videoPlayer.addEventListener("click", function (e) {
        e.stopPropagation();
        if (!videoPlayer.paused) {
          pauseVideo();
        }
      });

      // Show overlay when video ends
      videoPlayer.addEventListener("ended", function () {
        pauseVideo();
      });

      // Show thumbnail when video is paused (except when initially loading)
      videoPlayer.addEventListener("pause", function () {
        if (videoPlayer.currentTime > 0) {
          // Set poster to show thumbnail when paused
          videoPlayer.setAttribute("poster", "/images/thumbnail.jpg");
          videoOverlay.style.display = "flex";
          playButton.style.display = "flex";
        }
      });

      // Hide overlay when video starts playing
      videoPlayer.addEventListener("play", function () {
        videoOverlay.style.display = "none";
        playButton.style.display = "none";
        // Remove poster when playing
        videoPlayer.removeAttribute("poster");
      });
    }
  }, []);

  const { events } = eventsData;

  return (
    <section className={styles.videoSection}>
      <div className="container">
        {/* Upper Div - Same style as topics section */}
        <div className={styles.topicsUpper}>
          <h2 className={styles.topicsSubtitle}>{events.subtitle}</h2>
          <h3 className={styles.topicsTitle}>{events.title}</h3>
          <div className={styles.topicsUnion}>
            <Image
              src={events.union.src}
              alt={events.union.alt}
              width={events.union.width}
              height={events.union.height}
            />
          </div>
          <p className={styles.topicsDescription}>{events.description}</p>
        </div>

        {/* Middle Div - Video */}
        <div className={styles.videoDiv}>
          <div className={styles.videoContainer}>
            <video
              ref={videoRef}
              poster="/images/thumbnail.jpg"
              className={styles.videoPlayer}
            >
              <source src="/images/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div ref={videoOverlayRef} className={styles.videoOverlay}>
              <button ref={playButtonRef} className={styles.playButton}>
                <Image
                  src="/images/play.svg"
                  alt="Play video"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Lower Div - Cards */}
        <div className={styles.videoCardsDiv}>
          <div className={styles.videoCardsContainer}>
            {events.cards.map((card, index) => (
              <div key={index} className={styles.videoContentCard}>
                <div className={styles.videoCardContent}>
                  <div className={styles.videoCardImage}>
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      width={card.image.width}
                      height={card.image.height}
                    />
                  </div>
                  <div className={styles.videoCardContentContainer}>
                    <h3 className={styles.videoCardTitle}>{card.title}</h3>
                    <div className={styles.videoCardMeta}>
                      {card.meta.map((metaItem, metaIndex) => (
                        <span key={metaIndex} className={styles.videoMetaItem}>
                          <Image
                            src={metaItem.icon.src}
                            alt={metaItem.icon.alt}
                            width={metaItem.icon.width}
                            height={metaItem.icon.height}
                            className={styles.videoMetaIcon}
                          />
                          {metaItem.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.videoCardButtonContainer}>
                  <button className={styles.videoRegisterBtn}>
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
