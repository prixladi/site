import { Job } from './jobs';

type JobSpan = {
  months: number;
  years: number;
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDateRepresentation = (date?: Date): string => {
  return date ? `${monthNames[date.getMonth()]} ${date.getFullYear()}` : 'now';
};

const getJobSpan = (job: Job): JobSpan => {
  const from = job.from;
  const to = job.to ?? new Date();

  if (to.getMonth() < from.getMonth()) {
    return {
      years: to.getFullYear() - from.getFullYear() - 1,
      months: Math.abs(to.getMonth() - from.getMonth()),
    };
  }

  return {
    years: to.getFullYear() - from.getFullYear(),
    months: to.getMonth() - from.getMonth(),
  };
};

export { getDateRepresentation, getJobSpan };
