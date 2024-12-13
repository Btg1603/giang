#include<stdio.h>
int main(){
	int n,i;
	printf("nhap vao moot so nguyen duong: ");
	scanf("%d",&n);
	if (n<=0) {
		printf("gia tri khong hop le");
		return 1;
	}
	for (i=1;i<=n;i++){
	if (n % i==0){
		printf("%d\n",i);
	}	
	}
	return 0;
}
