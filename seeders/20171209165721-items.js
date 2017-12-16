'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('items', [
      
      //// PRODUCTS
      
      {
      id: 1,
      name: 'Product 1 for BPI',
      description: `A longer description for Product 1 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'product',
      dueDate: new Date(),
      estimate: 3,
      priority: 3,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Product 2 for BPI',
      description: `A longer description for Product 2 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'planned',
      type: 'product',
      dueDate: new Date(),
      estimate: 3,
      priority: 2,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'Product 3 for BPI',
      description: `A longer description for Product 3 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'product',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name: 'Product 4 for BPI',
      description: `A longer description for Product 4 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'product',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      name: 'Product 5 for BPI',
      description: `A longer description for Product 5 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'product',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      name: 'Product 6 for BPI',
      description: `A longer description for Product 6 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'product',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      name: 'Product 7 for BPI',
      description: `A longer description for Product 7 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'product',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 8,
      name: 'Product 8',
      description: `A longer description for Product 8 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'product',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      teamId: 1,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 9,
      name: 'Product 9',
      description: `A longer description for Product 9 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'product',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      teamId: 1,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 10,
      name: 'Product 10',
      description: `A longer description for Product 10 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'product',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      teamId: 4,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    //// ECPICS
    
    {
      id: 11,
      name: 'Epic 1 for BPI',
      description: `A longer description for Epic 1 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'epic',
      dueDate: new Date(),
      estimate: 3,
      priority: 3,
      teamId: 2,
      parentId: 1,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 12,
      name: 'Epic 2 for BPI',
      description: `A longer description for Epic 2 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'planned',
      type: 'epic',
      dueDate: new Date(),
      estimate: 3,
      priority: 2,
      teamId: 2,
      parentId: 1,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 13,
      name: 'Epic 3 for BPI',
      description: `A longer description for Epic 3 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'epic',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      teamId: 2,
      parentId: 1,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 14,
      name: 'Epic 4 for BPI',
      description: `A longer description for Epic 4 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'epic',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      teamId: 2,
      parentId: 1,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 15,
      name: 'Epic 5 for BPI',
      description: `A longer description for Epic 5 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'epic',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      teamId: 2,
      parentId: 1,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 16,
      name: 'Epic 6 for BPI',
      description: `A longer description for Epic 6 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'epic',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      teamId: 2,
      parentId: 1,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 17,
      name: 'Epic 7 for BPI',
      description: `A longer description for Epic 7 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'epic',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      teamId: 2,
      parentId: 3,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 18,
      name: 'Epic 8',
      description: `A longer description for Epic 8 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'epic',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      teamId: 2,
      parentId: 2,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 19,
      name: 'Epic 9',
      description: `A longer description for Epic 9 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'epic',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      teamId: 2,
      parentId: 2,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 20,
      name: 'Epic 10',
      description: `A longer description for Epic 10 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'epic',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      parentId: 2,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    //// FEATURES

    {
      id: 21,
      name: 'Feature 1 for BPI',
      description: `A longer description for Feature 1 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'feature',
      dueDate: new Date(),
      estimate: 3,
      priority: 3,
      parentId: 2,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 22,
      name: 'Feature 2 for BPI',
      description: `A longer description for Feature 2 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'planned',
      type: 'feature',
      dueDate: new Date(),
      estimate: 3,
      priority: 2,
      parentId: 2,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 23,
      name: 'Feature 3 for BPI',
      description: `A longer description for Feature 3 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'feature',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      parentId: 12,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 24,
      name: 'Feature 4 for BPI',
      description: `A longer description for Feature 4 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'feature',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      parentId: 12,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 25,
      name: 'Feature 5 for BPI',
      description: `A longer description for Feature 5 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'feature',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      parentId: 13,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 26,
      name: 'Feature 6 for BPI',
      description: `A longer description for Feature 6 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'feature',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      parentId: 15,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 27,
      name: 'Feature 7 for BPI',
      description: `A longer description for Feature 7 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'feature',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      parentId: 16,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 28,
      name: 'Feature 8',
      description: `A longer description for Feature 8 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'feature',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      parentId: 11,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 29,
      name: 'Feature 9',
      description: `A longer description for Feature 9 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'feature',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      parentId: 5,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 30,
      name: 'Feature 10',
      description: `A longer description for Feature 10 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'feature',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      parentId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    //// STORIES

    {
      id: 31,
      name: 'Stories 1 for BPI',
      description: `A longer description for Stories 1 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'story',
      dueDate: new Date(),
      estimate: 3,
      priority: 3,
      parentId: 2,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 32,
      name: 'Stories 2 for BPI',
      description: `A longer description for Stories 2 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'planned',
      type: 'story',
      dueDate: new Date(),
      estimate: 1,
      priority: 2,
      parentId: 7,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 33,
      name: 'Stories 3 for BPI',
      description: `A longer description for Stories 3 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'story',
      dueDate: new Date(),
      estimate: 5,
      priority: 1,
      parentId: 15,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 34,
      name: 'Stories 4 for BPI',
      description: `A longer description for Stories 4 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'story',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      parentId: 15,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 35,
      name: 'Stories 5 for BPI',
      description: `A longer description for Stories 5 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'story',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      teamId: 2,
      parentId: 15,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 36,
      name: 'Stories 6 for BPI',
      description: `A longer description for Stories 6 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'story',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      teamId: 2,
      parentId: 20,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 37,
      name: 'Stories 7 for BPI',
      description: `A longer description for Stories 7 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'story',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      parentId: 27,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 38,
      name: 'Stories 8',
      description: `A longer description for Stories 8 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'story',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      parentId: 27,
      teamId: 2,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 39,
      name: 'Stories 9',
      description: `A longer description for Stories 9 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'story',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      parentId: 30,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 40,
      name: 'Stories 10',
      description: `A longer description for Stories 10 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'story',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      parentId: 30,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    //// TASKS

    {
      id: 41,
      name: 'Task 1 for BPI',
      description: `A longer description for Task 1 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'task',
      dueDate: new Date(),
      estimate: 3,
      priority: 3,
      parentId: 30,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 42,
      name: 'Task 2 for BPI',
      description: `A longer description for Task 2 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'planned',
      type: 'task',
      dueDate: new Date(),
      estimate: 3,
      priority: 2,
      parentId: 8,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 43,
      name: 'Task 3 for BPI',
      description: `A longer description for Task 3 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'task',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      parentId: 15,
      teamId: 2,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 44,
      name: 'Task 4 for BPI',
      description: `A longer description for Task 4 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'task',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      parentId: 37,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 45,
      name: 'Task 5 for BPI',
      description: `A longer description for Task 5 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'task',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      parentId: 37,
      teamId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 46,
      name: 'Task 6 for BPI',
      description: `A longer description for Task 6 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'task',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      teamId: 2,
      parentId: 37,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 47,
      name: 'Task 7 for BPI',
      description: `A longer description for Task 7 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      type: 'task',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      teamId: 2,  
      parentId: 38,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 48,
      name: 'Task 8',
      description: `A longer description for Task 8 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'task',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      parentId: 27,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 49,
      name: 'Task 9',
      description: `A longer description for Task 9 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'task',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      parentId: 39,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 50,
      name: 'Task 10',
      description: `A longer description for Task 10 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      type: 'task',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      parentId: 32,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('items', null, {});
  }
};