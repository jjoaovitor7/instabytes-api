import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_APIKEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateAIDescription(imageBuffer) {
  const prompt =
    "Generate only one description in Brazilian Portuguese for the following image";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || "Alt-text not available.";
  } catch (err) {
    console.log(err);
    throw new Error("Error getting Gemini alt-text.");
  }
}