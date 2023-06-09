var adat1 = [[
    "ABC-001", 600, 600, "kezdete: 2023-06-05 11:00, vege: 2023-06-05 14:00"],
    
    
    ["DEF-001", 1800, 600,"kezdete: 2023-06-05 11:00, vege: 2023-06-05 14:00 <br>kezdete: 2023-06-05 14:00, vege: 2023-06-05 17:00 <br>kezdete: 2023-06-05 17:00, vege: 2023-06-05 20:00"],
    
    
    ["GHI-001", 1200, 1200,"kezdete: 2023-06-05 11:00 vege: 2023-06-05 14:00 <br> kezdete: 2023-06-05 17:00, vege: 2023-06-05 20:00"]
    ]
    
    var lepteto = 0;
    function leptet()
    {
    lepteto++;
    
    lepteto = lepteto%3
    console.log(lepteto)
    update()
    }
    function vleptet()
    {
    lepteto = lepteto%3
    if (lepteto == 0){
    lepteto=3
    }
    lepteto--;
    console.log(lepteto)
    
    update()
    }
    
    document.getElementById("rendszám").innerHTML = "rendszám: " + adat1[lepteto][0];
    document.getElementById("számlák").innerHTML ="számlák: "+ adat1[lepteto][1];
    document.getElementById("befizetések").innerHTML ="befizetesek: " + adat1[lepteto][2];
    document.getElementById("parkolások").innerHTML ="parkolások:<br> "+ adat1[lepteto][3];
    
    
    
    function update(){
    document.getElementById("rendszám").innerHTML = "rendszám: " + adat1[lepteto][0];
    document.getElementById("számlák").innerHTML ="számlák: "+ adat1[lepteto][1];
    document.getElementById("befizetések").innerHTML ="befizetések: " + adat1[lepteto][2];
    document.getElementById("parkolások").innerHTML ="parkolások:<br> "+ adat1[lepteto][3];
    }