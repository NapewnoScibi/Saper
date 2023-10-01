var plansza = [];
var bomby = [];
var sprawdzenie = [];
var tryb = 0;
function wygenerujBomby()
{
    for(let i = 0 ; i < 20;i++)
    {
        bomby[i] = Math.floor(Math.random() * 101);
        sprawdzenie[i] = bomby[i];
        if(i>0)
        {
            for(let x = 0;x<i;x++)
            {
                if(bomby[i] == sprawdzenie[x])
                {
                    console.log("AJ KARAMBA");
                    i--;
                    break;
                }
            }
        }
    }
}
function zmienUstawienia()
{
    let uran = document.getElementById("uranSprawdzenie").checked;
    let edycja = document.getElementById("edycja");
    if(uran == false)
    {
        edycja.innerHTML = "Klasyczna";
    }
    else
    {
        edycja.innerHTML = "Nuklearna😎";
    }
}
function startGry()
{
    // <img src='dynka.gif' alt='dowalona dynia' class='pole'></img>
    let gra = document.querySelector('.'+"gra");
    gra.innerHTML = "";
    wygenerujBomby();
    for(let i = 0 ; i < 100;i++)
    {
        const pole = document.createElement("img");
        pole.setAttribute("src","znak.png");
        pole.setAttribute("class","pole");
        pole.setAttribute("alt","Niewiadomo co jest pod tym");
        pole.setAttribute("onclick","odkryj(this)");
        pole.setAttribute("data-pozycja",i+1);
        document.body.insertBefore(pole , gra);
        gra.appendChild(pole);
        plansza[i] = pole;
    }
}
function odkryj(pole)
{
    const liczba = pole.getAttribute('data-pozycja');
    for(let i = 0 ; i < 20;i++)
    {
        if(liczba == bomby[i])
        {
            pole.setAttribute("src","dynka.gif");
            alert("przegrałeś");
            return null;
        }
    }
    pole.setAttribute("src","mina1.png");
}
