import React from 'react'
import Ng from '../assets/Ng.png'
import Kok from '../assets/Kok.png'
import Nithya from '../assets/Nithya.png'
import Karmila from '../assets/Karmila.png'
import Esther from '../assets/Esther.png'


class Team extends React.Component {
    render() {
        return (
            // content CSS are aligned to right
            <section className="content">
                <div className="container-fluid">
                    <div>
                        <br />
                        <h2> Our Team </h2>
                        <br />
                        
                        <img src={Ng} class="rounded-circle" style={{width: 200, height: 200, borderRadius: 250/4}} alt="Ng Image" />  
                        <br />
                        <h3>Ng Shan Na</h3>
                        <h4>Head of CCS</h4>
                        <p>
                        Ng Shan Na is a licensed counsellor under Malaysia Board of Counsellors, graduated <br />
                        from Psychology degree and Masters in Education (Guidance and Counselling). She has <br />
                        been involved in higher education and counselling field for 11 years, conducting <br />
                        psychological counselling, development programme as well as lecturing student and <br />
                        youth. She’s passionate in sharing mental health info with young people and to journey <br />
                        with them to reach the desired path of an individual. 
                        </p>
                        <br />
                        <p>
                        It is also her belief that every individual will have their own resilience, potential <br />
                        and time to grow uniquely. She also has the experiences in teaching and volunteering <br />
                        young adults, parents and teachers in overseas such as the Philippines and Cambodia.
                        </p>
                        <br />
                        
                        <img src={Kok} class="rounded-circle" style={{width: 200, height: 200, borderRadius: 250/4}} alt="Kok Image" /> 
                        <br />
                        <h3>Kok Choon Foong (Evan)</h3>
                        <h4>Senior Counsellor</h4>
                        <p>
                        a    
                        </p>
                        <br />
                        <p>
                        b    
                        </p>
                        <br />

                        <img src={Nithya} class="rounded-circle" style={{width: 200, height: 200, borderRadius: 250/4}} alt="Nithya Image" /> 
                        <br />
                        <h3>Nithya Ramasamy</h3>
                        <h4>Counsellor</h4>
                        <p>
                        Nithya Ramasamy is a licensed counsellor and registered with Malaysian Board of <br />
                        Counsellors. She aims to provide a safe and empowering perspective that supports <br />
                        students in making positive changes in their lives.
                        </p>
                        <br />
                        <p>
                        She believes that encouragements will help students to find effective solutions and <br />
                        manage life's challenges.
                        </p>
                        <br />

                        <img src={Karmila} class="rounded-circle" style={{width: 200, height: 200, borderRadius: 250/4}} alt="Karmila Image" /> 
                        <br />
                        <h3>Noorkarmila Binti Hamid</h3>
                        <h4>Counsellor</h4>
                        <p>
                        Karmila is a licensed counsellor under Malaysia Board of Counsellors. She has Psychology <br />
                        degree and Masters in Education (Guidance and Counselling). She has experience in <br />
                        higher education, research, student affairs and counselling for more than 5 years.    
                        </p>
                        <br />
                        <p>
                        She believes that everyone has a chance and opportunity to become a better person. <br />
                        Her aims are to bring the therapeutic environment in counselling for everyone and <br />
                        non judgemental.
                        </p>
                        <br />

                        <img src={Esther} class="rounded-circle" style={{width: 200, height: 200, borderRadius: 250/4}} alt="Esther Image" /> 
                        <br />
                        <h3>Esther Chu Yun Sing</h3>
                        <h4>Counsellor</h4>
                        <p>
                        a
                        </p>
                        <br />
                        <p>
                        b
                        </p>
                        <br />
                        <br />
                        <br />
                        

                    </div>
                </div>
            </section>
        )
    }
}

export default Team
