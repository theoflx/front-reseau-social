import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

import image from "../img/SocialPlace.png"

export const LoginPage = () => {

    const [ email, setEmail ] = React.useState("")
    const [ password, setPassword ] = React.useState("")

    const navigate = useNavigate()
    
    const handleSubmit = () => {
        const request = {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ email, password })
        }

        fetch('http://localhost:5000/auth/login', request)
        .then(response => response.json())
        .then(content => {
            if(content) {
                navigate('/home')
            } else {
                return (err)
            }
        })
        .catch(err => console.error(err))
		}
    

return (

<div className="login_page">

    <img className="logo_login_page" src={image} />

    <div className="box_login box_linear">

            <h1 className="login_text">Connexion</h1>

            <div className="box_input_login">
                <div className="box__email_input_login">
                    <label className="label_signin_email">Entrez votre Pseudo</label>
                    <input className="input_signin_email" onChange={(e) => setEmail(e.target.value)} type="email"></input>
                </div>

                <div className="box__password_input_login">
                    <label className="label_signin_password">Entrez votre mot de passe</label>
                    <input className="input_signin_password" onChange={(e) => setPassword(e.target.value)} type="password"></input>
                    <label className="label_signin_forgotpassword">Mot de passe oublié ?</label>
                </div>
            </div>

            <div className="box_btn_login">
                <button className="btn_register" onClick={() => navigate('/register')} type="submit">S'inscrire</button>
                <button className="btn_login" onClick={handleSubmit} type="submit">Se connecter</button>
            </div>
    </div>

</div>
)
}