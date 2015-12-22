
describe('countWords', function() {
	it('counts words in an array', function() {
		expect(W.countWords(['bat', 'face'])).to.equal(2);
	});

	it('counts words in a dictionary', function() {
		expect(W.countWords({a:1, b:3})).to.equal(2);
	})
});


	