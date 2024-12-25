#include<stdio.h>
#define maxsize 100
int main(){
int choice;
int n,a[maxsize];
do{
	printf("\nMENU\n");
	printf("1.Nhap so phan tu va gan gia tri cho mang \n");
	printf("2.In ra gia tri cac phan tu trong mang theo dang(arr[0]=1,arr[1]=5...)\n");
	printf("3.Tim gia tri nho nhat va lon nhat trong mang\n");
	printf("4.In ra tong cua tat ca cac phan tu\n");
	printf("5.Them mot phan tu vao cuoi mang, phan tu moi them vao mang phai do nguoi dung nhap vao\n");
	printf("6.Xoa phan tu tai mot vi tri cu the (nguoi dung nhap vi tri)\n");
	printf("7.Sap xep mang theo thu tu giam dan (Bubble sort)\n");
	printf("8.Cho nguoi dung nhap vao mot phan tu, tim kiem xem phan tu do co ton tai trong mang hay khong (Linear search)\n");
	printf("9.In ra toan bo so nguyen to trong mang.\n");
	printf("\t a. Neu khong co so nguyen to nao thi hien thi ra la khong co so nguyen to nao \n");
	printf("\t b. Neu co so nguyen to trong mang thi hien thi toan bo so nguyen to do ra\n");
	printf("10.Sap xep mang theo thu tu tang dan (Selection sort)\n");
	printf("11.thoat\n") 
	printf("\n");
	printf("Nhap lua chon cua ban: ");
	scanf("%d",&choice);
	
	switch (choice){
		case 1:{
			printf("Nhap so luong phan tu ban muon: ");
			scanf("%d",&n);
			if (n<0||n>maxsize){
				printf("gia tri nhap khong hop le\n");
			}else{
			for (int i=0;i<n;i++){
				printf("Nhap phan gia tri thu a[%d]: ",i);
				scanf("%d",&a[i]);
			}
			}
		
		break;}
		case 2:{
		
			printf("cac phan tu trong mang:\n");
			for (int i=0;i<n;i++){
				printf("arr[%d] = %d, ",i,a[i]);
			}
		break;}
		case 3:{
			int min=a[0],max=a[0];
			for (int i=1;i<n;i++){
				if (a[i]>max){
				max = a[i];
				}
				if (a[i]<min){
				min = a[i];	
				}
			}
			printf("Gia tri lon nhat = %d\n",max);
			printf("Gia tri nho nhat = %d\n",min);
		break;}
		case 4:{
			int sum=0;
			for ( int i=0;i<n;i++){
				sum+=a[i];
			}
			printf("Tong tat ca cac phan tu = %d",sum);
			break;
		}
	
		case 5:{
			int value;
			printf("Nhap phan tu ban muon them vao cuoi mang: ");
			scanf("%d",&value);
			a[n]=value;
			n++;
			printf("Mang sau khi thay doi: ");
			for (int i=0;i<n;i++){
				printf("%d ",a[i]);
			}
			break;
		}
	
		case 6:{
			int delindex;
			printf("Nhap vi tri muon xoa: ");
			scanf("%d",&delindex);
			if (delindex<0||delindex>n){
				printf("vi tri khong hop le\n");				
			}else{
			for (int i=delindex;i<n-1;i++){
			a[i]=a[i+1];	
			}
			n--;	
			}
			break;
		}
	
		case 7:{
			printf("Mang ban dau: ");
    		for (int i = 0; i < n; i++) {
        	printf("%d ", a[i]);
    }
    printf("\n");
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (a[j] < a[j + 1]) {
               
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    printf("Mang sau khi sap xep giam dan: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");
			break;
		}
	
		case 8:{
			int found=0,x;
				printf("nhap vao gia tri can tim: ");
				scanf("%d",&x);
		for (int i=0;i<n;i++){
		if (x==a[i]){
		printf("phan tu nam tai vi tri arr[%d]",i);
		found=1;
		break; 
	}
	}
	 if (!found) 
        printf("Phan tu %d khong ton tai trong mang.\n", n);
			break;
		}
	
		case 9:{
		if (n == 0) {
        	printf("Mang chua co phan tu nao\n");
    		} else {
        	for (int i = 0; i < n; i++) {
            int isPrime = 1; 
            if (arr[i] < 2) {
                isPrime = 0; 
            } else {
                for (int j = 2; j * j <= a[i]; j++) {
                    if (arr[i] % j == 0) {
                        isPrime = 0; 
                        break;
                    }
                }
            }
            if (isPrime) {
            	printf("Cac phan tu la so nguyen to:\n");
                printf("%d ", a[i]);
                sum += a[i];
            }else{
            	printf("khong co so nguyen to nao\n") 
			} 
        
    }
			break;
		}
	
		case 10:{
			int n = sizeof(arr) / sizeof(arr[0]);

    printf("Mang ban dau: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");
    
    
    for (int i = 1; i < n; i++) {
        int key = a[i]; 
        int j = i - 1;

        
        while (j >= 0 &&a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        arr[j+1] = key;
	}
    printf("Mang sau khi sap xep tang dan: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");
			break;
		}
		
		
	}
	default:{
		printf("gia tri khong hop le\n"); 
		break;
	} 
}while (choice!=11);	
}
