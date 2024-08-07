let GoogleGenerativeAI;
let genAI;

const loadGoogleGenerativeAI = async () => {
    const module = await import("@google/generative-ai");
    GoogleGenerativeAI = module.GoogleGenerativeAI;

    genAI = new GoogleGenerativeAI("AIzaSyDzL6k_Tn0Og0ywCbyqbo_JyT08sc_CSNc");
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
    if (!genAI) {
        // Ensure that genAI is initialized
        const model = await loadGoogleGenerativeAI();
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text());
    } else {
        const chatSession = genAI.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text());
    }
}

export default run;
