#!/usr/bin/env ts-node

const args = process.argv.slice(2);
const name = args[0] || "World";

console.log(`Hello, ${name}! This is running from the Linux console.`);