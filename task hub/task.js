function minimumNumber(numbers) {
    let result = numbers.reduce((a, b) => a + b);
    for (let i = result; ; i++) {
      if (nextPrime(i)) return i - result;
    }
    function nextPrime(sum) {
      if (sum < 2) return false;
      if (sum % 2 === 0) return false;
      for (let i = 3; i * i < sum; i += 2) {
        if (sum % i === 0) return false;
      }
      return true;
    }
  }