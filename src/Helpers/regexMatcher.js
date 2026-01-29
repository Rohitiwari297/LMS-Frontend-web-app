export const isEmail = (string) => {
    return string.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}

export const isValidPassword = (string) => {
    return string.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
}