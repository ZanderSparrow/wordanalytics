
describe('countWords', function() {
	it('counts words in an array', function() {
		expect(W.countWords(['bat', 'face'])).to.equal(2);
	});

	it('counts words in a dictionary', function() {
		expect(W.countWords({a:1, b:3})).to.equal(2);
	});
});

describe('makeDictionary', function() {
	it('converts an array into a dictionary', function() {
		expect(W.makeDictionary(['cats'])).to.eql({cats:1});
	});

	it('counts instances of a word', function() {
		expect(W.makeDictionary(['cats', 'cats', 'cats'])).to.eql({cats: 3});
	});
	
});


	