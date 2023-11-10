def hitungCaraPenempatanKuda(n):
    if n < 1:
        return 0
    return (n * n * (n * n - 1) / 2) 

try:
    n = int(input("Masukkan nilai n (1-100): "))
    if 1 <= n <= 100:
        for k in range(1, n + 1):
            cara = hitungCaraPenempatanKuda(k)
            print(cara)
    else:
        print("Nilai n harus berada di antara 1 hingga 100.")
except ValueError:
    print("Masukan harus berupa angka.")
