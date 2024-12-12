#include <stdio.h>

int main() {
    int choice;
    float money, result;   
    const float USD_TO_VND = 23500;
    const float EUR_TO_VND = 25000;
    const float GBP_TO_VND = 28000;
    const float JPY_TO_VND = 180;
    const float VND_TO_USD = 1 / 23500.0;
    const float VND_TO_EUR = 1 / 25000.0;
    const float VND_TO_GBP = 1 / 28000.0;
    const float VND_TO_JPY = 1 / 180.0;

    printf("==============CHUONG TRINH CHUYEN DOI TIEN TE=============\n");
    printf("1. USD to VND\n");
    printf("2. EUR to VND\n");
    printf("3. GBP to VND\n");
    printf("4. JPY to VND\n");
    printf("5. VND to USD\n");
    printf("6. VND to EUR\n");
    printf("7. VND to GBP\n");
    printf("8. VND to JPY\n");
    printf("Nhap don vi tien te ban muon chuyen doi (1-8): ");
    scanf("%d", &choice);

    printf("Nhap so tien can chuyen doi: ");
    scanf("%f", &money);

    switch (choice) {
        case 1:
            result = money * USD_TO_VND;
            printf("%.2f USD = %.2f VND\n", money, result);
            break;
        case 2:
            result = money * EUR_TO_VND;
            printf("%.2f EUR = %.2f VND\n", money, result);
            break;
        case 3:
            result = money * GBP_TO_VND;
            printf("%.2f GBP = %.2f VND\n", money, result);
            break;
        case 4:
            result = money * JPY_TO_VND;
            printf("%.2f JPY = %.2f VND\n", money, result);
            break;
        case 5:
            result = money * VND_TO_USD;
            printf("%.2f VND = %.2f USD\n", money, result);
            break;
        case 6:
            result = money * VND_TO_EUR;
            printf("%.2f VND = %.2f EUR\n", money, result);
            break;
        case 7:
            result = money * VND_TO_GBP;
            printf("%.2f VND = %.2f GBP\n", money, result);
            break;
        case 8:
            result = money * VND_TO_JPY;
            printf("%.2f VND = %.2f JPY\n", money, result);
            break;
        default:
            printf("Lua chon khong hop le!\n");
            break;
    }

    return 0;
}

