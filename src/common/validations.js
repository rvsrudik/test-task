export const rules = {
  required: v => (typeof v === 'string' ? !!v.trim().length : Array.isArray(v) ? !!v.length : !!v) || 'Field is required',
}