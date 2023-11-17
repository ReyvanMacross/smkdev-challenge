const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMissingNumber(n, arr) {
  // Menghitung total sum dari 1 sampai n
  let totalSum = (n * (n + 1)) / 2;

  // Menghitung sum dari array yang diberikan
  let arrSum = arr.reduce((sum, num) => sum + num, 0);

  // Menghitung angka yang hilang
  let missingNumber = totalSum - arrSum;

  return missingNumber;
}

// Meminta input dari user
rl.question('Masukkan nilai n: ', (nInput) => {
  const n = parseInt(nInput);

  rl.question('Masukkan angka ( pisahkan dengan spasi ): ', (input) => {
    const arr = input.split(" ").map(Number);

    // Memanggil fungsi findMissingNumber dengan input dari user
    let result = findMissingNumber(n, arr);

    // Menampilkan hasil
    console.log(`Angka yang hilang adalah : ${result}`);

    rl.close();
  });
});
