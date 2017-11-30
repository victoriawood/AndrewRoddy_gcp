function scrollToBottom() {
  setTimeout(function() {
    window.scrollTo(0, document.querySelector("#contact-toggle").scrollHeight);
  }, 1000);
}
