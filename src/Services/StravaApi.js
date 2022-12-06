const baseURL = 'https://www.strava.com/api/v3/'
const accessToken = '7e632c787f39f8d688be83992b2822f57b91923b'

const StravaApi = {

    getUserDetails() {
        return fetch(baseURL + 'athlete?access_token=' + accessToken)
            .then(res => res.json());
    },



}

export default StravaApi;

