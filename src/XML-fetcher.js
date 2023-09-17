import React, { useEffect, useState } from 'react';

const XMLFetcher = () => {
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    const fetchXMLData = async () => {
      try {
        const response = await fetch('http://de218.die-staemme.de/interface.php?func=get_config');
        const xmlText = await response.text();
        setXmlData(xmlText);
      } catch (error) {
        console.error('Fehler beim Laden der XML-Daten:', error);
      }
    };

    fetchXMLData();
  }, []);

  return (
    <div>
      <h1>XML Daten</h1>
      <pre>{xmlData}</pre>
    </div>
  );
};

export default XMLFetcher;
