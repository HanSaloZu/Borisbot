# Borisbot

Borisbot will help you simplify the process of moderating the discord server. Borisbot can ban/kick guild members, delete messages, collect information about user/guild/guild member and more.

## Commands

#### Guild

- `guild-info` - gives complete information about the guild

#### Members

- `user-info @<username>(optional, default value: message sender)` - gives complete information about the user/guild member
- `ban @<username> @<username> @<username> ...(must be at least one username)` - bans the users from the guild
- `kick @<username> @<username> @<username> ...(must be at least one username)` - kicks the users from the guild

#### Messages

- `purge <amount>(optional, default value: 2) @<senderUsername>(optional, default value: all users)` - deletes messages in a text channel

### Other

- `flipcoin` - flip a coin
- `btc` - gives the current bitcoin price (Powered by [CoinDesk](https://www.coindesk.com/price/bitcoin))
- `uptime` - sends the bot uptime
- `version` - gives the current version of the bot

## Getting started

### Installation

- Install [Node.js](https://nodejs.org/en/)
- Install [Docker](https://www.docker.com/)(optional)
- Download Borisbot(`git clone https://github.com/HanSaloZu/Borisbot.git` or download the ZIP)
- `cd` to the bot directory

### Configuration

- After cloning the project you need to add your Discord API token in the config/config.json file
- In the same file, you can change the commands prefix, date format and message colors

### Starting the bot

```
# install the Node dependencies
npm install

npm run start
```

### Starting the bot using Docker

```
# build the image
docker build -t borisbot .

# run the image
docker run -d borisbot
```

### After starting the bot

Enter `help` in the guild chat for a list of commands

### List of permissions that the bot must have to work properly

- Send Messages
- Read Message History
- Manage Messages
- Embed Links
- Mention Everyone
- Kick Members
- Ban Members

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
