const calculatePrimes = data => {
  const primes = [];
  for (const candidate of data) {
    let isPrime = true;
    for (let c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
        // not prime
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
};

export const primePowersSelector = (state, ownProps) => {
  const { data } = state;
  console.time('calculatePrimes');
  const primes = calculatePrimes(data[ownProps.dataSet]);
  console.timeEnd('calculatePrimes');
  return primes;
};
