
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Missing email" });
  }

  try {
    const scriptURL = "https://script.google.com/macros/s/AKfycbwqlpzgaLV9776R2ZztOcaW19Z6ev69f6k78gVZ2bLp8JW7vfL86le_gUyLEq63_KKP/exec";

    const response = await fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams({ email }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: "Failed to send to Google Apps Script" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // ✅ Google Apps Script Web App URL
      const url = "https://script.google.com/macros/s/AKfycbwqlpzgaLV9776R2ZztOcaW19Z6ev69f6k78gVZ2bLp8JW7vfL86le_gUyLEq63_KKP/exec";

      // Forward the request to Google Sheets
      await fetch(url, {
        method: "POST",
        body: new URLSearchParams({ email }),
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to save email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
