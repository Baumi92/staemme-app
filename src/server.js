const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 4000; // Wähle einen geeigneten Port

app.use(cors());

app.get('/get_config', async (req, res) => {
  try {
    const response = await fetch(
      'http://de218.die-staemme.de/interface.php?func=get_config',
    );
    const xmlText = await response.text();
    res.send(xmlText);
  } catch (error) {
    console.error('Fehler beim Abrufen der XML-Daten:', error);
    res.status(500).send('Fehler beim Abrufen der XML-Daten');
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
