
function isArabicAlphabet(c)
{
    c = c.charAt(0);
    return (c >= 'ء' && c <= "ي");
}

function isConnected(c)
{
    //checks whether the argument character can be recursively connected to its next character
    c = c.charAt(0);
    return ["ء", "ا", "أ", "إ", "آ", "ؤ", "د", "ذ", "ر", "ز", "و", "ة"].indexOf(c) >= 0;
}

function getPositionVariants(c)
{
    switch (c)
    {
        case "ء":
            return [];
    }
}


function encodePositions(txt)
{
    for (let c=0; c < txt.length; c++)
    {
        let initial = true;
        let final = false;
        if (c + 1 >= txt.length || !isArabicAlphabet(txt.charAt(c + 1)))
        {
            final = true;
        }
        if (isArabicAlphabet(txt.charAt(c)))
        {
            if(initial)
            {

            }
        }
    }
}