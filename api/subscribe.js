export default async function handler(req, res) {
  try {
    // Read email from query string OR JSON body
    const base = `https://${req.headers.host}`;
    const fullUrl = new URL(req.url, base);
    const email =
      (fullUrl.searchParams.get("email") ||
        (req.body && req.body.email) ||
        "")
        .toString()
        .trim();

    // Simple email check
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      res.status(400).send("missing or invalid email");
      return;
    }

    // Your Google Apps Script URL
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbwqlpzgaLV9776R2ZztOcaW19Z6ev69f6k78gVZ2bLp8JW7vfL86le_gUyLEq63_KKP/exec";

    // Forward as GET (the method we know works)
    const forwardUrl = `${scriptUrl}?email=${encodeURIComponent(email)}`;
    await fetch(forwardUrl);

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
}