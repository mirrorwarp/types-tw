(function(Scratch) {
  'use strict';

  class Fetch {
    /** @returns {Scratch.Info} */
    getInfo () {
      return {
        id: 'fetch',
        name: 'Fetch',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GET [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          }
        ]
      };
    }

    /**
     * @param {{URL: string;}} args
     */
    get (args) {
      return Scratch.fetch(Scratch.Cast.toString(args.URL))
        .then(r => r.text())
        .catch(() => '');
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);

(function(Scratch) {
  'use strict';
  class Test {
    getInfo () {
      return {
        id: 'testbutton',
        name: 'test 123',
        docsURI: 'https://extensions.turbowarp.org',
        blocks: [
          {
            blockType: Scratch.BlockType.BUTTON,
            func: 'MAKE_A_VARIABLE',
            text: 'Make variable'
          },
          {
            blockType: Scratch.BlockType.BUTTON,
            text: ':)',
            func: 'hello'
          }
        ]
      };
    }
    async hello () {
      Scratch.canOpenWindow('https://example.com/').then((allowed) => {
        if (allowed === true) {
          // ...
        }
      });
      if ((await Scratch.canNotify()) === true) {
        // ...
      }
      alert('>:]');
    }
  }
  Scratch.extensions.register(new Test());
})(Scratch);
