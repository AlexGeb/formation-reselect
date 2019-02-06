import { createSelectorCreator } from 'reselect';
import memoizer from 'fast-memoize';

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

const dataSelector = state => state.data;
const dataSetSelector = (_, props) => props.dataSet;

const unboundedCacheSelectorCreator = createSelectorCreator(memoizer);

export const primePowersSelector = unboundedCacheSelectorCreator(
  [dataSelector, dataSetSelector],
  (data, dataSet) => {
    console.time('calculatePrimes');
    const primes = calculatePrimes(data[dataSet]);
    console.timeEnd('calculatePrimes');
    return primes;
  }
);
