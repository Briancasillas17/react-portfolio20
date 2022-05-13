import React from 'react';
import Avatar from '../assets/images/avatar.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                    "Wake up to reality, nothing ever goes as planned in this accursed world. The longer
                                    you live the more you'll realize that the only things that truly exist in this reality are merely
                                     pain, suffering, and futility. Listen, everywhere you look in this world wherever there is light there will 
                                     always be shadows to be found as well. As long as there is a concept of victors, the vanquished will also exist. The 
                                     selfish intent of wanting to preserve peace initiates wars, and hatred is born in order to protect love. These are nexuses, 
                                     causal relationships that cannot be separated. I want to sever the fate of this world. A world of only victors. A world of only peace.
                                      A world of only love. I will create such a world."
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>GOALS</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                    <div className='title-uni'>Read a New Book Every Month</div>
                                    </div>

                                    <div className='grid-item'>
                              
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Build a Website and Blog</div>
                                    </div>

                                    <div className="grid-item">
                                  
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Learn New Skills in my Field</div>
                                    </div>
                                    <div className="grid-item">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
