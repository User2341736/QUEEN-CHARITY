//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6xuv7u.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "263775614627";
global.owner = process.env.OWNER_NUMBER || "263775614627";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kwe3i5.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUs5QWNoMnBtQldnSXM1d1JGRmpmMVkrR1cvWG1nSGJUMk55bERkRzlrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUThRcXNySHVnUVV6a0o1TVB3QXMrQW5JNnpwTDJWUHZuVXg5TzJObC9WUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQnZzUldGOVZoY3pzWTgxbTdyY0lMSlgzMUQydHdRd2lRV3ZNMHF6VlVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOaDJjN2MvOHF6N25zVCsvTmtUZ0dxVmRiM3VGYXlTMzI1WnAvMU1NeUE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOeHUvSXhnSzV1U0lGQzVHSXVzZ04zNjBCWC9OQi9ud0lNWUJUc3VwVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ2c1d2Yjc3VEJoTHZnVDZrMklJSEh5R0g4S01vb2ZEUWY3Q2M2QWVIM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpNNmg5M29FUk1LRCtnNll4RjYxd1N1Tjk1RFRaYTFPN3B2VkxmTE0yQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWNLUHVwM3I2NjkxSUhubDZ6K2V5QzEyaE9lbVdpcEZjKzVKMkI0WUd6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKRjh3WVRwL1VjR25kSDhaaUVKbk9YeTAzRHdWMGlVdFlhQ3RwUFNuNGVNdmxTeS9FUVZIbmF6ZW1oRG5VWDY5ODBBcVRacE9sWW9IdE9XK0c0NEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJkTVpYRmVodUJRZEVTOXNOVzRGelhnU0QvTmZUSHhwUFNFb2lvV3E0aWZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NTYxNDYyN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBOUQ5RDkwOUZGM0U0OTI3NUVERjBFNjZGQzJEMDhCOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyNjQ5MzQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3NzU2MTQ2MjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEJFQkI4MDk1OTBENkI2NjAwNEJDN0E3Njg4ODg5RDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjY0OTM0OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQi1NbFE1YUNUNnljaWx6YkpNa09TdyIsInBob25lSWQiOiIxZjJlYjMzMC0zMTg5LTRkNTEtYmJiNS1iOWFmMzEyYzRmZDUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFFxZXUybk5BeWJxMGcyNkRSeUF0R1F1enVvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii94OUtlc01uaUpBYXZLTHkyL2lqbUhlVk00cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKUDFSM0VYMSIsIm1lIjp7ImlkIjoiMjYzNzc1NjE0NjI3OjU1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09mQzFPSUdFUExDbUxvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitVNTF2ZXgyY3cvRWo4d2Y3L3VuNDFqenlHOStEakI5Rjk1cDJNbGhoeGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFWdjU5TDV1KzlmeHVKOVJITzhmc0tObGZVa3k0ejhDSnQrWTJiUTVnc1B4Wm1uMExmVTNnZzczRmNlSWEzdzhrMnZ6MnpyaVgvVXRxcklYblBxVUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYMHhldHdaWlNISVB1YWdUcXZZdVEvL0xIdGs5b2I1R1lMWk9iNkFHRnI0UmVKRVA1MWNnUjRFSDR1OFVDY2JpaFNhS29XajdtbytDZzNMNCs2amNEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3NTYxNDYyNzo1NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmbE9kYjNzZG5NUHhJL01IKy83cCtOWTg4aHZmZzR3ZlJmZWFkakpZWWNaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNjQ5MzQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUsvZiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "DON 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`DON_XMD`",
  ownername: process.env.OWNER_NAME || "𒀱ꪳ𓊈𒆜𓂀DON𓂀𒆜𓊉 𒀱",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
