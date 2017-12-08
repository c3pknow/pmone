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

    return queryInterface.bulkInsert('stories', [
      {
      id: 1,
      name: 'Stories 1 for BPI',
      description: `A longer description for Stories 1 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      dueDate: new Date(),
      estimate: 3,
      priority: 3,
      productId: 1,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Stories 2 for BPI',
      description: `A longer description for Stories 2 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'planned',
      dueDate: new Date(),
      estimate: 3,
      priority: 2,
      productId: 1,
      epicId: 1,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'Stories 3 for BPI',
      description: `A longer description for Stories 3 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      productId: 1,
      featureId: 1,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name: 'Stories 4 for BPI',
      description: `A longer description for Stories 4 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      productId: 1,
      epicId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      name: 'Stories 5 for BPI',
      description: `A longer description for Stories 5 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      productId: 1,
      featureId: 2,
      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      name: 'Stories 6 for BPI',
      description: `A longer description for Stories 6 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      productId: 1,
      epicId: 3,

      createdBy: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      name: 'Stories 7 for BPI',
      description: `A longer description for Stories 7 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'completed',
      dueDate: new Date(),
      estimate: 3,
      priority: 1,
      productId: 3,
      createdBy: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 8,
      name: 'Stories 8',
      description: `A longer description for Stories 8 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      dueDate: new Date(),
      estimate: 3,
      priority: 4,
      productId: 2,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 9,
      name: 'Stories 9',
      description: `A longer description for Stories 9 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      dueDate: new Date(),
      estimate: 10,
      priority: 5,
      productId: 2,
      createdBy: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 10,
      name: 'Stories 10',
      description: `A longer description for Stories 10 for BPI.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nisl nec purus ornare faucibus non a nulla. Nullam malesuada orci urna, et imperdiet justo aliquet a. Cras imperdiet finibus nisl. Nunc sollicitudin ultrices lectus, efficitur accumsan ante interdum faucibus. Ut a justo tincidunt, efficitur neque ac, ultrices mauris. Suspendisse sed vestibulum ligula. Praesent lacinia lacus eget ipsum scelerisque pharetra. Quisque nisi urna, ultricies vel commodo vel, semper in metus. Quisque nisi sapien, aliquam ac condimentum ut, ultrices suscipit tellus. Sed mollis mattis augue, ac tempus purus feugiat quis. Duis venenatis consequat neque, ut cursus justo tristique a. Vivamus sit amet felis sit amet lacus consequat tristique.
      
      Nunc sollicitudin blandit sodales. Maecenas laoreet ornare justo. Suspendisse finibus turpis libero, at tempor velit molestie eu. Maecenas sodales eget orci at maximus. Mauris posuere sollicitudin libero, a pretium mi varius vel. Sed luctus magna sed magna eleifend, et efficitur mi bibendum. Donec rhoncus ante sit amet tincidunt fermentum. Nullam vulputate sed nisl sit amet volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla nunc ut rhoncus vestibulum. Vivamus libero enim, iaculis ut leo bibendum, lacinia viverra ligula. Fusce pretium tellus orci. Nunc non lectus vel odio vehicula faucibus nec nec ex. Praesent feugiat lacinia nisi, eget varius libero dictum pulvinar.
      
      Suspendisse nec varius est, at accumsan neque. Sed blandit dapibus arcu, sit amet maximus augue congue et. Quisque aliquet metus quis faucibus pellentesque. Cras eget dictum purus. Fusce orci nisi, blandit ut mauris sed, molestie volutpat dolor. Praesent accumsan ultrices elit, non efficitur sapien sodales sit amet. Cras molestie aliquam metus. Vestibulum non eros ipsum. Vivamus at nisl non purus gravida sodales. Donec condimentum dignissim tellus egestas rutrum. Vivamus sagittis, est vitae varius pellentesque, felis nibh malesuada diam, in commodo lectus urna sed diam. Donec cursus id elit id tempor. Proin ornare eu dui et pellentesque. Nunc eget lacinia libero. Pellentesque scelerisque nec tortor ut iaculis. In a est sed elit facilisis mattis. `,
      status: 'under consideration',
      dueDate: new Date(),
      estimate: 5,
      priority: 6,
      productId: 2,
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
    return queryInterface.dropTable('stories')
  }
};
