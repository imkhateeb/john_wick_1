const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdown(markdownContent) {

  // Convert markdown to HTML
  const convetedHtml = marked.parse(markdownContent);

  // Sanitize HTML
  const sanitizedHtml = sanitizeHtml(convetedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
  });

  // Convert sanitized HTML to markdown
  const turndownService = new TurndownService();
  const sanitizedmarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedmarkdown;
};

module.exports = sanitizeMarkdown;