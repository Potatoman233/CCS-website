import axios from "axios"
import Config from './Config'
import { reactLocalStorage } from 'reactjs-localstorage'

class AuthHandler {
    // handles authentication from API to frontend 
    static login(username, password, callback) {
        axios.post(Config.loginUrl, { username: username, password: password })
            .then(function (response) {
                if (response.status === 200) {
                    // store the tokens in local storage
                    reactLocalStorage.set("token", response.data.access)
                    reactLocalStorage.set("refresh", response.data.refresh)
                    callback({ error: false, message: "Login Successfully" })
                }
            })
            .catch(function (error) {
                callback({ error: true, message: "Login failed" })
            })
    }

    static adminLogin(username, password, callback) {
        // get role based on username entered
        axios.post(Config.userRoleUrl, { email: username, password: password })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.is_staff | response.data.is_superuser) {
                        // if user is staff, proceed login
                        axios.post(Config.loginUrl, { email: username, password: password })
                        .then(function (response) {
                            if (response.status === 200) {
                                // store the tokens in local storage
                                reactLocalStorage.set("adminToken", response.data.access)
                                reactLocalStorage.set("adminRefresh", response.data.refresh)
                                callback({ error: false, message: "Login Successfully" })
                            }
                        })
                        .catch(function (error) {
                            callback({ error: true, message: "Login failed" })
                        })
                    }
                    else{
                        // if not staff then throw error
                        throw new Error("User have no access")
                    }
                }
            })
            .catch(function (error) {
                callback({ error: true, message: error.message })
            })
    }

    static loggedIn() {
        if (reactLocalStorage.get("token") && reactLocalStorage.get("refresh")) {
            return true
        }
        else {
            return false
        }
    }

    static adminLoggedIn() {
        if (reactLocalStorage.get("adminToken") && reactLocalStorage.get("adminRefresh")) {
            return true
        }
        else {
            return false
        }
    }

    static getLoginToken() {
        return reactLocalStorage.get("token")
    }
    static getRefreshToken() {
        return reactLocalStorage.get("refresh")
    }
    static getAdminLoginToken() {
        return reactLocalStorage.get("adminToken")
    }
    static getAdminRefreshToken() {
        return reactLocalStorage.get("adminRefresh")
    }

    static logoutUser() {
        reactLocalStorage.remove("token")
        reactLocalStorage.remove("refresh")
    }

    static logoutAdminUser() {
        reactLocalStorage.remove("adminToken")
        reactLocalStorage.remove("adminRefresh")
    }

    static checkTokenExpiry() {
        var expire = false
        var token = this.getLoginToken()
        var tokenArray = token.split(".")
        var jwt = JSON.parse(atob(tokenArray[1])) //array index 1 shows expiry time
        if (jwt && jwt.exp && Number.isFinite(jwt.exp)) {
            expire = jwt.exp * 1000
        } else {
            expire = false
        }

        if (!expire) {
            return false
        }

        return Date.now() > expire //returns false if expires
    }

    static checkAdminTokenExpiry() {
        var expire = false
        var token = this.getAdminLoginToken()
        var tokenArray = token.split(".")
        var jwt = JSON.parse(atob(tokenArray[1])) //array index 1 shows expiry time
        if (jwt && jwt.exp && Number.isFinite(jwt.exp)) {
            expire = jwt.exp * 1000
        } else {
            expire = false
        }

        if (!expire) {
            return false
        }

        return Date.now() > expire //returns false if expires
    }
}

export default AuthHandler