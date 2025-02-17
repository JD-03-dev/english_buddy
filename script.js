const API_KEY = "AIzaSyDsxGNUwgkfOzkaQMq7BuVCoVtFOcmgNGM";

const data = {
  contents: [
    {
      parts: [
        {
          text: "Explain how AI works",
        },
      ],
    },
  ],
};
async function testAPI() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  console.log(result);
}

testAPI();
