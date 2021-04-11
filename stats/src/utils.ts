export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/') //['23','10', '2018]
    .map((value: string): number => parseInt(value));

  return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
};