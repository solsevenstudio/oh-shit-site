export default async function handler(req, res) {
  // accept BOTH GET and POST, but prefer query string (simplest)
  const email =
    (req.query && req.query.email) ||
    (req.body && req.body.email) ||
    "";

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwqlpzgaLV9776R2ZztOcaW19Z6ev69f6k78gVZ2bLp8JW7vfL86le_gUyLEq63_KKP/exec";
    // forward as GET with ?email=... (matches what we know works)
    const url = scriptUrl + "?email=" + encodeURIComponent(email);
    await fetch(url);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}