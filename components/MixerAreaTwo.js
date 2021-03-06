import React from 'react';
import Link from 'next/link';

const MixerAreaTwo = () => {
    return (
        <section className="mixer-area mixer-area3 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading mixer-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title text__white">The First Step Starts With You
                                </h2>
                            <Link href="/donate"><a className="theme-btn">Click Here</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MixerAreaTwo;
