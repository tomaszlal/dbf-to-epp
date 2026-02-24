import fs = require("fs");

interface Good {
  [key: string]: string | number | null;
}

const input_data_goods = fs.readFileSync('input/towary.txt', 'utf-8');
const input_data_names = fs.readFileSync('input/nazwy.txt', 'utf-8');

const blocksOfGoods = input_data_goods.trim().split(/\n\s*\n/);
const blocksOfNames = input_data_names.trim().split(/\n\s*\n/);

console.log(`Found ${blocksOfGoods.length} blocks.`);
console.log(`First block:\n${blocksOfGoods[0]}`);

console.log(`Found ${blocksOfNames.length} blocks.`);
console.log(`First block:\n${blocksOfNames[0]}`);


const goods: Array<Good> = blocksOfGoods.map(block => {
    const item: Good = {};
    const lines = block.split('\n');
    lines.forEach(line => {
        const separatorIndex = line.indexOf(':');
        if (separatorIndex === -1) return;

        const key = line.substring(0, separatorIndex).trim();
        const value = line.substring(separatorIndex + 1).trim();

        if (key) {
          if (value === '') {
            item[key] = null;
          } else if (key === 'Nrid') {
            // Nrid zachowujemy jako string, żeby nie zgubić zera na początku
            item[key] = value;
          } else if (!isNaN(Number(value)) && value !== '') {
            // Pozostałe wartości liczbowe zamieniamy na typ number
            item[key] = Number(value);
          } else {
            item[key] = value;
          }
        }
      });
      return item;
});


const names: Array<Good> = blocksOfNames.map(block => {
    const item: Good = {};
    const lines = block.split('\n');
    lines.forEach(line => {
        const separatorIndex = line.indexOf(':');
        if (separatorIndex === -1) return;

        const key = line.substring(0, separatorIndex).trim();
        const value = line.substring(separatorIndex + 1).trim();

       if (key) {
          if (value === '') {
            item[key] = null;
          } else if (key === 'Nrid') {
            // Nrid zachowujemy jako string, żeby nie zgubić zera na początku
            item[key] = value;
          } else if (!isNaN(Number(value)) && value !== '') {
            // Pozostałe wartości liczbowe zamieniamy na typ number
            item[key] = Number(value);
          } else {
            item[key] = value;
          }
        }
      });
      return item;
});




goods.forEach((good) => {
  if (good['Nrid'] === "031087") {
    console.log('Found item with Nrid 031087:');
    console.log(good);
    good
  }
});

names.forEach((name) => {
  if (name['Nrid'] === "031087") {
    console.log('Found name with Nrid 031113:');
    console.log(name);
  }
});



