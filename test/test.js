var assert = require('assert');
var Divisible = require("../divisibleClass");

describe('App', function() {
    it('should return resultText', function() {
      let text = [];
      let resultText = [
        1,
        "foo",
        "bar",
        "foo",
        5,
        "foo bar",
        7,
        "foo",
        "bar",
        "foo",
        11,
        "foo bar",
        13,
        "foo",
        "bar",
        "foo",
        17,
        "foo bar",
        19,
        "foo",
        "bar",
        "foo",
        23
    ]
      Divisible.recursive(1, text, 12);
      assert.equal(text, result.text);
    });
});

