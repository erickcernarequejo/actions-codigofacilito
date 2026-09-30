const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const publicDirectory = path.join(__dirname, '..', 'public');
const requiredFiles = ['index.html', 'styles.css', 'app.js'];

for (const file of requiredFiles) {
  assert.ok(fs.existsSync(path.join(publicDirectory, file)), `Falta public/${file}`);
}

const html = fs.readFileSync(path.join(publicDirectory, 'index.html'), 'utf8');
assert.match(html, /<title>Actions Lab<\/title>/, 'El documento debe tener un título');
assert.match(html, /styles\.css/, 'El documento debe cargar los estilos');
assert.match(html, /app\.js/, 'El documento debe cargar JavaScript');
assert.match(html, /id="counter"/, 'El contador debe existir');

const javascript = fs.readFileSync(path.join(publicDirectory, 'app.js'), 'utf8');
assert.doesNotThrow(() => new Function(javascript), 'app.js debe tener sintaxis válida');
console.log(`Sitio validado correctamente (${requiredFiles.length} archivos).`);
