#include <stdio.h>

int main() {
    int n;
    printf("Nhap vao so luong so nguyen to can tim: ");
    scanf("%d", &n);

  
    if (n <= 0) {
        printf("So nhap vao phai la so nguyen duong.\n");
        return 1;
    }
    
    

    int count = 0;
    int num = 2;
    
    printf("Cac so nguyen to dau tien la:\n");
    while (count < n) {
        int isPrime = 1; 

       
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                isPrime = 0; 
                break;
            }
        }

        if (isPrime) {
            printf("%d ", num);
            count++;
        }
        num++;
    }
    printf("\n");

    return 0;
}

