import * as React from 'react';
import emailIcon from "../../assets/images/icons/email.svg";
import phoneIcon from "../../assets/images/icons/phone.svg";

const PersonCard: React.FC = () => {
    return (
        <div className='person_card'>
            <div className="person_card__image-wrapper">
                <img src="https://res.cloudinary.com/chiranswe/image/upload/v1660796744/portfolio/julian-wan-WNoLnJo7tS8-unsplash_q0kkhp.jpg" alt="" />
            </div>
            <div className="person_card__contents">
                <div className="person_card__contents__detail">
                    <div className="person-info">
                        <h3 className="name">Tonmoy Chiran</h3>
                        <h3 className="profession">Software Engineer</h3>
                    </div>
                    <div className="person-contact">
                        <h3 className="email">
                            <img src={emailIcon} alt="Email Icon" />
                            chiran.tonmoy.swe@gmail.com
                        </h3>
                        <h3 className="phone">
                            <img src={phoneIcon} alt="Phone Icon" />
                            +8801869701485
                        </h3>
                    </div>
                </div>
                <h2 className="person_card__contents__person-overview">
                    Self-motivated developer, who is willing to learn and create outstanding UI applications. 

                    Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. 
                </h2>
            </div>
        </div>
        );
    
};

export default PersonCard;  