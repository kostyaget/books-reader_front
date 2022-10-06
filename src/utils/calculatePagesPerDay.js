export const calculatePagesPerDay = (startDate, finishDate, numOfPages) => {
  const start = new Date(startDate);
  const finish = new Date(finishDate);
  let numOfDays = (finish - start) / 1000 / 60 / 60 / 24 + 1;
  let pagesPerDay = numOfPages / numOfDays;
  return pagesPerDay;
};

// const pageSummary = userDate?.data?.user?.info?.progress.reduce(
//   (a, e, i) => a.concat(i === 0 ? e.pagesAmount : e.pagesAmount + a.at(-1)),
//   []
// );
//  const progressDate = userDate?.data?.user?.info?.progress.map(
//    (i) => i.trainingDate
//  );
//  const progressPage = userDate?.data?.user?.info?.progress.map(
//    (e) => e.pagesAmount
//  );
