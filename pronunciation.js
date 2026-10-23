const speechStatus = document.querySelector("#speech-status");
const listenButtons = [...document.querySelectorAll(".listen-button")];
const hasSpeechSynthesis = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

if (!hasSpeechSynthesis) {
  speechStatus.textContent = "Text-to-speech is not available in this browser. Try a recent version of Chrome, Edge, or Safari.";
  speechStatus.classList.add("is-unavailable");
  for (const button of listenButtons) {
    button.disabled = true;
  }
} else {
  const speech = window.speechSynthesis;

  speechStatus.textContent = "Free browser audio is ready. The voice and accent depend on the voices installed on your device.";

  for (const button of listenButtons) {
    button.addEventListener("click", () => {
      const text = button.dataset.speak;
      if (!text) {
        speechStatus.textContent = "This pronunciation card does not have any text to read.";
        return;
      }

      speech.cancel();
      for (const listenButton of listenButtons) {
        listenButton.classList.remove("is-speaking");
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.88;

      const englishVoices = speech.getVoices().filter((voice) => (
        voice.lang.toLowerCase().startsWith("en")
      ));
      const preferredVoice = englishVoices.find((voice) => voice.lang.toLowerCase() === "en-us")
        || englishVoices.find((voice) => voice.lang.toLowerCase() === "en-gb")
        || englishVoices[0];

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.addEventListener("start", () => {
        button.classList.add("is-speaking");
        speechStatus.textContent = `Playing: ${text}`;
      });
      utterance.addEventListener("end", () => {
        button.classList.remove("is-speaking");
        speechStatus.textContent = "Free browser audio is ready. The voice and accent depend on the voices installed on your device.";
      });
      utterance.addEventListener("error", (event) => {
        button.classList.remove("is-speaking");
        speechStatus.textContent = `Could not play audio (${event.error}). Check your device's speech settings and try again.`;
      });

      speech.speak(utterance);
    });
  }
}
