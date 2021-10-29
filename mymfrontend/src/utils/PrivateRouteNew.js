import { Route, Redirect } from 'react-router-dom'
import AuthHandler from './AuthHandler'
import MainComponent from '../admin-components/MainComponent'

export var PrivateRouteNew = ({ page, activepage, ...rest }) => {
    // simple private route
    return (
        <Route
            {...rest}
            // add props here allows variables to be passed to main component, 
            // so data can be passed to diff component/pages 
            render={(props) =>
                AuthHandler.loggedIn() ? (
                    // for adminpages to load all the components
                <MainComponent page={page} activepage={activepage} {...props} />
                ) : <Redirect to='/adminlogin' />}
        />
    )
}
