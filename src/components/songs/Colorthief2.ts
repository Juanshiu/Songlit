// colorExtractor.ts
import ColorThief from 'colorthief';

export function setupColorExtraction(imageId: string, containerId: string) {
  const img = document.getElementById(imageId) as HTMLImageElement;
  const container = document.getElementById(containerId);
  const colorThief = new ColorThief();

  if (!img || !container) {
    console.error('Image or container element not found');
    return;
  }

  const extractColors = () => {
    try {
      const palette = colorThief.getPalette(img, 8);
      if (palette && palette.length >= 2) {
        const color1 = `rgb(${palette[0].join(',')})`;
        const color2 = `rgb(${palette[1].join(',')})`;
        container.style.background = `linear-gradient(to top, ${color1}, ${color2})`;
      }
    } catch (error) {
      console.error('Error extracting colors:', error);
    }
  };

  if (img.complete) {
    extractColors();
  } else {
    img.onload = extractColors;
  }
}