/*global describe, it */

require(['main'], function (main) {
  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should be something', function () {
        expect(main.version).toEqual(_.VERSION);
      });
    });
  });
});



