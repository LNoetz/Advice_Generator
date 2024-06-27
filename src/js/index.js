const adviceId = document.getElementById('advice-id')
const adviceDescription = document.getElementById('advice-description')
const btnadvice = document.getElementById('btn-advice')

async function getAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("API was unsuccessful");
        }

        const advice = await response.json();
        const numberAdvice = `#${advice.slip.id} `;
        const textAdvice = `" ${advice.slip.advice} "`;
        

        adviceId.innerText = numberAdvice;
        adviceDescription.innerText = textAdvice;
        
    } catch (err) {
        console.error("An error occurred in the API", err);
    };
};
btnadvice.addEventListener('click', getAdvice)
getAdvice();
