import React from 'react';
import Logo from '../assets/images/logo.png';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import ReduxLogo from '../assets/images/redux-logo.png';
import MernLogo from '../assets/images/mern-logo.png';
import WebpackLogo from '../assets/images/webpack-logo.png';
import VueLogo from '../assets/images/vuejs-logo.png';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import SqlLogo from '../assets/images/sql-logo.png';
import MongoLogo from '../assets/images/mongodb-logo.png';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'></div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Problem Solving and Logical Thinking</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Written and Verbal Communication</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Teamwork</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={Logo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MernLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={ReduxLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={JqueryLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={WebpackLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={BootstrapLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={VueLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={HandlebarsLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={SqlLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MongoLogo} className='img-skills' />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Future Developments</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Python, Go</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Swift R, PHP. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Employment</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>H_E-B,</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Conctruction Oak,</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Venecation Plaster</p>
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

export default Resume;
