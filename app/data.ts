export type Artwork = {
  title: string;
  slug: string;
  style: string;
  medium: string;
  feeling: string;
  size: string;
  year: string;
  collection: string;
  image: string;
  orientation: "portrait" | "landscape" | "square";
  story: string;
};

export const artworks: Artwork[] = [
  {
    title: "Rhythm of Colors",
    slug: "rhythm-of-colors",
    style: "Cubism-inspired abstract art",
    medium: "Acrylic on canvas",
    feeling: "Joy and creativity",
    size: "25 x 35 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/rhythm-of-colors.jpg",
    orientation: "portrait",
    story:
      "Inspired by Cubism and geometric abstraction, this painting combines music and color into a single visual rhythm. Bold shapes and contrasting tones create movement, inviting each viewer to interpret the artwork in their own unique way.",
  },
  {
    title: "Whispers of Serenity",
    slug: "whispers-of-serenity",
    style: "Landscape art",
    medium: "Acrylic on canvas",
    feeling: "Peace and serenity",
    size: "15 x 20 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/whispers-of-serenity.jpg",
    orientation: "portrait",
    story:
      "Inspired by the quiet beauty of nature, this painting captures the calming flow of a waterfall surrounded by lush greenery. Soft colors and gentle movement create a peaceful atmosphere, inviting the viewer to pause, breathe, and reconnect with nature.",
  },
  {
    title: "Candle of Hope",
    slug: "candle-of-hope",
    style: "Contemporary still life",
    medium: "Acrylic on canvas",
    feeling: "Hope and warmth",
    size: "35 x 25 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/candle-of-hope.jpg",
    orientation: "portrait",
    story:
      "A single candle shines through the darkness, symbolizing hope, resilience, and quiet strength. Surrounded by soft glowing lights, the painting reminds us that even the smallest light can brighten the darkest moments.",
  },
  {
    title: "Silent Harmony",
    slug: "silent-harmony",
    style: "Landscape art",
    medium: "Acrylic on canvas",
    feeling: "Love and tranquility",
    size: "35 x 25 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/silent-harmony.jpg",
    orientation: "portrait",
    story:
      "Two graceful swans meet on a quiet lake, symbolizing love, harmony, and connection. Surrounded by peaceful nature, the painting reflects the beauty of calm moments and reminds us that true serenity is often found in simple things.",
  },
  {
    title: "Beyond the Horizon",
    slug: "beyond-the-horizon",
    style: "Landscape art",
    medium: "Acrylic on canvas",
    feeling: "Hope, solitude, and determination",
    size: "20 x 30 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/beyond-the-horizon.jpg",
    orientation: "portrait",
    story:
      "As the aircraft disappears into the horizon, it symbolizes the courage to leave behind what is familiar in pursuit of a dream. The quiet runway reflects the loneliness that often accompanies new beginnings, while the warm sunset reminds us that every ending is also the beginning of another journey. This painting is about embracing uncertainty, carrying hope through moments of solitude, and believing that every dream is worth the distance.",
  },
  {
    title: "Depths Within",
    slug: "depths-within",
    style: "Minimalist wildlife art",
    medium: "Acrylic on canvas",
    feeling: "Reflection and inner peace",
    size: "35 x 25 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/depths-within.jpg",
    orientation: "portrait",
    story:
      "Beneath the calm surface lies a world of endless depth, much like the human mind. This whale represents the journey of diving into our thoughts, emotions, and imagination. Surrounded by silence, it reminds us that some of the most meaningful discoveries are made within ourselves. The deep blue ocean becomes a space for reflection, where stillness turns into clarity and every thought finds room to breathe.",
  },
  {
    title: "Letters in Motion",
    slug: "letters-in-motion",
    style: "Arabic calligraphy art",
    medium: "Mixed media on canvas",
    feeling: "Freedom, heritage, and strength",
    size: "40 x 60 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/letters-in-motion.jpg",
    orientation: "landscape",
    story:
      "Inspired by the timeless beauty of Arabic calligraphy, this artwork celebrates a tradition that has evolved over centuries into one of the world's most expressive art forms. Rather than using words to tell a story, the flowing letters come together to form a powerful horse - a symbol of freedom, strength, and movement. It reflects the idea that language is more than communication; it is an art capable of carrying history, identity, and emotion across generations.",
  },
  {
    title: "Bloom Beyond Time",
    slug: "bloom-beyond-time",
    style: "Mixed media floral art",
    medium: "Acrylic and dried flowers on canvas",
    feeling: "Nostalgia, growth, and gentle memories",
    size: "35 x 25 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/bloom-beyond-time.jpg",
    orientation: "portrait",
    story:
      "Some flowers bloom even after their season has passed. This piece is about memories that never truly fade. The dried flowers symbolize moments we keep close to our hearts, while the soft background reminds us that beauty doesn't disappear - it simply changes its form.",
  },
  {
    title: "Windows of Time",
    slug: "windows-of-time",
    style: "Contemporary geometric landscape",
    medium: "Acrylic on canvas",
    feeling: "Nostalgia, hope, and quiet moments",
    size: "35 x 50 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/windows-of-time.jpg",
    orientation: "portrait",
    story:
      "Every window captures a different moment. A sunset, a quiet street, an airplane crossing the sky, or the calm of the moon. Together, they tell the story of how life is made of small memories. Different places, different times, yet every scene holds a feeling worth remembering.",
  },
  {
    title: "Echoes at Dusk",
    slug: "echoes-at-dusk",
    style: "Contemporary cityscape",
    medium: "Acrylic on canvas",
    feeling: "Calm, reflection, and quiet wonder",
    size: "35 x 50 cm",
    year: "2026",
    collection: "Art Whisper Originals",
    image: "/artworks/echoes-at-dusk.jpg",
    orientation: "portrait",
    story:
      "As the sun quietly fades, the city begins to tell a different story. Behind every glowing window is a life unfolding - someone laughing, someone dreaming, someone starting over. From a distance, the buildings seem silent, yet each light carries a story of its own. This painting is a reminder that even in the calmest sunsets, countless lives continue beneath the same sky.",
  },
];

export const contact = {
  email: "artwisperx@gmail.com",
  instagram: "https://www.instagram.com/artwhisper.gallery?igsh=dHJhcHU2cG1rbDhz",
};
