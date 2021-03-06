import decode from 'jwt-decode';
export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        // this.domain = 'http://localhost:3000/' // API server domain
        this.domain = 'https://behaver-api.herokuapp.com/'
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    login(username, password) {
      console.log(username)
      // Get a token from api server using the fetch api
      return this.fetch(`${this.domain}/users/login?user[username]=${username}&user[password]=${password}`, {
          method: 'POST',
          body: JSON.stringify({
              username,
              password
          })
      }).then(res => {
          console.log(res)
          this.setLocalStorage(res.token, res.user.username, res.user.id) // Setting the token in localStorage
          return Promise.resolve(res)

      })
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    register(user) {


      return this.fetch(`${this.domain}/users/register`,

        {
          body: JSON.stringify(user),
          method: 'POST'
        }
      )
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setLocalStorage(idToken, username, userID) {
        // Saves user token to localStorage for authorization
        localStorage.setItem('id_token', idToken)
        // Saves username to LocalStorage for display in header
        localStorage.setItem('username', username)
        // Saves UserID to LocalStorage as family ID
        localStorage.setItem('family_id', userID)
    }



    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token')
        localStorage.removeItem('username')
        localStorage.removeItem('family_id')
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }


    fetch(url, options) {
      console.log(url)
      console.log(options)
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }
        console.log(headers)
        return fetch(url, {
            headers,
            ...options
        })
            .then(console.log(url))
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}
