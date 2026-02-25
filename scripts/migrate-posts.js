const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const POSTS_DIR = path.join(__dirname, '../legacy/_posts');
const OUTPUT_DIR = path.join(__dirname, '../src/content/posts');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const files = fs.readdirSync(POSTS_DIR);

files.forEach(file => {
  if (!file.endsWith('.md')) return;

  const filePath = path.join(POSTS_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  try {
    const { data, content } = matter(fileContent);
    
    // Extract date from filename if not in frontmatter
    // Format: YYYY-MM-DD-title.md
    const filenameMatch = file.match(/^(\d{4}-\d{2}-\d{2})-(.*)\.md$/);
    const date = data.date || (filenameMatch ? filenameMatch[1] : null);
    const slug = filenameMatch ? filenameMatch[2] : file.replace('.md', '');

    const tags = data.tags ? (typeof data.tags === 'string' ? data.tags.split(' ').filter(t => t) : data.tags) : [];

    const newData = {
      title: data.title || slug,
      date: date,
      description: data.description || '',
      tags: tags,
      image: data.image || data['featured-image'] || '',
      draft: data.published === false
    };

    const newContent = matter.stringify(content, newData);
    const outputFilename = `${slug}.mdx`;
    fs.writeFileSync(path.join(OUTPUT_DIR, outputFilename), newContent);
    console.log(`Migrated: ${file} -> ${outputFilename}`);
  } catch (err) {
    console.error(`Error migrating ${file}:`, err);
  }
});
