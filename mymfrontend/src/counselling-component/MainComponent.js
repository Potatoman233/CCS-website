import React from 'react'
import Navbar from './Navbar'
import Overlay from './Overlay'
import GoogleFontLoader from 'react-google-font-loader'
import { reactLocalStorage } from 'reactjs-localstorage'
import "adminbsb-materialdesign/css/themes/all-themes.css"
import "adminbsb-materialdesign/css/style.css"

class MainComponent extends React.Component {

    state = {
        bodyClass: "theme-red",
        displayOverlay: "none",
        width: window.screen.width,
        userID: "",
    }

    // when screen size changes, will not have refresh
    onscreensize = () => {
        console.log(window.screen.width)
        this.setState({ width: window.screen.width })
    }
    componentWillMount() {
        window.addEventListener("resize", this.onscreensize)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onscreensize)
    }
    componentDidMount() {
        // select all input tags
        var inputall = document.querySelectorAll("input")
        inputall.forEach((input) => {
            // add blue line when focused 
            input.addEventListener("focus", function () {
                this.parentNode.className = "form-line focused"
            })
        })

        inputall.forEach((input) => {
            // remove blue line when not focused 
            input.addEventListener("blur", function () {
                this.parentNode.className = "form-line"
            })
        })
    }

    setUserId(userid){
        if(userid !== ""){
            this.setState({userID:userid})
            reactLocalStorage.set("userID", userid)
        }
    }

    render() {
        console.log(this.props)
        if (this.state.width > 1150) {
            // set the theme colour of website using bootstrap CSS
            document.getElementById("root").className = "theme-orange"
        } else {
            // hard coded html class
            document.getElementById("root").className = this.state.bodyClass
        }

        // pass the loaded page
        var Page = this.props.page 
        
        // separates the components into various parts
        return <React.Fragment>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Roboto',
                        weights: [400, '700'],
                    },
                ]}
                subsets={['latin', 'cyrillic-ext']}
            />

            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Material+Icons'
                    },
                ]}
            />
            <Overlay display={this.state.displayOverlay} />
            <Navbar onBarClick={this.onBarClick} {...this.props} />
            {/* dynamic page content loader, keep things like nav bar constant*/}
            <Page {...this.props} onLogin={(userid) => this.setUserId(userid)}  />
        </React.Fragment>
    }
}
export default MainComponent