document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  
  const message = document.getElementById('message');
  message.innerText = `Appointment booked for ${name} on ${date} at ${time}.`;
});
