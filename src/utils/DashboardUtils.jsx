// utils.js

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export const getCurrentDate = () => {
  const now = new Date();
  return format(now, 'dd MMMM yyyy', { locale: fr });
};

export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export const truncateText = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};