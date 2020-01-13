x = null;

if(x)
{
    console.log(x+"true nulll");
}
else
{
    console.log(x+"false");
}


x = undefined;

if(x)
{
    console.log(x+"true undefined");
}
else
{
    console.log(x+"false");
}

x = Symbol();

if(x)
{
    console.log(String(x)+"true symbol");
}
else
{
    console.log(String(x)+"false");
}

x = {a:2};

if(x)
{
    console.log(x+"true OBJECT");
}
else
{
    console.log(x+"false");
}

