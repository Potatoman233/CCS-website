import React from 'react'
import Overlay from './Overlay'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import GoogleFontLoader from 'react-google-font-loader'
import "adminbsb-materialdesign/css/themes/all-themes.css"

class MainComponent extends React.Component {
    
    state={
        bodyClass:"theme-green ls-closed",
        displayOverlay: "none",
        width:window.screen.width,
    }
    // when clicking the side bar , i changed red to green but dk tf if does
    onBarClick = () =>{
        if(this.state.bodyClass=="theme-green ls-closed overlay-open"){
            this.setState({bodyClass:"theme-green ls-closed"})
            this.setState({displayOverlay:"none"})
        }else if(this.state.bodyClass=="theme-green ls-closed"){
            this.setState({bodyClass:"theme-green ls-closed overlay-open"})
            this.setState({displayOverlay:"block"})
        }
    }

    // when screen size changes, will not have refresh
    onscreensize=()=>{
        console.log(window.screen.width)
        this.setState({width:window.screen.width})
    }
    componentWillMount(){
        window.addEventListener("resize", this.onscreensize)
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.onscreensize)
    }
    componentDidMount(){
        // select all input tags
        var inputall = document.querySelectorAll("input")
        inputall.forEach((input) =>{
            // add blue line when focused 
            input.addEventListener("focus", function(){
                this.parentNode.className="form-line focused"
            })
        })

        inputall.forEach((input) =>{
            // remove blue line when not focused 
            input.addEventListener("blur", function(){
                this.parentNode.className="form-line"
            })
        })
    }

    render() { // made theme green n white but green looks better tbh
        console.log(this.props)
        if (this.state.width > 1150) {
            document.getElementById("root").className = "theme-green"
        } else {
            // hard coded html class
            document.getElementById("root").className = this.state.bodyClass
        }

        // pass the loaded page
        var Page = this.props.page

        // separates the components into variouF parts
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
            <Navbar onBarClick = {this.onBarClick} />
            <Sidebar activepage={this.props.activepage} />
            {/* dynamic page content loader, keep things like nav bar constant*/}
            <Page {...this.props} />
        </React.Fragment>
    }
}
export default MainComponent
