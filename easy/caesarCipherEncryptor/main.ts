const caesarCipherEncrypt = (message: string, key: number) => {
    const legend = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encrypted = "";

    if(message && key > 0) {
        for(let letter of message) {
            const foundPosition = legend.indexOf(letter);
            encrypted += foundPosition >= 0 
                ? legend[ 
                    (foundPosition > 25 && foundPosition + key % 26 > 50)
                        ||
                    (foundPosition < 25 && foundPosition + key % 26 > 25)
                        ? (foundPosition - 25) + key % 26
                        : foundPosition
                    ]
                : letter;
        }
    } else {
        encrypted = message;
    }

    return encrypted;
}

export default caesarCipherEncrypt;