import React, {useState} from 'react';
import UserInfoModal from '../Modal/UserInfoModal';

const InfoCard = ({
    index, 
    firstName, 
    lastName, 
    username, 
    image, 
    city, 
    country,
    email, 
    gender, 
    age, 
    birthdate, 
    phone, 
    cell, 
    nationality
    }) => {
            const [openModal, setOpenModal] = useState(false);    
            return (
                <div className="col-md-3" key={index}>
                    <div className="card border-dark m-3" style={{'height':"21rem"}}>
                        <div className="card-img-top d-flex justify-content-center align-items-center" style={{'minHeight':"200px", 'maxHeight':"200px"}}>
                            <img src={image} alt={firstName} className="w-75 h-50"/>
                        </div>
                    <div className="card-body row">
                        <h5 className="card-title text-center text-danger" onClick={() => setOpenModal(true)} style={{"cursor" : "pointer"}}>{firstName} {lastName}</h5>
                        <h6 className="card-title text-center">{city}, {country}</h6>
                    </div>
                    {openModal && 
                        <UserInfoModal 
                            closeModal={setOpenModal} 
                            userName={firstName} 
                            userLastName={lastName} 
                            userImage={image}
                            userGender={gender}
                            userAge={age}
                            userBirthdate={birthdate}
                            userPhone={phone}
                            userCell={cell}
                            userNationality={nationality}
                            userCity={city}
                            userCountry={country}
                            userUsername={username} 
                            userEmail={email} 
                        />
                    }
                    </div>
                </div>
            )
}

export default InfoCard;