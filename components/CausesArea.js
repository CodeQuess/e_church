import React from 'react';

const CausesArea = () => {
    return (
        <div>
            <section className="causes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="section-heading blog-heading text-center">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">God's Word In Our Hands</h2>
                                <p className="section__meta">Hi There</p>
                            </div>
                        </div>
                    </div>
                    <div className="row blog-content-wrap">
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item1">
                                    <div className="blog-img">
                                        <img src="/images/img59.png" alt="textimage" width="370" height="317" />
                                    </div>
                                    <div id="bar1" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="23"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/causes-detail">Charity Tasks</a>
                                        </h3>
                                        <p className="blog__desc"> Let us transform lives today!
                                            </p>
                                            <ul className="blog__list">
                                            <li><i className="icon-target"></i> Target: <span>The Globe</span></li>
                                           
                                        </ul>
                                        <a href="/donate" className="theme-btn">Click Now</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item2">
                                    <div className="blog-img">
                                        <img src="/images/img59.png" alt="textimage" width="370" height="317" />
                                            <span className="blog__tag"><i className="fa fa-flash"></i> trending</span>
                                    </div>
                                    <div id="bar2" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="80"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/causes-detail">Expanding God's Kingdom</a>
                                        </h3>
                                        <p className="blog__desc">What Are You Waiting For?.</p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Target Communities: <span>600,000</span></li>
                                           
                                        </ul>
                                        <a href="/donate" className="theme-btn">Join Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-content">
                                <div className="blog-item blog-item3">
                                    <div className="blog-img">
                                        <img src="/images/img59.png" alt="textimage" width="370" height="317" />
                                    </div>
                                    <div id="bar3" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="44"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a href="/causes-detail">
                                            Our Bible Group Community</a></h3>
                                        <p className="blog__desc"> Discussing the Word of God with YOU!
                                            </p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Target: <span>10,000</span></li>
                                        </ul>
                                        <a href="/donate" className="theme-btn">Click Here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CausesArea;
