import { z } from 'zod';

export default function isValidUuid(id) {
  try {
    z.string().uuid().parse(id);
    return true;
  } catch (err) {
    return false;
  }
}
