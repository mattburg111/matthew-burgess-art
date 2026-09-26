# Matthew Burgess

A static artist website built with HTML and CSS. The Work pages are generated
from JSON using Python 3, with no third-party dependencies.

Open `index.html` in a browser, or serve this directory locally:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Updating work

Each year has a folder containing its images and a `works.json` file. The Work
page displays one section per year, newest first. Works and their images appear
in the order listed in JSON; the first image is the grid thumbnail.

```json
{
  "works": [
    {
      "id": "2026_a1",
      "title": "",
      "description": "",
      "dimensions": "",
      "images": ["2026_a1_1.jpg", "2026_a1_2.jpg"]
    }
  ]
}
```

Keep IDs unique and prefixed with the folder's year. Image filenames are relative
to that year's folder. Leave metadata blank until ready: empty descriptions and
dimensions are hidden, and detail pages use “Untitled” when the title is blank.

After editing JSON or adding a year, run from the repository directory:

```sh
python3 build_site.py
```

This updates `portfolio.html` and generates individual artwork pages in `work/`.
Open `portfolio.html` directly in Chrome to preview. Artwork details appear above
an image grid. Click an image to open the original-resolution image over a blurred
backdrop, capped at 80% of the window height. The grid stays in place. Click the
enlarged image, backdrop, or Close button (or press Escape) to return. The interaction uses
`gallery.js` and also works with keyboard Tab and Enter/Space.
Commit and push the generated HTML along with
the JSON and images to update GitHub Pages. Generation currently runs locally,
not automatically on GitHub.

Edit the other HTML pages directly to update the homepage, biography, artist
statement, and contact information. Shared styling lives in `styles.css`.

To publish, upload the files to any static web host, or enable GitHub Pages for
the root of the repository once the files have been pushed.
