module.exports = (members) => {
  let res = members.reduce((str, member, index, arr) => {
    const mention = member.user.toString();

    if (arr.length >= 2 && index === arr.length - 1) {
      return (str += ` and ${mention}`);
    } else {
      return (str += index === 0 ? mention : `, ${mention}`);
    }
  }, "");

  return res + (members.length >= 2 ? " are" : " is");
};
