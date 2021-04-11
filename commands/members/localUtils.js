const { Role } = require("discord.js");

function generateMentionsString(members) {
  let res = members.reduce((str, member, index, arr) => {
    const mention = member.user.toString();

    if (arr.length >= 2 && index === arr.length - 1) {
      return (str += ` and ${mention}`);
    } else {
      return (str += index === 0 ? mention : `, ${mention}`);
    }
  }, "");

  return res + (members.length >= 2 ? " are" : " is");
}

function hasRequesterHigherRoleThanTarget(commandTarget, commandRequester) {
  const targetRoles = commandTarget.roles.cache;
  const requesterRoles = commandRequester.roles.cache;
  const membersRoles = targetRoles.concat(requesterRoles);

  membersRoles.sort((roleA, roleB) => Role.comparePositions(roleB, roleA));
  const highestRole = membersRoles.first();

  return requesterRoles.has(highestRole.id) && !targetRoles.has(highestRole.id);
}

module.exports = {
  generateMentionsString,
  hasRequesterHigherRoleThanTarget
};
