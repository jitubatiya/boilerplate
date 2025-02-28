import {SHOW_LOG} from '../../../env.json';
export function print_data(txt, txt2 = '') {
  let is_debug = SHOW_LOG === 'Yes' ? true : false;
  if (is_debug) {
    console.log(txt, txt2);
  }
}
