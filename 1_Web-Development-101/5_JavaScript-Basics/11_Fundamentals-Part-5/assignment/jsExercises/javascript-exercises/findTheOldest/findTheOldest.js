let findTheOldest = function(people) {
  const currentYear = 2021;

  const sorter = (a, b) => {
    const age = person => {
      if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
      } else {
        return currentYear - person.yearOfBirth;
      }
    }
    return age(a) - age(b);
  }

  return people.sort(sorter)[people.length - 1];
}

module.exports = findTheOldest
