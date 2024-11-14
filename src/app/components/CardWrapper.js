import React from 'react';
import Card from './Card'; // Import the Card component

const Wrapper = () => {
    const cardData = [
        {
            title: "Bio Diesel",
            meta: "Renewable Energy",
            date: "October 15, 2020",
            imageUrl: "https://source.unsplash.com/600x900/?bio-diesel,energy",
            link: "https://creativemanner.com"
        },
        {
            title: "CBG (Cannabigerol)",
            meta: "Cannabis Extract",
            date: "October 15, 2020",
            imageUrl: "https://source.unsplash.com/600x900/?cbg,hemp",
            link: "https://creativemanner.com"
        },
        {
            title: "Bio Coal",
            meta: "Eco-Friendly Fuel",
            date: "October 15, 2020",
            imageUrl: "https://source.unsplash.com/600x900/?bio-coal,energy",
            link: "https://creativemanner.com"
        },
        {
            title: "Ethanol",
            meta: "Clean Fuel",
            date: "October 15, 2020",
            imageUrl: "https://source.unsplash.com/600x900/?ethanol,fuel",
            link: "https://creativemanner.com"
        },
        {
            title: "Tyre Oil",
            meta: "Recycled Energy",
            date: "October 15, 2020",
            imageUrl: "https://source.unsplash.com/600x900/?tyre-oil,recycling",
            link: "https://creativemanner.com"
        },
        {
            title: "Raw Material Supply",
            meta: "Industrial Supply",
            date: "October 15, 2020",
            imageUrl: "https://source.unsplash.com/600x900/?raw-material,supply",

            link: "https://creativemanner.com"
        }
    ];

    return (
        <section className="wrapper">
            <h2 className="text-4xl font-bold text-center mb-6 text-black dark:text-black heading">
                Our Products
            </h2>
            <div className="card-grid">
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
