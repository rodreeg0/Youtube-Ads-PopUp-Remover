// content.js

function removeDialog() {
  const dialog = document.querySelector('tp-yt-paper-dialog');
  if (dialog) {
    dialog.remove();
    playVideo();
    console.log('Annoying ads popup removed');
    showNotification();
  }
}

function playVideo() {
  // Create and dispatch a keydown event for the "K" key
  var event = new KeyboardEvent('keydown', {
    key: 'k',
    code: 'KeyK',
    which: 75,
    keyCode: 75,
    charCode: 0,
    shiftKey: false,
    ctrlKey: false,
    altKey: false,
    metaKey: false,
  });

  // Dispatch the event to the document
  document.dispatchEvent(event);
}

function showNotification() {
  const notification = document.createElement('div');
  notification.textContent = 'Annoying ads popup removed';
  notification.style.position = 'fixed';
  notification.style.top = '10px';
  notification.style.right = '10px';
  notification.style.backgroundColor = '#333'; // Background color remains the same
  notification.style.color = '#fff';
  notification.style.padding = '20px'; // Increase padding to make it bigger
  notification.style.borderRadius = '4px';
  notification.style.zIndex = '9999';

  const timerBar = document.createElement('div');
  timerBar.style.width = '100%'; // Set the initial width to 100%
  timerBar.style.height = '10px';
  timerBar.style.backgroundColor = 'lightgreen'; // Set the timer bar to light green
  timerBar.style.position = 'absolute';
  timerBar.style.bottom = '0'; // Position at the bottom of the notification
  notification.appendChild(timerBar);

  document.body.appendChild(notification);

  const duration = 3000; // The duration in milliseconds
  const startTime = Date.now();

  function updateTimerBar() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const progress = (elapsedTime / duration) * 100;
    timerBar.style.width = 100 - progress + '%';

    if (elapsedTime < duration) {
      requestAnimationFrame(updateTimerBar);
    } else {
      notification.style.display = 'none';
    }
  }

  setTimeout(() => {
    requestAnimationFrame(updateTimerBar);
  }, 0);

}
  
removeDialog();
  