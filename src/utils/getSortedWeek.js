export const getSortedWeekObject = schedule => {
  
    const sorter = {
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5,
        "saturday": 6,
        "sunday": 7
      };

      return [...schedule].filter(el => sorter[el.name]).sort(function sortByDay(a, b) {
        return sorter[a.name] - sorter[b.name];
      });
}