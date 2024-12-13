#include<stdio.h>
int main(){
	int n,i;
	printf("nhap vao mot so nguyen duong: ");
	scanf("%d",&n);
	if (n==2||n==1) printf("la so nguyen to"); 
	if (n<1) printf("%d khong la so nguyen to",n); 
	for  (i=2;i*i<=n;i++){
		if (n%i==0){
		printf(" %d khong la so nguyen to",n);
		break;
	}else
	 printf(" %d la so nguyen to",n);
	 break;
	}
	return 0;
}
