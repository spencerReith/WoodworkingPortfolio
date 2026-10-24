// Ring order. Art is dealt straight down this list, so entry n sits one slot
// along from n-1 and the column counts 01..N as the carousel turns.
// Reordering these rows moves the ring, the column and the numbering together;
// nothing else needs touching.
//
// `file` is the card on the ring and the frame it opens into. `media` is what
// follows it down the project page, up to six pictures, each with the shape
// of its box (land 3:2, port 4:5, wide 16:9), which sets the page's rhythm,
// and a caption (the picture's accessible label; it is not printed). Pictures
// are stored uncropped; the site centre-crops each to its box as it draws it.
// `insights` are three short notes, set as a numbered row between the opening
// pictures and the rest.
//
// TODO: every type, year, caption, insight and blurb is a placeholder.
export const PROJECTS = [
  {
    file: "adirondack-1.webp",
    name: "Adirondack Chair 1",
    type: "Placeholder",
    year: "2026",
    media: [
      {
        src: "adirondack-1-1.webp",
        shape: "port",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
    ],
    blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "adirondack-2.webp",
    name: "Adirondack Chair 2",
    type: "Placeholder",
    year: "2026",
    media: [
      {
        src: "adirondack-2-1.webp",
        shape: "land",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
    ],
    blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "cuttingboard-2.webp",
    name: "Cuttingboard 2",
    type: "Placeholder",
    year: "2026",
    media: [
      {
        src: "cuttingboard-2-1.webp",
        shape: "port",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
    ],
    blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "cuttingboards.webp",
    name: "Cuttingboards",
    type: "Placeholder",
    year: "2026",
    media: [
      {
        src: "cuttingboards-1.webp",
        shape: "land",
        caption: "Placeholder caption",
      },
      {
        src: "cuttingboards-2.webp",
        shape: "port",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
    ],
    blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "lion-hunt-table.webp",
    name: "Lion Hunt Table",
    type: "Placeholder",
    year: "2026",
    media: [
      {
        src: "lion-hunt-table-1.webp",
        shape: "land",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
    ],
    blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "notebook.webp",
    name: "Notebook Carved Poster",
    type: "Placeholder",
    year: "2026",
    media: [
      {
        src: "notebook-1.webp",
        shape: "land",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
    ],
    blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "walnut-coffee-table.webp",
    name: "Walnut Coffee Table",
    type: "Placeholder",
    year: "2026",
    media: [
      {
        src: "walnut-coffee-table-1.webp",
        shape: "port",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
      {
        title: "Placeholder",
        text: "Placeholder: a sentence about this piece.",
      },
    ],
    blurb: "Placeholder: a sentence or two about this piece.",
  },
];

export const IMAGE_FILES = PROJECTS.map((p) => p.file);
