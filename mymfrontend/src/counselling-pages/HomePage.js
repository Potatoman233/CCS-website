import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            // content CSS are aligned to right
            <section className="content">
                <div className="container-fluid">
                    <div>
                        <h2> You deserve to be understood. </h2> 
                        <p>
                        You are not being understood by anyone you know and we know you <br />
                        crave for being understood. We understand that you’re tired of talking <br />
                        about it with the people. But we want to understand you, truly. And we <br />
                        will listen to you without being jugmental. No third person.
                        </p>
                        <h2>Just us.</h2>

                        <button className="btn btn-primary m-t-15">Share your story now</button>

                        <h3>8 Signs You Need Counselling</h3>
                        <p>
                        You’re less productive and finding it difficult to focus <br />
                        You don’t feel excited about anything anymore <br />
                        You’ve pulled away from your friends <br />
                        You’re struggling in your relationship <br />
                        You’re having sleeping difficulties <br />
                        You’re having negative thoughts all the time <br />
                        You’re not as happy as you should be <br />
                        You feel like you’re on the brink of breaking down</p>
                        <h4>Bear in mind, you don’t have to help yourself by yourself.</h4>

                    
      

                    </div>
                </div>
            </section>
        );
    }
}

export default HomePage
