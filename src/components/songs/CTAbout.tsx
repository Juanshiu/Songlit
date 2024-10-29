import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import FormattedDate from "../tendencias/FormattedDate";

const ColorPalette: React.FC<{ imageUrl: string; about: string }> = ({
    imageUrl,
    about,
}) => {
const imgRef = useRef<HTMLImageElement | null>(null);
// Paso 2: Estado para almacenar los colores
const [colors, setColors] = useState<string[]>([]);

useEffect(() => {
    if (imgRef.current && imageUrl) {
    const colorThief = new ColorThief();
    imgRef.current.onload = () => {
        const palette = colorThief.getPalette(
        imgRef.current as HTMLImageElement,
        8
        );
        // Paso 3: Actualizar el estado con los dos primeros colores
        if (palette.length >= 2) {
        const firstTwoColors = palette
            .slice(0, 2)
            .map((color) => `rgb(${color.join(",")})`);
        setColors(firstTwoColors);
        }
        console.log(palette);
    };
    }
}, [imageUrl]);

return (
    <div>
        <img
            src={imageUrl}
            ref={imgRef}
            style={{ display: "none" }}
            crossOrigin="anonymous"
        ></img>
        {/* Paso 4: Usar los colores en el estilo del <section> */}
        <section
            className={`w-full h-auto text-white mt-12`}
            style={{
            background: `linear-gradient(to top, ${colors[0] || "transparent"}, ${
                colors[1] || "transparent"
            })`,
            }}
        >
            <article className="text-white max-w-7xl mx-auto py-16">
            <div className=" w-2/3 flex flex-col gap-4">
                <h1 className=" font-medium text-8xl text-center">About</h1>
                <span className=" flex justify-between">
                Anotación de Songlit <span>Contribuciones</span>
                </span>
                <p className=" space-y-4 text-lg">{about}</p>
            </div>
            </article>
        </section>
    </div>
    );
};

export default ColorPalette;
