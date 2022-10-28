

export const required = value => {
    if(value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => value => {
    if(value.length < maxLength) return undefined;
    return `Length of value mustn't be longer then ${maxLength} characters`
}