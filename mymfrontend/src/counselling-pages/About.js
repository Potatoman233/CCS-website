import React from 'react'

class About extends React.Component {
    render() {
        return (
            // content CSS are aligned to right
            <section className="content">
                <div className="container-fluid">
                    <div>
                        <br />
                        <h2> What is CCS? </h2>
                        <br />
                        <p>
                        The Centre for Counselling Services (CCS) aims to help and <br />
                        support students resolve personal difficulties and acquire the <br />
                        skills, and knowledge that will enable them to take full <br />
                        advantage of the experience at Taylor’s. 
                        </p>
                        <br />
                        <p>
                        CCS offers a service which is free, confidential, and available to <br />
                        all students to provide you with the emotional and psychological <br />
                        support whenever you need it. CCS focuses on Prevention, <br />
                        Intervention and Collaboration.   
                        </p>

                        
                    </div>
                </div>
            </section>
        )
    }
}

export default About
