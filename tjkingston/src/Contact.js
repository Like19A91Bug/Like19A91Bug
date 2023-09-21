const Contact = () => {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <div class="row">
                <div class="col-sm-12 col-med-6">
                    <p>
                        Want to get in touch? Shoot me an{" "}
                        <a href="mailto:t.j.kingston@hotmail.com">email</a> or
                        fill out the form.
                    </p>
                </div>
                <div class="col-sm-12 col-med-6">
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div class="col">
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <intup
                            id="email"
                            type="address"
                            placeholder="Email Address"
                        />
                        <textarea placeholder="Enter your text here"></textarea>
                        {/* <!-- End of first row of form--> */}
                        <button type="button" class="btn btn-primary">
                            Send 📬
                        </button>
                    </form>
                    {/* <!-- End of contact form--> */}
                </div>
                {/* <!-- End of col for form--> */}
            </div>
            {/* <!-- End for contact text and form--> */}
        </section>
    );
};

export default Contact;
