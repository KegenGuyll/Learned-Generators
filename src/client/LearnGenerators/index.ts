/**
 * @noSelfInFile
 *
 * NOTE: Use this at the top of your TypeScript files. This prevents functions & methods
 *       from prepending a 'self' reference, which is usually not necessary and complicates
 *       rendered Lua code.
 */

// PipeWrench API.
import * as Events from '@asledgehammer/pipewrench-events';

// Add all initialization code here.
Events.onGameStart.addListener(() => {
  Events.levelPerk.addListener((player, perk, level, levelUp) => {
    if (perk.getName() === 'Electrical' && levelUp) {
      if (level === 3) {
        player.learnRecipe('Generator');
        player.setHaloNote('You now understand Generators!');
      }
    }
  });
});
