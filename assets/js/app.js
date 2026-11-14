const updateDateTime = () => {
  const clock = document.getElementById("current-time");
  if (clock) clock.textContent = new Date().toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
};
updateDateTime(); setInterval(updateDateTime, 60000);
