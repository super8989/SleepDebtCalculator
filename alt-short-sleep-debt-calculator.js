const getActualSleepHours = () => {
  return 6 + 7 + 9 + 8 + 5 + 10 + 1;
};

console.log(getActualSleepHours());

const getIdealSleepHours = idealHours => {
  return idealHours * 7;
}

console.log(getIdealSleepHours(8));

const calculateSleepDebt = () => {
  const ActualSleep = getActualSleepHours();
  const idealSleep = getIdealSleepHours(8);
  if (ActualSleep < idealSleep) {
    console.log(`you need to sleep ${idealSleep - ActualSleep} more hours`);
  } else if (ActualSleep === idealSleep) {
    console.log('Perfect');
  } else {
    console.log('overslept');
  }
}

calculateSleepDebt();
