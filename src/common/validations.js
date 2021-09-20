export default {
  required: (v) => !!v.trim().length || 'Field is required',
};
