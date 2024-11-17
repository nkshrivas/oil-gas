import React from 'react';

const Feedback = () => {
    return (
        <div>
            <section className="mt-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Left Column - 2/12 width */}
                    <div className="col-span-12 md:col-span-2 p-x2">
                        <h1 className="heading">Feedback</h1>
                        <button className="button mt-10">More Information</button>
                    </div>

                    {/* Right Column - 10/12 width */}
                    <div className="col-span-12 md:col-span-10 px-2">
                        <h6 className="color-secondary font-bold text-sm">
                            We help interesting companies create and improve industry products and services through long lasting and mutually rewarding relationships.
                        </h6>
                        <p className="mt-3 color-grey">
                            We work with our partners to streamline project plans that don’t just deliver on product perfection, but also deliver on time – crucial to success in a highly competitive market where every day counts.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;
