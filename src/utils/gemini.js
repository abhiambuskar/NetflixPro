import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY, Google_API_KEY } from "./constants";

// Create Gemini client
const genAI = new GoogleGenerativeAI(Google_API_KEY);

// Export a model instance (Gemini Pro for text)
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default geminiModel;
// You can now use geminiModel to interact with the Gemini API