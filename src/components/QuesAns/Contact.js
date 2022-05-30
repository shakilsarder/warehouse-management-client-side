import React from 'react';

const Contact = () => {
    return (
        <div className='mx-auto mb-5' >
            <h2 > Contact Us </h2>
            <form className="row w-50 g-3 needs-validation" novalidate>

                <div className="input-group">
                    <span className="input-group-text">Your Email</span>
                    <input type='email' className="form-control" aria-label="With textarea" placeholder='Enter Your Email' required></input>
                </div>
                <div className="input-group">
                    <span className="input-group-text">Subject</span>
                    <input type='text' className="form-control" aria-label="With textarea" placeholder='Enter Message Subject' required></input>
                </div>

                <div className="input-group">
                    <span className="input-group-text">Your Message</span>
                    <textarea className="form-control" aria-label="With textarea" placeholder='Enter Your Message' required></textarea>
                </div>


                <div className="col-12">
                    <button className="btn btn-info" type="submit">Submit Message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;