import React from 'react';
import img1 from "../assets/images/eco-1.jpg";
import img2 from "../assets/images/eco-2.jpg";
import img3 from "../assets/images/eco-3.jpg";
import img4 from "../assets/images/eco-4.jpg";
import img5 from "../assets/images/eco-5.jpg";
import img6 from "../assets/images/eco-6.jpg";
import img7 from "../assets/images/eco-7.jpg";
import img8 from "../assets/images/eco-8.jpg";

const Eco = () => {
    const images = [
        { id: 1, name: "Image 1", source: img1 },
        { id: 2, name: "Image 2", source: img2 },
        { id: 3, name: "Image 3", source: img3 },
        { id: 4, name: "Image 4", source: img4 },
        { id: 5, name: "Image 5", source: img5 },
        { id: 6, name: "Image 6", source: img6 },
        { id: 7, name: "Image 7", source: img7 },
        { id: 8, name: "Image 8", source: img8 },
    ];

    return (
        <div className='bg-blue-400 p-8'>
            <h2 className="text-4xl text-center mb-6">Οικοδέσποινα, γραφείο αγροτουρισμού και υπαίθριων δραστηριοτήτων</h2>
            <div className="text-center border border-gray-300 p-4 mb-6">
                Η εταιρία μας ειδικεύεται στις οικοπεριηγήσεις και στον εναλλακτικό τουρισμό.
                Σχεδιάζουμε, οργανώνουμε και πραγματοποιούμε ταξίδια που συνδυάζουν φύση και πολιτισμό με πεζοπορία,
                ποδηλασία και άλλες υπαίθριες δραστηριότητες,
                όπως επίσης και θεματικά ταξίδια και εκδρομές περιβαλλοντικής ευαισθητοποίησης για μικρούς και μεγάλους.
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image) => (
                    <div key={image.id} className="w-full aspect-w-3 aspect-h-4">
                        <img src={image.source} alt={image.name} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Eco;
