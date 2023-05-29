/** Converts a string to sentence case.
 * E.G. 'hello' -> 'Hello' || 'HEY THERE' -> 'Hey there'.
 * If a non-string is passed, it will return the input.
 */
export const sentenceCase = (str: string) =>
    typeof str === 'string'
        ? str.charAt(0).toUpperCase() + str.toLowerCase().slice(1, str.length)
        : str;
