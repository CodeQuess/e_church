import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

class EntryArea extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    handleModal = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <section className="entry-area">
                <div className="container">
                    <div className="row entry-static-wrap">
                        <div className="col-lg-3">
                            <div className="entry-static-box entry-static-box1">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="entry__title">God bless you and thank you for choosing Cornerstone Baptist Church Gwarinpa 
                                as your center of worship.
                                 
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="entry-video-img">
                                            <img src="/images/img60.jpg" alt="entry-video-img" width="400" height="300" />
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='PbUxi2Lx8x8' onClose={this.handleModal} />
                                                <div onClick={this.handleModal} className="mfp-iframe video-play-btn"
                                                   title="Play Video"><i className="fa fa-play"></i>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="entry-video-text">
                                            <h2 className="entry__title">  We Welcome You
                                                </h2>
                                            <p className="entry__text">As Senior Pastor, I extend my hand and heart in fellowship to you and offer my service to you. 
                                            I pray that you will take advantage of the opportunities for worship, growth, 
                                            and service that are available to you as members of Cornerstone Baptist Church, Gwarinpa.
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default EntryArea;