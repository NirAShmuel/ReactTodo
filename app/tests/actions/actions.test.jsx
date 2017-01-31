var expect = require('excpect');
var actions = require('actions');

describe('actions,' () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'same search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });
});
