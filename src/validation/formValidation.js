export const required = value => (value ? undefined : 'Field Is Required');
export const minLength = min => value => isNaN(value) || value.length > min ? 'Enter Only 10 Numbers' : value.length < min ? 'Enter atleast 10 Numbers' : undefined;
export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)
