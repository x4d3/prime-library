module("Prime Library Test");

test("isPrime", function() {
	ok(PrimeLibrary.isPrime(2));
	ok(PrimeLibrary.isPrime(3));
	ok(!PrimeLibrary.isPrime(4));
	ok(PrimeLibrary.isPrime(5));
	ok(!PrimeLibrary.isPrime(6));
	ok(PrimeLibrary.isPrime(7));
	ok(!PrimeLibrary.isPrime(8));

	ok(PrimeLibrary.isPrime(104723));
	ok(PrimeLibrary.isPrime(104729));

});

test("factor", function() {
	deepEqual(PrimeLibrary.factor(1), [ 1 ]);
	deepEqual(PrimeLibrary.factor(2), [ 2 ]);
	deepEqual(PrimeLibrary.factor(3), [ 3 ]);
	deepEqual(PrimeLibrary.factor(4), [ 2, 2 ]);
	deepEqual(PrimeLibrary.factor(5), [ 5 ]);
	deepEqual(PrimeLibrary.factor(6), [ 2, 3 ]);
	deepEqual(PrimeLibrary.factor(7), [ 7 ]);
	deepEqual(PrimeLibrary.factor(104728), [ 2, 2, 2, 13, 19, 53 ]);

});

test("nextPrime", function() {
	deepEqual(PrimeLibrary.nextPrime(1), 2);
	deepEqual(PrimeLibrary.nextPrime(2), 3);
	deepEqual(PrimeLibrary.nextPrime(3), 5);
	deepEqual(PrimeLibrary.nextPrime(4), 5);
	deepEqual(PrimeLibrary.nextPrime(5), 7);
	deepEqual(PrimeLibrary.nextPrime(6), 7);
	deepEqual(PrimeLibrary.nextPrime(7), 11);
	deepEqual(PrimeLibrary.nextPrime(104730), 104743);

});
