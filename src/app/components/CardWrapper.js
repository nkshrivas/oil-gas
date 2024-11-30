import React from 'react';
import Card from './Card'; // Import the Card component

const Wrapper = () => {
    const cardData = [
        {
            title: "Bio Diesel",
            meta: "Renewable Energy",
            date: "October 15, 2020",
            imageUrl: "/images/biodiesel.jpg",
            link: "/services/biodiesel"
        },
        {
            title: "CBG (Compressed Bio Gas)",
            meta: "Renewable Energy",
            date: "October 15, 2020",
            imageUrl: "/images/biodiesel.JPG",
            link: "/services/cbg"
        },
        {
            title: "Bio Coal",
            meta: "Eco-Friendly Fuel",
            date: "October 15, 2020",
            imageUrl: "/images/coal.jpg",
            link: "/services/biocoal"
        },
        {
            title: "Ethanol",
            meta: "Clean Fuel",
            date: "October 15, 2020",
            imageUrl: "/images/rawm.JPG",
            link: "/services/ethanol"
        },
        {
            title: "Tyre Oil",
            meta: "Recycled Energy",
            date: "October 15, 2020",
            imageUrl: "/images/biodiesel.JPG",
            link: "/services/tyre-oil"
        },
        {
            title: "Raw Material Supply",
            meta: "Industrial Supply",
            date: "October 15, 2020",
            imageUrl: "/images/IMG_3137.JPG",
            link: "/services/"
        }
    ];

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl font-bold text-center pb-10 text-black dark:text-black heading">
                Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        meta={card.meta}
                        date={card.date}
                        imageUrl={card.imageUrl}
                        link={card.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Wrapper;
