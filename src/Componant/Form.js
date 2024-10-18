import './Form.css';

const FormComponent = () => {


    return (
        <section className='all'>
            <div className='title'>
                <h1>
                    Hello <span>Doc!</span>
                </h1>
                <p>
                    please complete yuor information
                </p>
            </div>
            <section className='main'>
                <div className='right'>

                    <form className="form-grid ">
                        <div>
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="full name"
                            />
                        </div>

                        <div>
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"

                                placeholder="Email Address"
                            />
                        </div>

                        <div>
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"

                                placeholder="+20"
                            />
                        </div>

                        <div>
                            <label>Education</label>
                            <input
                                type="date"
                                name="education"

                            />
                        </div>

                        <div>
                            <label>Medical Specialty</label>
                            <select
                                name="medicalSpecialty"

                            >
                                <option value="" disabled>Select Specialty</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Orthopedics">Orthopedics</option>
                                <option value="Pediatrics">Pediatrics</option>
                            </select>
                        </div>

                        <div>
                            <label>Experience (Years)</label>
                            <input
                                type="number"
                                name="experience"

                                placeholder="Number of years in practice"
                            />
                        </div>

                        <div className="biography">
                            <label>Biography</label>
                            <textarea
                                name="biography"

                                placeholder="A concise summary of the doctor's education, experience, and philosophy of care"
                            />
                        </div>

                        <button type="submit">Save</button>
                    </form>
                </div>
                <div className='left'>
                    <div className="upload-photo-container">
                        <h2>Upload Your Photo</h2>
                        <div className="upload-box">


                            <label htmlFor="file-upload" className="upload-icon">
                                <input
                                    type="file"
                                    id="file-upload"
                                    style={{ display: "none" }}
                                />
                                <i className="upload-arrow">&#8593;</i>
                            </label>

                        </div>
                        <select className="gender-select">
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default FormComponent;




<div className='title'>
    <h1>
        Hello <span>Doc!</span>
    </h1>
    <p>
        please complete yuor information
    </p>
</div>