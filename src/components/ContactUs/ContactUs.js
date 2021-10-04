import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="bg-primary bg-opacity-10">
            <div className="w-50 mx-auto p-5 mb-0 text-start ">
                <h3 className="contact-us fw-bolder font-monospace">Contact us</h3>
                <p className="text-secondary">Please use this form to contact us and we will get back to you as soon as possible!</p>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control rounded" id="floatingInput" placeholder="Your name" />
                    <label for="floatingInput">Your Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control rounded" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control rounded" id="floatingInput" placeholder="+0012*******" />
                    <label for="floatingInput">Phone</label>
                </div>

                <div class="form-floating mb-3">
                    <textarea class="form-control rounded py-4" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Your Comments</label>
                </div>
                <button className="btn btn-primary mx-auto py-2 w-100">Submit</button>

            </div>

        </div>
    );
};

export default ContactUs;