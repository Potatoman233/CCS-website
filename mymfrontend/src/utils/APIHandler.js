import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import AuthHandler from "./AuthHandler";
import Config from "./Config";

class APIHandler {
    async checkLogin() {
        if (AuthHandler.checkTokenExpiry()) {
            try {
                var response = await axios.post(Config.refreshApiUrl, {
                    refresh: AuthHandler.getRefreshToken()
                })
                // set refresh token
                reactLocalStorage.set("token", response.data.access)
            }
            catch (error) {
                console.log(error)
                // invalid token for refresh, need to log user out
                AuthHandler.logoutUser()
                window.location = "/"
            }
        }
    }

    async checkAdminLogin() {
        if (AuthHandler.checkAdminTokenExpiry()) {
            try {
                var response = await axios.post(Config.refreshApiUrl, {
                    refresh: AuthHandler.getAdminRefreshToken()
                })
                // set refresh token
                reactLocalStorage.set("adminToken", response.data.access)
            }
            catch (error) {
                console.log(error)
                // invalid token for refresh, need to log user out
                AuthHandler.logoutAdminUser()
                window.location = "/"
            }
        }
    }

    async saveClientData(name, email, school, programme) {
        // wait till token get updated then proceed
        await this.checkAdminLogin()

        // call client API to save data
        var response = await axios.post(Config.clientApiUrl, {
            name: name, email: email, school: school, programme: programme
        },
            { headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() } }
        )

        return response
    }

    async fetchAllClient() {
        await this.checkAdminLogin()

        var response = await axios.get(Config.clientApiUrl, {
            headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() }
        })

        return response
    }

    async fetchClientDetail(id) {
        await this.checkAdminLogin()

        try {
            var response = await axios.get(Config.clientApiUrl + "" + id + "/", {
                headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() }
            })
        }
        catch (error) {
            console.log(error)
        }

        return response
    }

    async editClientData(name, email, school, programme, id) {
        // wait till token get updated then proceed
        await this.checkAdminLogin()

        // call client API to save data
        var response = await axios.put(Config.clientApiUrl + "" + id +"/", {
            name: name, email: email, school: school, programme: programme
        },
            { headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() } }
        )

        return response
    }

    async saveAppointmentData(appointment_date, appointment_time, client_id) {
        // wait till token get updated then proceed
        await this.checkAdminLogin()

        // call appointment API to save data
        var response = await axios.post(Config.appointmentUrl, {
            appointment_date: appointment_date, appointment_time:appointment_time, client_id:client_id
        },
            { headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() } }
        )

        return response
    }

    async fetchAppointmentDetail(id) {
        await this.checkAdminLogin()

        try {
            var response = await axios.get(Config.appointmentUrl + "" + id + "/", {
                headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() }
            })
        }
        catch (error) {
            console.log(error)
        }

        return response
    }

    async editAppointmentData(appointment_date, appointment_time, client_id, id) {
        // wait till token get updated then proceed
        await this.checkAdminLogin()

        // call appointment API to save data
        var response = await axios.put(Config.appointmentUrl + "" + id +"/", {
            appointment_date: appointment_date, appointment_time: appointment_time, client_id: client_id
        },
            { headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() } }
        )

        return response
    }

    async saveAssessmentData(attendance, intake_date, status, case_category, remarks, appointment_id, client_id) {
        // wait till token get updated then proceed
        await this.checkAdminLogin()

        // call assessment API to save data
        var response = await axios.post(Config.assessmentUrl, {
            attendance: attendance, intakeDate:intake_date, status:status, case_category:case_category, 
                remarks:remarks, appointment_id:appointment_id, client_id:client_id
        },
            { headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() } }
        )

        return response
    }

    async fetchAssessmentDetail(id) {
        await this.checkAdminLogin()

        try {
            var response = await axios.get(Config.assessmentUrl + "" + id + "/", {
                headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() }
            })
        }
        catch (error) {
            console.log(error)
        }

        return response
    }

    async editAssessmentData(attendance, intake_date, status, case_category, remarks, id, client_id, app_id) {
        // wait till token get updated then proceed
        await this.checkAdminLogin()

        // call assessment API to save data
        var response = await axios.put(Config.assessmentUrl + "" + id +"/", {
            attendance: attendance, intakeDate:intake_date, status:status, case_category:case_category, 
                remarks:remarks, client_id : client_id, appointment_id:app_id
        },
            { headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() } }
        )

        return response
    }

    async fetchAuditLog() {
        await this.checkAdminLogin()

        var response = await axios.get(Config.auditLogUrl, {
            headers: { Authorization: "Bearer " + AuthHandler.getAdminLoginToken() }
        })

        return response
    }
}

export default APIHandler