export default function randomString() {

    let randomValue = ""

    for (let i = 0; i < 2; i++) {
        randomValue += Math.floor(Math.random() * 10)

        randomValue += String.fromCharCode(97 + Math.floor(Math.random() * 26))
    }

    for (let i = 0; i < 2; i++) {
        randomValue += Math.floor(Math.random() * 10)

        randomValue += String.fromCharCode(65 + Math.floor(Math.random() * 26))
    }

    return randomValue
}