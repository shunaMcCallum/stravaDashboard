const baseURL = 'http://localhost:9000/api/activities'

const ActivitiesService = {

    getActivities() {
        return fetch(baseURL)
            .then(res => res.json());
    }

}

export default ActivitiesService;