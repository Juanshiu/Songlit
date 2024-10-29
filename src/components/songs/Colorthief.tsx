import React, { useEffect, useRef, useState } from 'react';
import ColorThief from 'colorthief';

const ColorPalette: React.FC<{ 
    imageUrl: string, 
    children?: React.ReactNode, 
    className?: string, 
    id?: string 
  }> = ({ imageUrl, children, className, id }) => {
    
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    if (imgRef.current && imageUrl) {
      const colorThief = new ColorThief();
      imgRef.current.onload = () => {
        if (imgRef.current) {
          const palette = colorThief.getPalette(imgRef.current, 8);
          if (palette.length >= 2) {
            const firstTwoColors = palette.slice(0, 2).map(color => `rgb(${color.join(',')})`);
            setColors(firstTwoColors);
          }
        }
      };
    }
  }, [imageUrl]);

  return (
    <div>
      <img
        ref={imgRef}
        src={imageUrl}
        alt="Imagen para extraer colores"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
      />
      <section
        style={{
          background: `linear-gradient(to top, ${colors[0] || 'transparent'}, ${colors[1] || 'transparent'})`
        }}
        className={`${className}`}
        id={id}
      >
        {children}
      </section>
    </div>
  );
};

export default ColorPalette;