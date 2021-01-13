import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {isEmpty} from "../Utils";
import {NavLink} from "react-router-dom";

const NewPostForm = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [postPicture, setPostPicture] = useState(null)
    const [video, setVideo] = useState('')
    const [file, setFile] = useState()
    const userData = useSelector((state) => state.userReducer)

    const handlePicture = () => {

    }

    useEffect(() => {
        if (!isEmpty(userData)) setIsLoading(false)
    }, [userData])
    return (
        <div className={'post-container'}>
            {isLoading ? (
                <i className={'fas fa-spinner fa-pulse'}></i>
            ) : (
                <>
                    <div className={'data'}>
                        <p><span>{userData.following ? userData.following.length : 0}</span>{" "}
                            Abonnement{userData.following && userData.following.length > 1 ?
                                's' : null}
                        </p>
                        <p><span>{userData.followers ? userData.followers.length : 0}</span>{" "}
                            Abonné{userData.followers && userData.followers.length > 1 ?
                                's' : null}
                        </p>
                    </div>
                    <NavLink excat to={'/profil'}>
                        <div className={'user-info'}>
                            <img src={userData.picture} alt={'user-img'}/>
                        </div>
                    </NavLink>
                    <div className={'post-form'}>
                        <textarea name={'message'}
                                  id={'message'}
                                  placeholder={"Ecrivez quelque chose..."}
                                  onChange={(e) => setMessage(e.target.value)}
                                  value={message}
                        />


                    <div className={'footer-form'}>
                        <div className={'icon'}>
                            {isEmpty(video) && (
                                <>
                                    <img src={'./img/icons/picture.svg'} alt={'image'}/>
                                    <input type={'file'} id={'file-upload'} name={'file'}
                                           accept={'.jpg, .jpeg, .png'}
                                           onChange={(e) => handlePicture(e)}/>
                                </>
                            )}
                        </div>
                    </div>
                    </div>
                </>
            )}

        </div>
    );
};

export default NewPostForm;