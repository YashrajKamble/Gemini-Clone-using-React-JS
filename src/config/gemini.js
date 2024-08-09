let GoogleGenerativeAI;
let model;

const loadGoogleGenerativeAI = async () => {
    const module = await import("@google/generative-ai");
    GoogleGenerativeAI = module.GoogleGenerativeAI;

    const genAI = new GoogleGenerativeAI("AIzaSyDzL6k_Tn0Og0ywCbyqbo_JyT08sc_CSNc");
    return genAI.getGenerativeModel({
        model: "gemini-1.0-pro",
    });
};

const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    if (!model) {
        // Ensure that model is initialized
        model = await loadGoogleGenerativeAI();
    }

    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();

}

export default run;
