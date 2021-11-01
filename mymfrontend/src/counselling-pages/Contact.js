import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            // content CSS are aligned to right
            <section className="content">
                <div className="container-fluid">
                    <div>
                        <br />
                        <h2> Engage with us </h2>
                        <br />

                        <h4>Operating Hours:</h4>
                        <p>
                        Monday to Friday: 8am to 6pm
                        </p>
                        <br />

                        <h4>Address:</h4>
                        <p>
                        Block A, Level 2 (next to Campus Central)    
                        </p>
                        <br />

                        <h4>Mobile Number:</h4>
                        <p>
                        +603-5629 5022 / 5024 / 5025 / 6791    
                        </p>
                        <br />

                        <h4>Email:</h4>
                        <p>
                        counsellor.lsc@taylors.edu.my    
                        </p>

                    </div>
                </div>
            </section>
        )
    }
}

export default Contact
