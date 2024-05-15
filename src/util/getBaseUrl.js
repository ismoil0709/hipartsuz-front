import axios from "axios";

export default async function getBaseUrl () {
    try {
        const resp = await axios.get("https://api.telegram.org/bot6412338008:AAFcXM2MXc2mCSUb3Rv3U1fP_JRY9GA77_A/getWebhookInfo");
        let url = resp.data.result.url;
        url = url.substring(0, url.indexOf('telegram') - 1);
        return url;
    } catch (error) {
        console.error("Error getting base URL:", error);
        return null;
    }
};
