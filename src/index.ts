/**
 * HTML Entity Reference
 * HTML entity reference
 *
 * Online tool: https://devtools.at/tools/html-entity
 *
 * @packageDocumentation
 */

function encodeHtmlEntities(text: string, useNumeric = false): string {
  if (useNumeric) {
    // Encode all non-ASCII and special characters as numeric entities
    return text.replace(/[&<>"']/g, (char) => {
      return `&#${char.charCodeAt(0)};`;
    });
  } else {
    // Use named entities where available
    return text.replace(/[&<>"'©®™€£¥¢§°±×÷←→↑↓ ]/g, (char) => {
      return NAMED_ENTITIES[char] || `&#${char.charCodeAt(0)};`;
    });
  }
}

function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

// Export for convenience
export default { encode, decode };
