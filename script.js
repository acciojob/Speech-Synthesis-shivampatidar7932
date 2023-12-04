// Your script here.
  // Populate the voices dropdown
  function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  // Set the voice for the speech synthesis
  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggleSpeakButton();
  }

  // Set the rate and pitch for the speech synthesis
  function setOption() {
    msg[this.name] = this.value;
    toggleSpeakButton();
  }

  // Toggle the Speak button based on availability of voices
  function toggleSpeakButton() {
    speakButton.disabled = !msg.voice || msg.voice.name === 'Google US English' || msg.voice.name === 'Google UK English Female';
  }

  // Start speaking
  function speak() {
    speechSynthesis.speak(msg);
  }

  // Stop speaking
  function stop() {
    speechSynthesis.cancel();
  }

  // Event listeners
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', speak);
  stopButton.addEventListener('click', stop);
