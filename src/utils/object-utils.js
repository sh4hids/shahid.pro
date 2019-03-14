export const isDefined = (ref, path) => {
  let name;
  let keys = path.split('.');

  if (!ref || typeof ref !== 'object') return false; //check if reference object exists or not

  while ((name = keys.shift())) {
    if (!ref.hasOwnProperty(name)) return false;
    ref = ref[name];
  }
  return true;
};
