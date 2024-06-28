let registerParticipantText = document.querySelector(".welcomeMessage");
function registerParticipant(name, event) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name, event });
    }, 2000);
  });
}
function showWelcomeMessage(name, event) {
  setTimeout(() => {
    registerParticipantText.innerHTML = `Welcome to the event!<br>Participant: ${name}<br>Event: ${event}`;
  }, 2000);
}
let participantName;
let eventName;
registerParticipant("Yasin_Wolf", "Learn JS")
  .then(({ name, event }) => {
    participantName = name;
    eventName = event;
  })
  .then(() => {
    showWelcomeMessage(participantName, eventName);
  })
  .catch((err) => {
    console.log(err);
  });
