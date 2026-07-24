"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Mail, Maximize2, Ruler, X } from "lucide-react";
import { Artwork, artworks, contact } from "./data";

const filters = ["All", "Landscape", "Abstract", "Still life", "Mixed media", "Wildlife"] as const;

function matchesFilter(artwork: Artwork, filter: string) {
  const text = `${artwork.style} ${artwork.medium}`.toLowerCase();
  if (filter === "All") return true;
  if (filter === "Landscape") return text.includes("landscape") || text.includes("cityscape");
  if (filter === "Abstract") return text.includes("abstract") || text.includes("cubism");
  if (filter === "Still life") return text.includes("still life");
  if (filter === "Wildlife") return text.includes("wildlife");
  return text.includes("mixed media");
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Artwork | null>(null);

  const filtered = useMemo(
    () => artworks.filter((artwork) => matchesFilter(artwork, activeFilter)),
    [activeFilter],
  );

  useEffect(() => {
    const openFromHash = () => {
      const slug = window.location.hash.slice(1);
      if (!slug) return;
      const artwork = artworks.find((item) => item.slug === slug);
      if (artwork) setSelected(artwork);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const closeLightbox = () => {
    setSelected(null);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <>
      <div className="gallery-toolbar" aria-label="Gallery filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "filter is-active" : "filter"}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((artwork, index) => (
          <article
            className={`art-card ${artwork.orientation}`}
            key={artwork.slug}
            style={
              {
                "--delay": `${index * 65}ms`,
                "--tilt": `${index % 2 === 0 ? -1.2 : 1.2}deg`,
              } as React.CSSProperties
            }
          >
            <button
              className="image-button"
              type="button"
              onClick={() => setSelected(artwork)}
              aria-label={`Open ${artwork.title}`}
            >
              <Image
                src={artwork.image}
                alt={`${artwork.title} painting`}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <span className="expand">
                <Maximize2 size={18} />
              </span>
            </button>
            <div className="art-copy">
              <div>
                <p>{artwork.style}</p>
                <h3>{artwork.title}</h3>
              </div>
              <button className="story-button" type="button" onClick={() => setSelected(artwork)}>
                Story <ArrowUpRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected &&
        createPortal(
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title}>
            <button
              className="lightbox-backdrop"
              onClick={closeLightbox}
              aria-label="Close"
            />
            <div className="lightbox-panel">
              <button className="close-button" onClick={closeLightbox} type="button">
                <X size={20} />
              </button>
              <div className="lightbox-image">
                <Image src={selected.image} alt={`${selected.title} painting`} fill sizes="90vw" />
              </div>
              <div className="lightbox-copy" id={selected.slug}>
                <div className="modal-heading">
                  <p className="eyebrow">{selected.collection}</p>
                  <h3>{selected.title}</h3>
                  <p>{selected.feeling}</p>
                </div>
                <dl>
                  <div>
                    <dt>Style</dt>
                    <dd>{selected.style}</dd>
                  </div>
                  <div>
                    <dt>Medium</dt>
                    <dd>{selected.medium}</dd>
                  </div>
                  <div>
                    <dt>Size</dt>
                    <dd>
                      <Ruler size={15} />
                      {selected.size}
                    </dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{selected.year}</dd>
                  </div>
                </dl>
                <div className="story-panel">
                  <span>Story</span>
                  <p>{selected.story}</p>
                </div>
                <div className="modal-actions">
                  <a
                    className="modal-inquiry"
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(
                      `Artwork inquiry: ${selected.title}`,
                    )}`}
                  >
                    <Mail size={18} />
                    Ask about this piece
                  </a>
                  <button type="button" className="modal-close-text" onClick={closeLightbox}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
