import qs from 'qs';

const CLIENT_ID='562b07f64133690';
const ROOT_URL='https://api.imgur.com';

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }
}
