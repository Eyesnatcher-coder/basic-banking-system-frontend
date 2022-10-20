import axios from "axios";

const fetch_logins = async () => {
    const res = await axios.get(process.env.API_URL)
    return res.data;
}

const logins = fetch_logins()
// console.log(logins);

export { logins };