import React from 'react';
import profile from "../assets/images/profile-pic.jpg"
import {Card,CardBody,Typography} from "@material-tailwind/react";
import drasi1 from "../assets/images/drasi-1.jpg"
import drasi2 from "../assets/images/drasi-2.jpg"
import drasi3 from "../assets/images/drasi-3.jpg"
import drasi4 from "../assets/images/drasi-4.jpg"
import drasi5 from "../assets/images/drasi-5.jpg"
import drasi6 from "../assets/images/drasi-6.jpg"
import "../styles/topiki.css"

export function Topiki() {
    const images = [
        {
        id: 1,
        name: "Περιπατητικός τουρισμός",
        source: drasi1,
        description:"Ανάπτυξη Περιπατητικού τουρισμού κατά μήκος του ποταμού Καλαμά",
        url : "https://www.ertnews.gr/ert3/anaptyksi-peripatitikou-tourismou-stin-ipeiro/"
        },
        {
        id: 2,
        name: "Εκθετήριο Οίνου",
        source: drasi2,
        description:"Εγκαίνια εκθετήριου Οίνου στον Δήμο Ζίτσας",
        url:"https://www.epiruspost.gr/ekthetirio-oinoy-egkainiazei-o-dimos-z/"
        },
        {
        id: 3,
        name: "Ξενάγηση δημοσιογράφων",
        source: drasi3,
        description: "Ισραηλινοί δημοσιογράφοι γνώρισαν τις φυσικές ομορφιές του Δήμου Ζίτσας",
        url:"https://www.zitsa.gov.gr/news/deltia-tupou-24/7641-israelinoi-demosiograpoi-gnorisan-tis-pusikes-omorpies-kai-ta-proionta-tou-demou-zitsas"
        },
        {
        id: 4,
        name: "Σεμινάρια-ημερίδες",
        source: drasi4,
        description: "Εκπαιδευτικά σεμινάρια για την ανάδειξη της Πολιτιστικής βιομηχανίας",
        url:"http://maxitisartas.gr/single_page.php?catid=&id=14748"
        },
        {
        id: 5,
        name: "Δράσεις ανακύκλωσης",
        source: drasi5,
        description:"Πρωτοβουλίες για την Παγκόσμια Ημέρα Περιβάλλοντος στο Δήμο Ζίτσας",
        url:"https://kavala.citypedia.gr/energean-protovoulies-gia-tin-pagkosmia-mera-perivalontos-sto-dimo-paggaiou-kai-sto-dimo-zitsas/"
        },
        {
        id: 6,
        name: "Παρακαλάμιες διαδρομές",
        source: drasi6,
        description:"Διοργάνωση αγώνα δρόμου 'Παρακαλάμιες διαδρομές'",
        url:"https://www.agon.gr/athlitika/15399/parakalamies-diadromes-gia-triti-chronia/"
        }
    ];
    
    const openUrl = (url) => {
        window.open(url, "_blank");
    };
    return (
        <div className="container-dim">
            <Card className="bg-gray-400 w-96 h-screen items-justify text-left overflow-scroll">
                <CardBody>
                    <img src={profile} alt="profile" className='card-image' />
                    <Typography variant="h5" color="blue-gray" className="mb-2 card-header">
                    Γεώργιος Ράδος <br/>    
                    Αντιδήμαρχος Παιδείας, Πολιτισμού,Τουρισμού Δήμου Ζίτσας
                    </Typography>
                    <Typography variant = "p" color = "blue-gray" className = "mb-2 card-text">
                    Το 2017 αποφάσισα να εγκατασταθώ μόνιμα στον τόπο καταγωγής μου,τον Βουτσαρά Ιωαννίνων μετά από πολυετή παραμονή σε Αθήνα,Θεσσαλονίκη και στο εξωτερικό.
                    Σύντομα διαπίστωσα πως επιθυμούσα να προσφέρω και να συνεισφέρω με όλες μου τις δυνάμεις προκειμένου η περιοχή μας,ο Δήμος Ζίτσας να αναδείξει τις ομορφιές της.Η ενασχόληση με την τοπική αυτοδιοίκηση ήταν μονόδρομος.
                    Το 2019 συστρατεύτηκα στη προσπάθεια του Μιχάλη Πλιάκου και οι συμπολίτες μου με τίμησαν με την εκλογή μου ως Δημοτικό Σύμβουλο Ζίτσας.Πλέον υπηρετώ από
                    τη θέση του Αντιδημάρχου Παιδείας,Πολιτισμού και Τουρισμού.
                    </Typography>
                </CardBody>
            </Card>
            <div className="right-col">
            <h1 className='grid-header text-center'>Πρωτοβουλίες-Δράσεις για τον Δήμο Ζίτσας</h1>
            <div className="grid-container">
                {images.map(({id,source,name,description,url}) => {
                    return (
                        <div className="grid-item" key={id} onClick={() => openUrl(url)}>
                            <h2>{name}</h2>
                            <img src={source} alt={name} />
                            <p>{description}</p>
                        </div> 
                    )
                })}
            </div>
            </div>
        </div>
);
}






        

