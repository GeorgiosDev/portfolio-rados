import React from "react";
import "../styles/Carousel.css"
import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/images/eco-1.jpg";
import img2 from "../assets/images/eco-2.jpg";
import img3 from "../assets/images/eco-3.jpg";
import img4 from "../assets/images/eco-4.jpg";
import img5 from "../assets/images/eco-5.jpg";
import img6 from "../assets/images/eco-6.jpg";
import img7 from "../assets/images/eco-7.jpg";

export function CarouselComp() {
    const images = [
        { id: 1, name: "Image 1", source: img1 },
        { id: 2, name: "Image 2", source: img2 },
        { id: 3, name: "Image 3", source: img3 },
        { id: 4, name: "Image 4", source: img4 },
        { id: 5, name: "Image 5", source: img5 },
        { id: 6, name: "Image 6", source: img6 },
        { id: 7, name: "Image 7", source: img7 },
    ];
    
    return (
        <div className="flex justify-center items-center">
            <Carousel>
                {images.map((image) => {
                    return (
                        <div
                            key={image.id}
                            className="w-full flex items-center justify-center"
                        >
                            <img
                                src={image.source}
                                alt={image.name}
                                className="max-w-full h-auto w-36 md:w-48 lg:w-56 m-2"
                            />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}






