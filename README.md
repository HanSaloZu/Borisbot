# Borisbot
Borisbot will help you simplify the process of moderating the discord server. Borisbot can ban/unban/kick server members, delete messages and more.

## Commands
#### Guild info
* `guild-created-at` - gives the creation time of the guild
* `member-count` - gives the full amount of members in this guild
* `guild-owner` - gives the owner of the guild

#### Members
* `registered-at @<username>(optional, default value: message sender)` - gives the time when the user was registered
* `joined-at @<username>(optional, default value: message sender)` - gives the time when the user joined the guild
* `ban @<username> @<username> @<username> ...(must be at least one username)` - bans the users from the guild
* `kick @<username> @<username> @<username> ...(must be at least one username)` - kicks the users from the guild
#### Messages
* `purge <amount>(optional, default value: 2) @<senderUsername>(optional, default value: all users)` - deletes messages in a text channel

## Getting started
* Install [Node.js](https://nodejs.org/en/)
* Download Borisbot(`git clone https://github.com/HanSaloZu/Borisbot.git` or download the ZIP)
* `cd` to the Borisbot directory
* run `npm install` to install the Node dependencies
* After cloning the project and installing all dependencies, you need to add your Discord API token in the config/config.json file
* To start bot run `npm run start`

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
