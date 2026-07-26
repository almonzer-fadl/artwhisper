import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Mail, Palette, Sparkles } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { artworks, contact } from "./data";

export default function Home() {
  const featured = artworks[0];
  const calmWorks = artworks.filter((artwork) =>
    ["Whispers of Serenity", "Letters in Motion", "Echoes at Dusk"].includes(artwork.title),
  );

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="paint-wash" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-gallery" aria-hidden="true">
          <div className="hero-art main-art">
            <Image
              src={featured.image}
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 86vw, 38vw"
            />
          </div>
          <div className="hero-art side-art side-art-one">
            <Image src="/artworks/letters-in-motion.jpg" alt="" fill sizes="24vw" />
          </div>
          <div className="hero-art side-art side-art-two">
            <Image src="/artworks/echoes-at-dusk.jpg" alt="" fill sizes="20vw" />
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Original acrylic paintings</p>
          <h1>Art that speaks before words do.</h1>
          <p>
            Art Whisper gathers original acrylic paintings shaped by color, memory, and quiet
            emotion. Each piece begins as a feeling and becomes a small world viewers can enter in
            their own way.
          </p>
          <div className="hero-actions">
            <Link href="/gallery" className="primary-action">
              Explore the gallery <ArrowRight size={18} />
            </Link>
            <Link href="#contact" className="secondary-action">
              Ask about a piece
            </Link>
          </div>
        </div>
        <div className="hero-strip" aria-label="Featured details">
          <span>{featured.title}</span>
          <span>{featured.medium}</span>
          <span>{featured.feeling}</span>
        </div>
      </section>

      <section className="intro-section reveal">
        <div>
          <p className="eyebrow">Welcome</p>
          <h2>Where stories are painted, not told.</h2>
        </div>
        <p>
          From calligraphy and cityscapes to nature studies and still life, the collection moves
          across styles without losing its voice. The site keeps the artwork close, the stories
          clear, and the path to each piece simple on every screen.
        </p>
      </section>

      <section className="featured-band reveal" aria-label="Collection highlights">
        {calmWorks.map((artwork) => (
          <Link key={artwork.slug} href={`/gallery#${artwork.slug}`} className="featured-card-link">
            <article>
              <div className="small-frame">
                <Image src={artwork.image} alt={`${artwork.title} painting`} fill sizes="33vw" />
              </div>
              <p>{artwork.feeling}</p>
              <h3>{artwork.title}</h3>
            </article>
          </Link>
        ))}
      </section>

      <section className="featured-cta reveal" aria-label="Open the full gallery">
        <p>See every original painting, filter by style, and open each piece for its full story.</p>
        <Link href="/gallery" className="primary-action">
          View full gallery <ArrowRight size={18} />
        </Link>
      </section>

      <section className="about-section reveal" id="about">
        <div className="about-mark">
          <Palette size={34} />
          <Sparkles size={22} />
        </div>
        <div>
          <p className="eyebrow">The Artist's Vision</p>
          <h2>Colors become stories, shapes become imagination.</h2>
        </div>
        <div className="about-copy">
          <p>
            Every painting starts with a feeling. Art isn&apos;t simply meant to be seen — it&apos;s
            meant to leave something behind in the heart. Each canvas becomes a place where
            emotions take shape through color, texture, and movement.
          </p>
          <p>
            Art Whisper is an evolving collection for people who like to pause, look closely, and
            find their own story inside a work of art.
          </p>
        </div>
      </section>

      <section className="contact-section reveal" id="contact">
        <div>
          <p className="eyebrow">Let's connect</p>
          <h2>Ask about an artwork, commission, or collaboration.</h2>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`} className="contact-link">
            <Mail size={19} />
            {contact.email}
          </a>
          <a href={contact.instagram} className="contact-link" target="_blank" rel="noreferrer">
            <Instagram size={19} />
            Instagram
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
