#include<stdio.h>
int main (){
	float g,l;
	printf("nhap so gio lam viec ");
	scanf("%f",&g);
	printf("nhap muc luong theo gio ");
	scanf("%f",&l);
	if (g>160)
	{
	printf("tien luong co ban la %f\n", (g*l));
	printf("phu cap la %f\n",((g*l)*10)/100);
	printf("tong luong la %f\n", (g*l));
} else
    printf("tien luong co ban la %f\n", (g*l));
    printf("phu cap la %f\n = 0");
    printf("tong luong la %f\n", (g*l));
    
	return 0;
}
