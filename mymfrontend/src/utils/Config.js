
class Config{
    // for development get token
    static loginUrl="http://127.0.0.1:8000/api/gettoken/"
    static refreshApiUrl ="http://127.0.0.1:8000/api/refresh_token/"
    static registerUrl ="http://127.0.0.1:8000/api/register/"
    static clientApiUrl ="http://127.0.0.1:8000/api/client/"
    static appointmentUrl ="http://127.0.0.1:8000/api/appointment/"
    static assessmentUrl ="http://127.0.0.1:8000/api/counsellingAssess/"
    static scheduleUrl ="http://127.0.0.1:8000/api/schedule/"
    static userRoleUrl ="http://127.0.0.1:8000/api/getUserRole/"
    static auditLogUrl ="http://127.0.0.1:8000/api/getAuditLog/"
    static homeUrl = "/home"
    static counsellingHomeUrl = "/"
    static logoutPage = "/logout"
    static adminLogoutPage = "/adminLogout"

    // admin website
    static sidebarItem=[
        {"index":"0", "title":"Home", "url":"/home", "icons":"home"},
        {"index":"1", "title":"Client", "url":"/client", "icons":"face"},
        {"index":"2", "title":"Schedule", "url":"/schedule", "icons":"today"},
    ]

    // counselling website
    static TopNavBarItem=[
        {"index":"0", "title":"About Us", "url":"/about", "image":""},
        {"index":"1", "title":"Services", "url":"#", "image":""},
        {"index":"2", "title":"", "url":"/", "image":"CSS logo"},
        {"index":"3", "title":"Team", "url":"#", "image":""},
        {"index":"4", "title":"Contact Us", "url":"#", "image":""},
        {"index":"5", "title":"FAQ", "url":"#", "image":""},
    ]
}

export default Config