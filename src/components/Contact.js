import React from 'react'

const Contact = () => {
    return(
        <div className="row">
            <div className="col s12 center-align">
                <h3>Contact</h3>
            </div>
            <div className="col s3"></div>
            <form className="col s6">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" type="text" className="validate" />
                        <label htmlFor="first_name">Full Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="text" className="validate" />
                        <label htmlFor="first_name">Email Address</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="subject" type="text" className="validate" />
                        <label htmlFor="first_name">Subject</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <textarea id="message" className="materialize-textarea" style={{height: "200px"}} />
                        <label htmlFor="first_name">Message</label>
                    </div>
                </div>
            </form>
            <div className="col s3"></div>
        </div>
    )
}

export default Contact