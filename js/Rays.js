var no=11,ans,i;

for( i =2 ; i<= no/2; i++)
{
    ans = no % i;
}
    if(ans == 0)
        {
            console.log('not a prime number');

        }
        else
        {
            console.log('prime number');
        }