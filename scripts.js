document.addEventListener("DOMContentLoaded", function() {
  let tabs = document.querySelectorAll('.tab-links a');
  for (let tab of tabs) {
    tab.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Alle aktiven Klassen von Tabs entfernen
      for (let t of tabs) {
        t.parentElement.classList.remove('active');
        document.querySelector(t.getAttribute('href')).classList.remove('active');
      }

      // Aktive Klasse zum aktuellen Tab hinzufügen
      event.currentTarget.parentElement.classList.add('active');
      document.querySelector(event.currentTarget.getAttribute('href')).classList.add('active');
    });
  }
});
