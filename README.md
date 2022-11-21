<h1 align="center">Welcome</h1>
<p align="center">Weebot Multi Device</p>
<div align="center">
<br> Gunakan dengan risiko Anda sendiri!

> Dibuat dengan Baileys dan Map() ( sebagai command handler ) <br />

| Build Pack  | Link                                                                  |
| ----------- | --------------------------------------------------------------------- |
| **FFMPEG**  | [HERE](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **LIBWEBP** | [HERE](https://github.com/clhuang/heroku-buildpack-webp-binaries.git) |

</div><br />
<br />

## Options

Options pada command, yang akan mempermudah kamu untuk membuat/menambahkan fitur<br />

```js
module.exports = {
   name: <String>, // Ex: "menu"
   alias: <Array>, // Ex: ["cmd","help"]
   desc: <String>, // Ex: "Menu adalah command"
   use: <String>,  // Ex: "<teks>"
   category: <String>, // Ex: "umum"
   type: <String>, // Ex: "changelog"
   wait: <Boolean>, // Ex: true
   isOwner: <Boolean>, // Ex: false
   isAdmin: <Boolean>, // Ex: false
   isQuoted: <Boolean>, // Ex: false
   isGroup: <Boolean>, // Ex: false
   isBotAdmin: <Boolean>, // Ex: false
   query: <Boolean and String>, // Ex: "Tunggu Sebentar" / true
   isPrivate: <Boolean>, // Ex: false
   isSpam: <Boolean>, // Ex: true
   isLimit: <Boolean>, // Ex: true
   isLimitGame: <Boolean>, // Ex: false
   noPrefix: <Boolean>, // Ex: true
   isPremium: <Boolean>, // Ex: false
   isMedia: {
      isQVideo: <Boolean>, // Ex: false
      isQAudio: <Boolean>, // Ex: false
      isQImage: <Boolean>, // Ex: false
      isQSticker: <Boolean>, // Ex: false
      isQDocument: <Boolean>, // Ex: false
   }
   isUrl: <Boolean> // Ex: false
}
```

## Contoh Options

Contoh Command : [`./command/umum/help.js`]<br />

```js
{
  name: "help",
  alias: ["h","menu","cmd"],
  desc: "menampilkan menu",
  category: "umum",
  wait: true
}
```

## Highlights

-   [x] Simple Penggunaan,
-   [x] Mudah digunakan,
-   [x] Mudah untuk dirawat/diperbaiki,
-   [x] Dan ringan

## Config

Isi semua yang dibutuhkan di file [`config.json`]<br />

## Instalasi On Termux

### Clone Repo

```bash
> pkg install
> pkg upgrade
> pkg install git
> pkg install ffmpeg && pkg install libwebp
> pkg install nodejs
> git clone --depth=1 https://github.com/AnandaGanz-bot/Kurumi-MD/
> cd rzky-multidevice
> npm install --arch=x64 --platform=linux sharp
> npm start
# Scan QR
```

## Instalasi

### Dibutuhkan

1.  [Nodejs](https://nodejs.org/en/download) 16x/17x
2.  [FFmpeg](https://ffmpeg.org)
3.  [libWebP](https://developers.google.com/speed/webp/download)

### Install Ffmpeg

-   Untuk pengguna Windows, kamu bisa lihat tutorial disini [WikiHow](https://www.wikihow.com/Install-Ffmpeg-on-Windows)<br />
-   Untuk pengguna Linux, kamu bisa pakai manager paket kamu sendiri. Contohnya;

```bash
# apt (Ubuntu)
apt install ffmpeg -y

# pacman (Arch Linux)
pacman -S ffmpeg
```

### Install libWebP

-   Untuk pengguna Windows,

1.  Unduh libWebP untuk Windows dari [sini](https://developers.google.com/speed/webp/download)
2.  Ekstrak ke C:\
3.  Ganti nama folder yang diekstrak ke `libwebp`
4.  Buka PowerShell dan jalankan perintah berikut;

```cmd
setx /m PATH "C:\libwebp\bin;%PATH%"
```

> Bila sukses terinstal dengan baik, silahkan check dengan perintah berikut di Command Prompt

```cmd
webpmux -version
```

-   Untuk pengguna Linux, kamu bisa pakai manager paket kamu. Contohnya;

```bash
# apt (Ubuntu)
apt install libwebp-dev -y

# pacman (Arch Linux)
pacman -S libwebp
```

### Start Bot

Start and Scan QR<br />

```bash
npm start
```

# Thanks To

-   [`Faiz Bastomi`](https://github.com/FaizBastomi)
-   [`Dehante`](https://github.com/Dehanjing)
-   [`RzkyFdlh`](https://github.com/Rizky878)
