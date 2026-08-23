const fs = require('fs');
const path = require('path');

const worksDir = path.join(__dirname, 'src', 'content', 'works');

fs.readdir(worksDir, (err, files) => {
  if (err) throw err;
  
  files.forEach(file => {
    if (!file.endsWith('.md')) return;
    
    const filePath = path.join(worksDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Rename category
    content = content.replace(/category:\s*"verli-paintings"/g, 'category: "wall-paintings"');
    
    // 2. Add premium placeholder data if missing
    if (!content.includes('wallSize:')) {
      const insertData = `wallSize: "12ft x 9ft"
surface: "Smooth Plaster"
suitableSpace: "Living Room, Villa, Commercial"
materials: 
  - "Premium Acrylics"
  - "Gold Leaf Highlights"
  - "Non-toxic Sealant"
`;

      if (content.includes('featured:')) {
        content = content.replace('featured:', insertData + 'featured:');
      } else {
        // Fallback: insert before the second '---'
        const parts = content.split('---');
        if (parts.length >= 3) {
          parts[1] = parts[1] + insertData;
          content = parts.join('---');
        }
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  });
});
