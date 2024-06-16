const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

// Fonction pour obtenir des images aléatoires à partir d'un répertoire donné
const getRandomImages = (dir, count) => {
  const files = fs.readdirSync(dir);
  return Array.from({ length: count }, () => files[Math.floor(Math.random() * files.length)]);
};

// Lecture du fichier 'indices.txt' pour obtenir des indices associés à chaque image
const hints = fs.readFileSync(path.join(__dirname, 'indices.txt'), 'utf-8')
  .split('\n')
  .reduce((acc, line) => {
    const [file, hint] = line.split(':');
    acc[file.trim()] = hint.trim();
    return acc;
  }, {});

// Route pour obtenir des données de captcha
app.get('/api/captcha', (req, res) => {
  const neutresDir = path.join(__dirname, '../public/images/neutres');
  const singuliersDir = path.join(__dirname, '../public/images/singuliers');

  // Obtenir 7 images aléatoires du répertoire 'neutres'
  const neutres = getRandomImages(neutresDir, 7).map(file => `/images/neutres/${file}`);
  // Obtenir une image aléatoire du répertoire 'singuliers'
  const singulier = getRandomImages(singuliersDir, 1)[0];

  // Mélanger les images aléatoirement
  const images = [...neutres, `/images/singuliers/${singulier}`];
  images.sort(() => Math.random() - 0.5);

  // Envoyer les données de captcha en tant que réponse JSON
  res.json({ 
    images, 
    singulier: `/images/singuliers/${singulier}`, 
    hint: hints[singulier] 
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
