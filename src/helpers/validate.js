
export const isPasswordLength = (value) => {
    if (value > 6) {
        return false
    } else return true
}

export const isPasswordRepeat = (password, repeatedPassword) => {
    if(repeatedPassword !== null && repeatedPassword !== '') {
        if (password === repeatedPassword) {
            return false
        } else return true
    }
}

export const isEmailValid = (email) => {
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        return false
    } else return true
}

export const isNameLength = (value) => {
    if (value != null && value.length >= 2) {
        return false
    } else return true
}

export const isPhoneLength = (value) => {
    if (value != null && value.length >= 12) {
        return false
    } else return true
}