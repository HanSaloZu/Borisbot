# Borisbot

Borisbot will help you simplify the process of moderating the discord server. Borisbot can ban/unban/kick server members, delete messages and more.

## Commands

#### Guild info

- `guild-created-at` - gives the creation time of the guild
- `member-count` - gives the full amount of members in this guild
- `guild-owner` - gives the owner of the guild

#### Members

- `registered-at @<username>(optional, default value: message sender)` - gives the time when the user was registered
- `joined-at @<username>(optional, default value: message sender)` - gives the time when the user joined the guild
- `ban @<username> @<username> @<username> ...(must be at least one username)` - bans the users from the guild
- `kick @<username> @<username> @<username> ...(must be at least one username)` - kicks the users from the guild

#### Messages

- `purge <amount>(optional, default value: 2) @<senderUsername>(optional, default value: all users)` - deletes messages in a text channel

## Getting started

### Installation

- Install [Node.js](https://nodejs.org/en/)
- Install [Docker](https://www.docker.com/)(optional)
- Download Borisbot(`git clone https://github.com/HanSaloZu/Borisbot.git` or download the ZIP)

### Configuration

- `cd` to the bot directory
- After cloning the project you need to add your Discord API token in the config/config.json file
- In the same file, you can change the commands prefix, date format and message colors

### Starting the bot

```
npm run start
```

### Starting the bot using Docker

```
docker build -t borisbot .

docker run -d borisbot
```

### After starting the bot

Enter `help` in the guild chat for a list of commands

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
