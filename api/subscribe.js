export default async function handler(req, res) {
  try {
    // Read email from query string OR JSON body
    const full = new URL(req.url, `https://${req.headers.host}`);
    const email =
      (full.searchParams.get("email") ||
        (req.body && req.body.email) ||
        "")
        .toString()
        .trim();

    // Basic email check
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      res.statusCode = 400;
      res.end("missing or invalid email");
      return;
    }

    // Your Google Apps Script URL
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbwqlpzgaLV9776R2ZztOcaW19Z6ev69f6k78gVZ2bLp8JW7vfL86le_gUyLEq63_KKP/exec";

    // Forward as GET (the method we know works)
    const forwardUrl = `${scriptUrl}?email=${encodeURIComponent(email)}`;
    await fetch(forwardUrl);

    // ✅ Redirect back to home with a small success marker
    res.writeHead(302, { Location: "/?subscribed=1" });
    res.end();
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("server error");
  }
}