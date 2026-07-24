import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Gallery from "../Gallery";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { artworks } from "../data";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />

      <section className="gallery-hero">
        <Link href="/" className="back-link">
          <ArrowLeft size={17} />
          Back home
        </Link>
        <p className="eyebrow">Full collection</p>
        <div className="gallery-hero-copy">
          <h1>Original works, collected in one quiet place.</h1>
          <p>
            Browse {artworks.length} Art Whisper originals by style and medium. Open any artwork
            for its details, story, and a direct inquiry link.
          </p>
        </div>
      </section>

      <section className="section-shell gallery-page-shell" aria-label="Art Whisper gallery">
        <Gallery />
      </section>

      <SiteFooter />
    </main>
  );
}
