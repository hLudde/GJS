# Introduction

Hi, this is a very early WIP emulator for the gameboy handheld system, it is not gona be perfect, and is just a project i am working on own my own currently.

# how to build and run

Clone the project to a folder, open a terminal in the folder and type `npm install` 

Configure the `.env.example` file as you want it or leave it as default

Rename the `.env.example` to `.env`

After npm has done its thing, you can run the tests if you feel like with `npm test`

Build the project with `npx webpack`

Open the `index.html`file located in `dist/index.html`.

**as you can see, there is not alot going on in index.html currently, however the tests are fun to look at i guess...** 😋

# References

this awesome manual that explains the inner workings of the GameBoy http://marc.rawer.de/Gameboy/Docs/GBCPUman.pdf

on how to read what the opcodes do in the manual above and other relevant information i refer to theese two great sites: https://www.chibiakumas.com/z80/ and http://z80-heaven.wikidot.com
