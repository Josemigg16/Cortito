export default function fixURL(url) {
    if (url.includes("http://") || url.includes("https://")) {
        return url;
    } else {
        return "http://" + url;
    }
};