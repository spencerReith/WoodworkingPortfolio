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
    type: "Pine",
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
        title: "Plans",
        text: "Norm Abram's plans for a tradional adirondack chair.",
      },
      {
        title: "Wood",
        text: "Eastern White Pine.",
      },
    ],
    // blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "adirondack-2.webp",
    name: "Adirondack Chair 2",
    type: "Pine",
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
        title: "Info",
        text: "The second of this model adirondack chair I made this spring. Third lifetime.",
      },
      {
        title: "Wood",
        text: "Eastern White Pine.",
      },
    ],
    // blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "cuttingboard-2.webp",
    name: "Cherry Cutting Board",
    type: "Cherry, Walnut, Maple",
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
        title: "Info",
        text: "Edge-grain cuttingboard with name engraved.",
      },
      {
        title: "Wood",
        text: "Primarily cherry. One piece of each maple and walnut.",
      },
    ],
    blurb: "Classic butchers-block style cutting board.",
  },
  {
    file: "cuttingboards.webp",
    name: "Walnut Cutting Board and Serving Board",
    type: "Walnut",
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
        title: "Info",
        text: "A cuttingboard, and a serving board made from the cuttingboard's scraps ",
      },
      {
        title: "Wood",
        text: "Primarily walnut, each with a piece of maple.",
      },
    ],
    // blurb: "Placeholder: a sentence or two about this piece.",
  },
  {
    file: "lion-hunt-table.webp",
    name: "Lion Hunt Table",
    type: "Walnut, Epoxy",
    year: "2024",
    media: [
      {
        src: "lion-hunt-table-1.webp",
        shape: "land",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Info",
        text: "Walnut table with epoxy inlay.",
      },
      {
        title: "Inlay",
        text: "Replica of the ancient Assyrian Engraving 'Lion Hunt of Ashurbanipal', made with CNC optimizing software that I wrote.",
      },
    ],
    blurb: "Perhaps an unwise/dangerous use of the electric hand plane in order to level the epoxy without a traditional planer.",
  },
  {
    file: "notebook.webp",
    name: "'The Notebook' Carved Poster",
    type: "Plywood",
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
        title: "Info",
        text: "Movie poster of 'The Notebook' carved into plywood and sized down.",
      },
    ],
    blurb: "A great room decoration.",
  },
  {
    file: "walnut-coffee-table.webp",
    name: "Walnut Coffee Table",
    type: "Walnut",
    year: "2024",
    media: [
      {
        src: "walnut-coffee-table-1.webp",
        shape: "port",
        caption: "Placeholder caption",
      },
    ],
    insights: [
      {
        title: "Wood",
        text: "Walnut",
      },
    ],
    blurb: "My favorite piece.",
  },
];

export const IMAGE_FILES = PROJECTS.map((p) => p.file);
